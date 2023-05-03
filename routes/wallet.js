const express=require('express');

const router=express.Router();

const walletController=require('../controllers/wallet');

// GET : /wallet.
router.get('/',walletController.getWalletPage);
// POST : /wallet/add-transaction
router.post('/add-transaction',walletController.postAddTransaction);

module.exports={
    Router:router
}