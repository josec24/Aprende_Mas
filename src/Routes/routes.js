const express=require('express')
const router=express.Router()
const Customers=require('../models/SignUpModels')


router.post('/signup',(request,response)=>{
    const signedUpUser=new Customers({
        name:request.body.name,
        lastname:request.body.lastname,
        email:request.body.email,
        phone:request.body.phone
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

});


router.get('/',(req,res)=>{
    console.log('Server get')
})

module.exports=router