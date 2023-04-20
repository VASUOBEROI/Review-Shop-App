const express=require('express');
const adminController=require('../controllers/admin');


const router=express.Router();

// GET  : /admin
router.get('/',adminController.getLandingPage);
// GET  : /admin/add-review
router.get('/add-review',adminController.getAddReview);
// GET  : /admin/reviews
router.get('/reviews',adminController.getReviews);
// GET  : /admin/reviews/productId
router.get('/reviews/:productId',adminController.getReview);
// POST : /admin/reviews
router.post('/reviews',adminController.postReviews);



module.exports={
    Router:router
}