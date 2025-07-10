const express=require('express');
const router=express.Router();
const {createRecipe, getAllRecipe, getRecipeById, updateRecipe, getMyRecipes, deleteRecipe}=require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/my-recipes', authMiddleware, getMyRecipes);

//Public routes
router.get('/',getAllRecipe);
router.get('/:id',getRecipeById);

//Protected routes
router.post('/',authMiddleware,createRecipe);
router.put('/:id',authMiddleware,updateRecipe);
router.delete('/:id',authMiddleware, deleteRecipe);

module.exports=router;