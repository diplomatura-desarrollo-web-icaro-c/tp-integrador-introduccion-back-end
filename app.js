const express = require('express');
const path = require('path');
const app = express();
const ejes = require('ejs');
const { createRequire } = require('module');

app.set('view engine','ejs');

const usuario = {
    nombre: 'Gimena',
    apellido: 'Di Stefano Nicolina'
}

app.get('/',(req,res)=>{
     res.render('../vistas/bienvenido', {
         usuario: usuario
     });
 });

//static
//app.use('/public', express.static(__dirname,'public'));

app.listen(3000, ()=> console.log('listening on port 3000'));
