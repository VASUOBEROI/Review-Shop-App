const Product=require('../models/product');


const getLandingPage=(req,res,next)=>{
    res.render('admin/landingPage.ejs',
    {pageTitle:"Admin-LandingPage"
    ,pageHeading:"Review Shop App"
});
}

const getAddReview=(req,res,next)=>{
    res.render('admin/addReviewPage.ejs',
    {
      pageTitle:"Admin-Add-Review",
      pageHeading:"Review Shop App"
    });
}

const getReviews=(req,res,next)=>{
    
    Product.fetchAll((reviews)=>{
        res.render('admin/showReviews.ejs',{pageTitle:"ShowReviews",pageHeading:"Review Shop App",reviewsArray:reviews});
    })

    
}

const postReviews=(req,res,next)=>{
// res.render('',{});
console.log(req.body);
const newProduct=new Product(req.body.productTitle,req.body.productPrice,req.body.productRating,req.body.productReview);
newProduct.save();
res.redirect('/admin/reviews');
}



module.exports={
    getLandingPage:getLandingPage,
    getAddReview:getAddReview,
    getReviews:getReviews,
    postReviews:postReviews
}