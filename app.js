const express = require('express');
const path = require('path');
const app = express();
const ejes = require('ejs');
const { createRequire } = require('module');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
     res.send('Hola Mundo!');
 });

//static
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, ()=> console.log('listening on port 3000'));
