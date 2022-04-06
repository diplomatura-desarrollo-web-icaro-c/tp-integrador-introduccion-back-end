// Make express server
const express = require("express");
const app = express();
const PORT = 3000;

//express validator
/* const { body, validationResult } = require('express-validator'); */

//BODY-PARSER
const bodyParser = require('body-parser');

//Requerimos rutas
const userRoutes = require("../routes/Usuarios");

/* yo */
//session y cookies
const sessions = require('express-session');
const unDia = 1000*60*60*24;
const unMinuto = 1000*60;
//const cookieParser=require('cookie-parser');

//usamos sesiones
app.use(sessions({
	secret: "123456",
	resave: false,
	saveUninitialized:true, //true ya depreciado config a false ver doc
	cookie: { maxAge:unDia }
    //cookie: { maxAge:unMinuto }
}));

//app.use(cookieParser())
/* fin yo */

//usamos body-parser
app.use(bodyParser.urlencoded({extended:true}))

//declaro carpeta estatica public para guardar css
const path = require('path');
app.use(express.static(path.join(__dirname,'../public')));

//seteamos visor de plantilla ejs
app.set('view engine', 'ejs')

app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
