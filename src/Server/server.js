const express=require('express')

const cookieParser = require("cookie-parser");


const mongoose=require('mongoose')
const userUrls=require('../Routes/user.routes')
const cors=require('cors')
const passport=require('passport');
const session=require('express-session');
const app=express()
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

app.use(cookieParser());


app.use('/',userUrls)
app.use(require('../Routes/curso.routes'));
app.use(require('../Routes/tema.routes'));
app.use(require('../Routes/teoria.routes'));

app.listen(3001,()=>{
    console.log("Server corriendo")
});

