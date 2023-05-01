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

const getEditReview=(req,res,next)=>{
    const productId=req.params.productId;
    Product.fetchOne(productId,(productId,product)=>{
        res.render('admin/editReview.ejs',{
          pageTitle:"Admin Edit Review",
          pageHeading:"Review Shop App",
          path:"/admin/add-review",
          product:product  
        })
    })
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
    res.render("admin/showReview.ejs",{pageTitle:"Show-Review",pageHeading:"Review Shop App",product:product,path:'/admin/reviews'});
   });
}

// Adding Product for the first time.
const postAddReview=(req,res,next)=>{
// res.render('',{});
// console.log(req.body);
const newProduct=new Product(null,req.body.productTitle,req.body.productPrice,req.body.productRating,req.body.productReview,req.body.productImgUrl);
newProduct.save();
res.redirect('/admin/reviews');
}
// Edit Older Product.
const postEditReview=(req,res,next)=>{
const product=new Product(req.body.productId,req.body.productTitle,req.body.productPrice,req.body.productRating,req.body.productReview,req.body.productImgUrl);
product.save();
 res.redirect('/admin/reviews');
}

// Delete Review.

const postDeleteReview=(req,res,next)=>{
const productId=req.body.productId;
Product.delete(productId);
res.redirect('/admin/reviews');
}



module.exports={
    getLandingPage:getLandingPage,
    getAddReview:getAddReview,
    getEditReview:getEditReview,
    getReviews:getReviews,
    getReview:getReview,
    postAddReview:postAddReview,
    postEditReview:postEditReview,
    postDeleteReview:postDeleteReview
}