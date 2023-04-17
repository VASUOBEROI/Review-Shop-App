const express=require('express');

const router=express.Router();
const shopController=require('../controllers/shop');

// GET : /shop
router.get('/',shopController.getShopPage);




module.exports={
    Router:router
}