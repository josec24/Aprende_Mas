const usersCtrl={};
const passport=require('passport');

const Users=require('../models/User');

usersCtrl.signup=async (request,response)=>{
    const {usuario,email,password}=request.body;
    console.log(usuario)
    console.log(email)
    console.log(password)
    if(password.length<=4){
        // errors.push({text:'password debe tener mas de 4 caracteres'});
        console.log('password debe tener mas de 4 caracteres')
    }else{
        const emailUser=await Users.findOne({email:email});
        if(emailUser){
            console.log('esta')
        }else{
            const signedUpUser=new Users({
                    usuario:request.body.usuario,
                    email:request.body.email,
                    password:request.body.password
                })
                signedUpUser.password=await signedUpUser.encryptPassword(password)
                signedUpUser.save()
                .then(data=>{
                    response.json(data)
                })
                .catch(error=>{
                    response.json(error)
                })
        }
    }
};



usersCtrl.signin=function(request,response,next){
    passport.authenticate('local', function(err, user, info) {
        // failureRedirect:'/signin',
        // successRedirect:'/notes',
        // failureFlash:true
        
        if (err) { return next(err); }
        // user will be set to false, if not authenticated
        if (!user) {
            
            res.status(401).json(info); //info contains the error message
        } else {
            response.send('verdadero')
            // if user authenticated maintain the session
            req.logIn(user, function() {
                // do whatever here on successful login
                
                
            })
        }   
        
    })(request,response);
    // response.send(verificador)
};




module.exports=usersCtrl;