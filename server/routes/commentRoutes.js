const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {addComment, getComment, deleteComment}=require('../controllers/commentController');

router.get('/:id', getComment);
router.post('/:id',authMiddleware, addComment);
router.delete('/:recipeId/:commentId', authMiddleware, deleteComment);

module.exports=router;