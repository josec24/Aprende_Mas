const express=require('express')
const userRouter=express.Router()
const jwt =require('jsonwebtoken');

const {
    deleteUser,
    // renderSignUpForm,
    signup,
    // renderSigninForm,
    signin,
    read,
    update,
    updateEmail,
    
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
userRouter.put('/updateEmail',updateEmail); 
userRouter.delete('/delete/:id',deleteUser);


userRouter.get('/',(req,res)=>{
    console.log('Server get')
})

module.exports=userRouter