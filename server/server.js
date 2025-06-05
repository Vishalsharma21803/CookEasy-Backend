const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
const protectedRoutes=require('./routes/protectedRoutes');

require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api',protectedRoutes);

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


app.get('/',(req,res)=>{
    res.send("welcome to homepage");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});