const express=require('express');
const router=express();
const authMiddleware=require('../middleware/authMiddleware');

router.get('/secret',authMiddleware,(req,res)=>{
    res.json({
        msg:"This is protected route",
        user:req.body
    });
});

module.exports=router;