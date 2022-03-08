const express = require('express');
const app = express();
const PORT = 3000;
const ejs = require('ejs')

/* asignamos como gestor de plantillas ejs */
app.set('view engine', 'ejs');

/* declaramos un objeto usuario */
const usuario ={
    nombre:"Juan José",
    apellido:"Barberis"
}

/* ruteamos home, rendereamos bienvenidos.ejs, asignamos usuario a la variable persona y lo pasamos a bienvenidos.ejs */
app.get('/',(_req,res)=>{
    res.render('vistas/bienvenidos',{persona:usuario})
})



/* iniciamos sevidor en puerto 3000*/
app.listen(PORT,()=>{
    console.log(`server escuchando en puerto ${PORT}`);
})