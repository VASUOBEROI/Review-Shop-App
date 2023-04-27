const express=require('express');
const adminController=require('../controllers/admin');


const router=express.Router();

// GET  : /admin
router.get('/',adminController.getLandingPage);
// GET  : /admin/add-review
router.get('/add-review',adminController.getAddReview);
// GET  : /admin/edit-review/productId
router.get('/edit-review/:productId',adminController.getEditReview);
// GET  : /admin/reviews
router.get('/reviews',adminController.getReviews);
// GET  : /admin/reviews/productId
router.get('/reviews/:productId',adminController.getReview);
// POST : /admin/add-review
router.post('/add-review',adminController.postAddReview);
// POST : /admin/edit-review
router.post('/edit-review',adminController.postEditReview);


module.exports={
    Router:router
}