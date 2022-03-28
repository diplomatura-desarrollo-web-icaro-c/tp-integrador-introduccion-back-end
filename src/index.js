// Make express server
const express = require("express");
const app = express();
const PORT = 3000;

//express validator
const { body, validationResult } = require('express-validator');

//BODY-PARSER
const bodyParser = require('body-parser');

//Requerimos rutas
const userRoutes = require("../routes/Usuarios");


//usamos body-parser
app.use(bodyParser.urlencoded({extended:true}))

//declaro carpeta estatica public para guardar css
const path = require('path')
app.use(express.static(path.join(__dirname,'../public')));

//seteamos visor de plantilla ejs
app.set('view engine', 'ejs')

app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
