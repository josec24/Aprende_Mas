const express=require('express')
const app=express()
const mongoose=require('mongoose')
const routesUrls=require('../Routes/routes')
const cors=require('cors')


mongoose.connect('mongodb+srv://userjuan:aprendomas@cluster0.dzcfy.mongodb.net/store-api?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}
);

app.use(express.json())
app.use(cors())
app.use('/',routesUrls)

app.listen(3001,()=>{
    console.log("Server corriendo")
});

//react 3000

//3001