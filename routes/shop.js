const express=require('express');

const router=express.Router();
const shopController=require('../controllers/shop');

// GET : /shop
router.get('/',shopController.getShopPage);
// GET : /shop/cart
router.get('/cart',shopController.getCart);
// GET : /shop/productId
router.get('/:productId',shopController.getShopProduct);
// POST : /shop/cart
router.post('/cart',shopController.postCart); 



module.exports={
    Router:router
}