const express=require('express')
const app=express()
const mongoose=require('mongoose')
const userUrls=require('../Routes/user.routes')
const cors=require('cors')
const passport=require('passport');
const session=require('express-session');

require('../config/passport')

mongoose.connect('mongodb+srv://userjuan:aprendomas@cluster0.dzcfy.mongodb.net/store-api?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}
);

app.use(express.json())
app.use(cors())
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/',userUrls)

app.listen(3001,()=>{
    console.log("Server corriendo")
});

