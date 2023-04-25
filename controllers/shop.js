const Product=require('../models/product');


const getShopPage=(req,res,next)=>{


     Product.fetchAll((reviews)=>{
        res.render('shop/shop.ejs',{pageTitle:"Shop",pageHeading:"Review Shop App",
        products:reviews,path:'/shop'});
    })
}
const getShopProduct=(req,res,next)=>{
    const productId=req.params.productId;
   Product.fetchOne(productId,(productId,product)=>{
    // console.log(productId);
    res.render("shop/product.ejs",{pageTitle:"Show-Review",pageHeading:"Review Shop App",product:product,path:'/shop'});
   });
}


module.exports={
    getShopPage:getShopPage,
    getShopProduct:getShopProduct
}