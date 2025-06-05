const jwt=require('jsonwebtoken');
const JWT_SECRET=process.env.JWT_SECRET;

function authMiddleware(req,res,next){
    const token=req.header("Authorization")?.replace("Bearer ","");

    if(!token){
        res.status(401).json({msg:"No token, access denied"});
    }
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        res.status(400).json({msg: "Invalid Token"});
    }

}
module.exports= authMiddleware;