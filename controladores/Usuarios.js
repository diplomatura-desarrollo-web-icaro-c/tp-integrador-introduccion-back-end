const {
  QueryListOfUsers,
  QueryUserById,
} = require("../service/UsuarioAccesoFuenteDatos");

const GetAllUsers = (req, res) => {
  const userList = QueryListOfUsers();
  return res.json(userList);
};


const GetUsuario = (req, res) => {
  const userId = req.params.id;
  const usuarioObtenido = QueryUserById(userId);

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
};

const GetFormulario = (req, res) => {
  res.render('vistas/formulario');
};

const ProcesarFormulario = (req, res) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var usuarioObtenido = {
    nombre,
    apellido
  }

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
}



module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
