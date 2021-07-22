const teoriaCtrl={};
const passport=require('passport');
const Teorias=require('../models/Teoria');

teoriaCtrl.addteoria=async (request,response)=>{
    const {nombre,codigoTema}=request.body;
    console.log(nombre)
    console.log(codigoTema)

    // const cod=await Teorias.findOne({codigo:codigo});

    // if(cod){
        // console.log('Ya esta en la bd')
    // }else{
        const newTeorias=new Teorias({nombre,codigoTema});
        await newTeorias.save();
        
        console.log('Agregado en la bd')
        // response.send('verdadero')
    // }

};

teoriaCtrl.postteoria=async (request,response)=>{
    const {codigo}=request.body;
    // console.log('gaa'+codigo)
    const Teoria=await Teorias.find({codigoTema:codigo});
    console.log(Teoria)
    response.send(Teoria)
};


module.exports=teoriaCtrl;