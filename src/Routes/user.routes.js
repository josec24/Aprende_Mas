const express=require('express')
const userRouter=express.Router()
const jwt =require('jsonwebtoken');

const {
    // renderSignUpForm,
    signup,
    // renderSigninForm,
    signin,
    
    read,
    update,
    // logout
    }=require('../controllers/user.controller');

userRouter.post('/signup', signup);

userRouter.post('/signin', signin);


const verifyJMT=(req,res,next)=>{
    const token=req.headers["x-access-token"];

    if(!token){
        res.send("No token")
    }else{
        jwt.verify(token,"jwtSecret",(err,decoded)=>{
            if(err){
                res.json({auth:false, message:"Fallo"})
            }else{
                req.email=decoded.email;
                res.send(req.email)
                next();
            }
        });
    }

};

userRouter.get("/isUserAuth",verifyJMT,(request,response)=>{
    response.send("Atenticado")
});

//////
userRouter.get('/read',read);
userRouter.put('/update',update);

userRouter.get('/',(req,res)=>{
    console.log('Server get')
})

module.exports=userRouter