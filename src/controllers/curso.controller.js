const cursosCtrl={};
const passport=require('passport');

const Cursos=require('../models/Curso');

cursosCtrl.addcurso=async (request,response)=>{
    const {nombre,codigo}=request.body;
    console.log(nombre)
    console.log(codigo)

    const cod=await Cursos.findOne({codigo:codigo});

    if(cod){
        console.log('Ya esta en la bd')
    }else{
        const newCursos=new Cursos({nombre,codigo});
        await newCursos.save();
        console.log('Agregado en la bd')
        response.send('verdadero')
    }

};

cursosCtrl.getcurso=async (request,response)=>{
    const cursos=await Cursos.find();
    response.send(cursos)
};


module.exports=cursosCtrl;