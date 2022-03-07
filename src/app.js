const express = require('express');
const app = express();
const path= require('path');
const PORT = 3000;


/* Gestor de plantillas */
const ejs = require('ejs');
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.send('Hola mundo desde el home')
})



app.use(express.static(path.join(__dirname,'../public')));
console.log(__dirname);// devuelve la ruta completa desde c:/.. hasta ../src en donde se esta ejecutando app.js

app.listen(PORT,()=>console.log(`Listen on port ${PORT}`));