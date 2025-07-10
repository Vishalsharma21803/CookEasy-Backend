const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {addFavorite, removeFavorite, getFavorite}=require('../controllers/favoriteController');

router.post('/:recipeId', authMiddleware, addFavorite);
router.delete('/:recipeId',authMiddleware,removeFavorite);
router.get('/',authMiddleware,getFavorite);

module.exports=router;