const mongoose =require('mongoose')

const bcrypt=require('bcryptjs');

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
    },
    rol:{
        type:String,
        require:true
    },

    
    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})

signUpTemplate.methods.encryptPassword=async password=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};

signUpTemplate.methods.matchPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports=mongoose.model('Users',signUpTemplate)