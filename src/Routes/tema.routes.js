const {Router}=require('express')
const temaRouter=Router()

const {
    // renderSignUpForm,
    addtema,
    // renderSigninForm,
    posttema,
    // logout
    }=require('../controllers/tema.controller');

    temaRouter.post('/addtema', addtema);
    temaRouter.post('/posttema', posttema);
// userRouter.post('/signin', signin);

module.exports=temaRouter