const express=require('express');
const mongoose=require('mongoose');

const cors=require('cors');

const routes=require('./routes');



const app=express();
//nuestra api rest ya se puede conectar a mongodb
mongoose.Promise=global.Promise;//
mongoose.connect(
    'mongodb+srv://userjuan:aprendomas@cluster0.dzcfy.mongodb.net/store-api?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
    }
);

//habilitar body parser
app.use(express.json());
app.use(express.urlencoded());

//habilitar cors
app.use(cors());

app.use('/',routes());

app.listen(5000, function(){
    console.log('web express en ejecucion');
})