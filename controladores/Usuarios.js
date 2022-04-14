const { response } = require('express');
const { json } = require('express/lib/response');
const fetch = require('node-fetch')

const {
  QueryListOfUsers,
  QueryUserById,
} = require("../service/UsuarioAccesoFuenteDatos");

const GetAllUsers = (req, res) => {
 let respuesta = fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => res.json(data))
  
  return respuesta;
};


// con API
const GetUsuario = (req, res) => {
  const userId = req.params.id;
  let respuesta = fetch('http://localhost:3001/'+userId)
  .then(response => response.json())
  .then(data => res.render('vistas/vistaUsuario', {
    usuario: data
  }))

return respuesta
  
};


const GetFormulario = (req, res) => {
  res.render('vistas/formulario');
};


const ProcesarFormulario = (req, res) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  console.log('http://localhost:3001/usuarios?nombre='+nombre+'&apellido='+apellido);
  fetch('http://localhost:3001/usuarios?nombre='+nombre+'&apellido='+apellido)
     .then(response => response.json())
     .then(data => {

      console.log(data);
      
      if(data==true){
        var usuarioObtenido = {
            nombre,
            apellido
          }
        
          res.render('vistas/vistaUsuario', {
            usuario: usuarioObtenido
          })
      } else{ 
        res.send("<h1> Usuario incorrecto volver al <a href='/usuarios'> formulario</a> </h1>")
      }}
      )
}


module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
