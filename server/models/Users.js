const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required: true
    },
    profileImage: { 
        type: String,
        default: ""
    },
    favorites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Recipe"
    }]
});

const User=mongoose.model('User',userSchema);
module.exports=User;