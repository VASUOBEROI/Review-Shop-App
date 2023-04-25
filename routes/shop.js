const express=require('express');

const router=express.Router();
const shopController=require('../controllers/shop');

// GET : /shop
router.get('/',shopController.getShopPage);
// GET : /shop/productId
router.get('/:productId',shopController.getShopProduct);




module.exports={
    Router:router
}