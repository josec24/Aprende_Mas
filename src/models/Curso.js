const mongoose =require('mongoose')

const cursoTemplate=new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:false
    },
    codigo:{
        type:String,
        require:false,
        unique:true
    }

    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Curso',cursoTemplate)