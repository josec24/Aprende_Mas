const {Router}=require('express')
const teoriaRouter=Router()

const {
    // renderSignUpForm,
    addteoria,
    // renderSigninForm,
    postteoria,
    // logout
    }=require('../controllers/teoria.controller');

    teoriaRouter.post('/addteoria', addteoria);
    teoriaRouter.post('/postteoria', postteoria);
// userRouter.post('/signin', signin);

module.exports=teoriaRouter