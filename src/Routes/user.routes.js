const express=require('express')
const userRouter=express.Router()
const Users=require('../models/User')
const passport=require('passport');

const {
    // renderSignUpForm,
    signup,
    // renderSigninForm,
    signin,
    // logout
    read,
    update,
    }=require('../controllers/user.controller');


var verificador=""

userRouter.post('/signup', signup);

userRouter.post('/signin', signin);
//////
userRouter.get('/read',read);
userRouter.put('/update',update);
userRouter.get('/',(req,res)=>{
    console.log('Server get')
})

module.exports=userRouter