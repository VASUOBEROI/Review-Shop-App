const Transaction=require('../models/transaction');


const getWalletPage=(req,res,next)=>{
res.render('wallet/walletPage.ejs',{pageTitle:"My-Wallet",path:"/wallet",pageHeading:"My-Wallet"});  
}

const postAddTransaction=(req,res,next)=>{
const transaction=new Transaction(null,req.body.transactionDate,req.body.transactionType,req.body.transactionMode,req.body.transactionAmount,req.body.transactionDescription);
transaction.save();
 res.redirect('/wallet');
}




module.exports={
    getWalletPage:getWalletPage,
    postAddTransaction:postAddTransaction
}