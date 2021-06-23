const mongoose =require('mongoose')

const signUpTemplate=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:false
    }// },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Customers',signUpTemplate)