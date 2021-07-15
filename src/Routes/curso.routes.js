const {Router}=require('express')
const cursoRouter=Router()

const {
    // renderSignUpForm,
    addcurso,
    // renderSigninForm,
    getcurso,
    // logout
    }=require('../controllers/curso.controller');

    cursoRouter.post('/addcurso', addcurso);
    cursoRouter.get('/getcurso', getcurso);

// userRouter.post('/signin', signin);

module.exports=cursoRouter