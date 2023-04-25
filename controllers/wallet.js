const getWalletPage=(req,res,next)=>{
// res.send("Hi From Wallet Page");  
res.render('wallet/transaction.ejs',{pageTitle:"My-Wallet",path:"/wallet",pageHeading:"My-Wallet"});  
}






module.exports={
    getWalletPage:getWalletPage
}