const express=require('express');

const router=express.Router();

const walletController=require('../controllers/wallet');

// GET : /my-wallet.
router.get('/',walletController.getWalletPage);

module.exports={
    Router:router
}