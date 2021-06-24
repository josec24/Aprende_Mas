const mongoose =require('mongoose')

const signUpTemplate=new mongoose.Schema({
    usuario:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:false
    }

    
    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Users',signUpTemplate)