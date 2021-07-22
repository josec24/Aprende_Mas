const mongoose =require('mongoose')

const temaTemplate=new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    codigoCurso:{
        type:String,
        require:true
    },
    codigo:{
        type:String,
        require:true,
        unique:true
    }

    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Tema',temaTemplate)