const fetch = require("node-fetch");
const {
  QueryListOfUsers,
  QueryUserById,
} = require("../service/UsuarioAccesoFuenteDatos");


const GetAllUsers = (req, res) => {
  let respuesta = fetch("http://localhost:3001")
    .then(response => response.json())
    .then(data => res.json(data))
  return respuesta
};

const GetUsuario = (req, res) => {
  const userId = req.params.id;
  let respuesta = fetch("http://localhost:3001/" + userId)
    .then(response => response.json())
    .then(data => 
      res.render('vistas/vistaUsuario', {
        usuario: data
      })
    )
  return respuesta
};

const GetFormulario = (req, res) => {
  res.render('vistas/formulario');
};

const ProcesarFormulario = (req, res) => {
  var vectorUsuarios = QueryListOfUsers();
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;

  for (let i = 0; i < vectorUsuarios.length; i++) {
    if (vectorUsuarios[i].nombre == nombre
      && vectorUsuarios[i].apellido == apellido) {
      var usuarioObtenido = {
        nombre,
        apellido
      }

      res.render('vistas/vistaUsuario', {
        usuario: usuarioObtenido
      })
    }
  }
  res.render('vistas/vistaerrorlogueo', {

  })

}



module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
