const mongoose =require('mongoose')

const notasTemplate=new mongoose.Schema({
    nombredelcurso:{
        type:String,
        require:true
    },

    codigo:{
        type:String,
        require:true,
        unique:true
    },
    nota1:{
        type:String,
        require:true
    },
    nota2:{
        type:String,
        require:true
    },
    nota3:{
        type:String,
        require:true
    },


})


module.exports=mongoose.model('Notas',notasTemplate)
