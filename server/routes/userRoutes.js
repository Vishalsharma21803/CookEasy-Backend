const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {/*getMyRecipes, */ getFavoriteRecipes, getUserProfile}=require('../controllers/userController');

// router.get('/my-recipes', authMiddleware, getMyRecipes);
router.get('/favorites', authMiddleware, getFavoriteRecipes);
router.get('/profile', authMiddleware, getUserProfile);


module.exports=router;