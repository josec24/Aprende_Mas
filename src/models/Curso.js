const mongoose =require('mongoose')

const cursoTemplate=new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    codigo:{
        type:String,
        
        unique:true
    }

    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Curso',cursoTemplate)