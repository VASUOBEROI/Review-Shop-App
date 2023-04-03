const Product=require('../models/product');


const getLandingPage=(req,res,next)=>{
    res.render('admin/landingPage.ejs',
    {pageTitle:"Admin-LandingPage"
    ,pageHeading:"Welcome Admin to Review-Shop-App"
});
}

const getAddReview=(req,res,next)=>{
    res.render('admin/addReviewPage.ejs',
    {
      pageTitle:"Admin-Add-Review",
      pageHeading:"Hi Admin, Write the Product Review"
    });
}

const getReviews=(req,res,next)=>{
    res.render('admin/showReviews.ejs',{});
}

const postReviews=(req,res,next)=>{
// res.render('',{});
console.log(req.body);
const newProduct=new Product(req.body.productTitle,req.body.productReview,req.body.productUrl);
newProduct.save();
res.redirect('/admin/reviews');
}



module.exports={
    getLandingPage:getLandingPage,
    getAddReview:getAddReview,
    getReviews:getReviews,
    postReviews:postReviews
}