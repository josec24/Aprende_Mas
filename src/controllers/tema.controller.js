const temasCtrl={};
const passport=require('passport');
const Temas=require('../models/Tema');

temasCtrl.addtema=async (request,response)=>{
    const {nombre,codigoCurso,codigo}=request.body;
    console.log(nombre)
    console.log(codigoCurso)
    console.log(codigo)

    const cod=await Temas.findOne({codigo:codigo});

    if(cod){
        console.log('Ya esta en la bd')
    }else{
        const newTemas=new Temas({nombre,codigoCurso,codigo});
        await newTemas.save();
        
        console.log('Agregado en la bd')
        response.send('verdadero')
    }

};

temasCtrl.posttema=async (request,response)=>{
    const {codigo}=request.body;
    const Tema=await Temas.find({codigoCurso:codigo});
    console.log(codigo)
    response.send(Tema)
};


module.exports=temasCtrl;