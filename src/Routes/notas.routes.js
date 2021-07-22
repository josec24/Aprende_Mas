const {Router}=require('express')
const notasRouter=Router()

const {
    
    addnotas,
    
    getnotas,
    
    }=require('../controllers/notas.controller');

    notasRouter.post('/addnotas', addnotas);
    notasRouter.get('/getnotas', getnotas);


module.exports=notasRouter
