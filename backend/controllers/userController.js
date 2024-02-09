const User =require('../models/userModel.js');
//login user

const loginUser=(req,res)=>{
    res.json({message:"Login user"});
}

//signup user
const signupUser=(req,res)=>{

    const {email, password}=req.body;

    try{
        const user=User.signup(email, password);
        console.log(user)

        res.status(200).json({email,user});
    }catch(error){
        res.status(400).json({error: error.message});
    }
   
}

module.exports={loginUser, signupUser};