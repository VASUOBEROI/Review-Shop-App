
const getShopPage=(req,res,next)=>{
     res.render('shop/shop.ejs',{pageTitle:"Shop",pageHeading:"Review Shop App"});
}



module.exports={
    getShopPage:getShopPage
}