const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
const recipeRoutes=require('./routes/recipeRoutes');
const favoriteRoutes=require('./routes/favoritesRoutes');
const commentRoutes=require('./routes/commentRoutes');
const userRoutes=require('./routes/userRoutes');
const uploadRoutes=require('./routes/uploadRoutes');

require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/recipes',recipeRoutes);
app.use('/api/favorites',favoriteRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/user',userRoutes);
app.use('/api',uploadRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log("error occurred: ",err);
})  


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running on port: ",PORT);
});