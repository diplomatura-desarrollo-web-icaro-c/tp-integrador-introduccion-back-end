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
  res.render('vistas/formulario')
};

const ProcesarFormulario = (req,res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const usuarioEnviado={
    nombre,apellido
  }
  res.render('vistas/vistaUsuario', {
    usuario: usuarioEnviado
  });
};

module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
