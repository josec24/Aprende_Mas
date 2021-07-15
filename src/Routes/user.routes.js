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
// userRouter.post('/signup',async (request,response)=>{
//     //inicio
    
// });


// userRouter.post('/signup',async (request,response)=>{
//     //inicio
//     const {usuario,email,password}=request.body;
//     console.log(usuario)
//     console.log(email)
//     console.log(password)
//     if(password.length<=4){
//         // errors.push({text:'password debe tener mas de 4 caracteres'});
//         console.log('password debe tener mas de 4 caracteres')
//     }else{
//         const emailUser=await Users.findOne({email:email});
//         if(emailUser){
//             console.log('esta')
//         }else{
//             const signedUpUser=new Users({
//                     usuario:request.body.usuario,
//                     email:request.body.email,
//                     password:request.body.password
//                 })
//                 signedUpUser.password=await signedUpUser.encryptPassword(password)
//                 signedUpUser.save()
//                 .then(data=>{
//                     response.json(data)
//                 })
//                 .catch(error=>{
//                     response.json(error)
//                 })
//         }
//     }
// });


userRouter.post('/verificar',async (request,response)=>{
    //inicio
    const {email,password}=request.body;
    console.log(email)
    console.log(password)
    const emailUser=await Users.findOne({email:email})
    const passwordUser=await Users.findOne({password:password})
    if(emailUser&&passwordUser){
        verificador="verdadero"
        console.log(verificador)
        response.send(verificador)
    }else{
        verificador="falso"
        console.log(verificador)
        response.send(verificador)
    }
});





userRouter.get('/',(req,res)=>{
    console.log('Server get')
})

module.exports=userRouter