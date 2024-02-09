const mongoose= require('mongoose');
const bcrypt=require('bcrypt');

const Schema= mongoose.Schema

const userSchema= new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
})

//static signup method

userSchema.statics.signup= async function (email, password){
    const exists= this.findOne({email})

    if (exists){
        throw Error('Email already exists!');
    }

    const salt=bcrypt.genSalt(10);
    const hash=bcrypt.hash(password,salt); 

    const user= this.create({email, password:hash})

    return user
}

module.exports=mongoose.model('User', userSchema);