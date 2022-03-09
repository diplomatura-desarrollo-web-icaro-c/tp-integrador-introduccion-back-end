const express = require('express');
const path = require('path');
const app = express();
const ejes = require('ejs');

app.set('view engine','ejs');

///Declaramos un objeto, que tendra nombre y appellido
const usuario={
    nombre:'nombre',
    apellido:'apellido',
}

app.get('/', (req, res) => {
    res.render('vistas/home',{
        usuario:usuario
    });
});



app.listen(3000, () => console.log('Listening on port 3000'));

