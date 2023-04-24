const Product=require('../models/product');


const getShopPage=(req,res,next)=>{


     Product.fetchAll((reviews)=>{
        res.render('shop/shop.ejs',{pageTitle:"Shop",pageHeading:"Review Shop App",
        products:reviews,path:'/shop'});
    })
}



module.exports={
    getShopPage:getShopPage
}