const mongoose =require('mongoose')

const teoriaTemplate=new mongoose.Schema({
    nombre:{
        type:String,
        require:false
    },
    codigoTema:{
        type:String,
        require:true
    },

    // },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
})


module.exports=mongoose.model('Teoria',teoriaTemplate)