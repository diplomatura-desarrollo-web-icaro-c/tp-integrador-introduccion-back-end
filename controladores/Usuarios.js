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

const VistaNuevaSinUsuario = (req, res) => {
    res.render('vistas/vistaEjemplo');
};

module.exports = {
  GetAllUsers,
  GetUsuario,
  VistaNuevaSinUsuario
};
