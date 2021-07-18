const usersCtrl={};
const passport=require('passport');

const jwt =require('jsonwebtoken');

const Users=require('../models/User');

var rol=''

usersCtrl.signup=async (request,response)=>{
    const {usuario,email,password}=request.body;
    console.log(usuario)
    console.log(email)
    console.log(password)
    rol='alumno'
    console.log(rol)
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
                    password:request.body.password,
                    rol:rol
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
            response.status(401).json(info); //info contains the error message
        } else {
            
            // if user authenticated maintain the session
            request.logIn(user, function() {
                // do whatever here on successful login
                if (request.user) {
                    console.log(request.user)

                    //yoyo
                    const email=request.user.email;
                    const token=jwt.sign({email},"jwtSecret",{
                        expiresIn:300,
                    })
                    console.log('dadas')
                    console.log(token)
                    
                    // response.send('verdadero');
                    response.json({auth:true,token:token,result:request.user});
                    //yoyo


                    console.log('logueado')
                } else {
                    console.log('no logueado')
                }
            })
        }
    })(request,response);
    // response.send(verificador)
};



usersCtrl.read=async(request,response)=>{
    Users.find({},(err,result)=>{//busca todos los usuriaos
        if(err){
            response.send(err); 
        }
        response.send(result);
    })
};

usersCtrl.update=async(request,response)=>{
    const newProfile=request.body.newProfile;
    const id=request.body.id;
    try{
        await Users.findById(id, (err,updateProfile)=>{
            updateProfile.usuario=newProfile;
            updateProfile.save();
            response.send("update");
        });
    }catch(err){
        console.log(err);
    }
};



module.exports=usersCtrl;