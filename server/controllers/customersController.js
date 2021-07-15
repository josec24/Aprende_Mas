const Customers=require('../models/Customers');


//agregar cliente
exports.add= async(req,res)=>{
const customer= new Customers(req.body);
    try{
        await customer.save();
        res.json({message: 'nuevo cleinte agragado'});
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};
//primera accion:list o index
//
exports.list= async(req,res)=>{
    try{
    const customers = await Customers.find({});//otener
    res.json(customers);//devuelve clientes en format json
    }catch (error) {
        console.log(error);
        res.send(error);
        next();//continea el flujo de la peticion
    }
};
//leer cliente por id
exports.show=async(req,res,next)=>{
    try{
        const customer=await Customers.findById(req.params.id);
        if(!customer){
            res.status(404).json({
                message:'el cliente no existe'
            });
        }
        res.json(customer);
    }catch(eror){
        res.status(400).json({
            message:'error al procesar la peticion'
        })
    }
}