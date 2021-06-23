//config rutas
const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.send('server conection')
});

module.exports=router;