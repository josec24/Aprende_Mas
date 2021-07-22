const notasCtrl={};
const passport=require('passport');

const Notas=require('../models/Notas');

NotasCtrl.addnotas=async (request,response)=>{
    const {nombre,codigo}=request.body;
    console.log(nombre)
    console.log(codigo)

    const cod=await Notas.findOne({codigo:codigo});

    if(cod){
        console.log('Ya esta en la bd')
    }else{
        const newNotas=new Notas({nombre,codigo});
        await newNotas.save();

        function loggedIn(req, res, next) {
            if (req.user) {
                console.log('logueado')
            } else {
                console.log(' no logueado')
            }
        }
        loggedIn(request,response)
        console.log('Agregado en la bd')
        response.send('verdadero')
    }

};

notasCtrl.getnotas=async (request,response)=>{
    const notas=await Notas.find();
    response.send(notas)
};


module.exports=notasCtrl;
