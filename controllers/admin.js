const Product=require('../models/product');


const getLandingPage=(req,res,next)=>{
    res.render('admin/landingPage.ejs',
    {pageTitle:"Admin-LandingPage"
    ,pageHeading:"Review Shop App",
    path:"/admin"
});
}

const getAddReview=(req,res,next)=>{
    res.render('admin/addReviewPage.ejs',
    {
      pageTitle:"Admin-Add-Review",
      pageHeading:"Review Shop App",
      path:"/admin/add-review"
    });
}

const getReviews=(req,res,next)=>{
    
    Product.fetchAll((reviews)=>{
        res.render('admin/showReviews.ejs',{pageTitle:"ShowReviews",pageHeading:"Review Shop App",
        products:reviews,path:'/admin/reviews'});
    })

    
}
const getReview=(req,res,next)=>{
   // extracting dynamic parameter of url.
   const productId=req.params.productId;
   Product.fetchOne(productId,(productId,product)=>{
    // console.log(productId);
    res.render("admin/showReview.ejs",{pageTitle:"Show-Review",product:product});
   });
}

const postReviews=(req,res,next)=>{
// res.render('',{});
console.log(req.body);
const newProduct=new Product(req.body.productTitle,req.body.productPrice,req.body.productRating,req.body.productReview,req.body.productImgUrl);
newProduct.save();
res.redirect('/admin/reviews');
}



module.exports={
    getLandingPage:getLandingPage,
    getAddReview:getAddReview,
    getReviews:getReviews,
    getReview:getReview,
    postReviews:postReviews
}