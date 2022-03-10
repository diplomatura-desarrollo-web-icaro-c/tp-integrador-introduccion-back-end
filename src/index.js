//Crear el servidor
const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));


const userRoutes=require('../routes/usersRouter');

app.use('/usuarios',userRoutes);



app.listen(PORT,()=>{
    console.log(`Server up on Port ${PORT}`);
})