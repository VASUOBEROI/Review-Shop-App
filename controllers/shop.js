const Product=require('../models/product');
const Cart=require('../models/cart');


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
const postCart=(req,res,next)=>{
//This will be executed for post requests. So data : productId will come through body only rather than url(route params)
const productId=req.body.productId;
// Only Reason to use Productmodel here is to pass price to add-Product in Cart.
Product.fetchOne(productId,(productId,product)=>{
Cart.addProduct(productId,product.productPrice);
res.redirect('/shop');
})
}


module.exports={
    getShopPage:getShopPage,
    getShopProduct:getShopProduct,
    postCart:postCart
}