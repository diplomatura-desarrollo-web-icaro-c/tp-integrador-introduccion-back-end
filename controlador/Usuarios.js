const {
  QueryListOfUsers,
  QueryUserById,
} = require("../servicios/UsuariosAccesoDatos");

const GetAllUsers = (req, res) => {
  const usersList = QueryListOfUsers();
};

const GetUser = (req, res) => {
  const userId = req.params.id;
  const usuarioObtenido = QueryUserById(userId);
  return res.json(usuarioObtenido);
};

res.render("vistas/vistaUsuario", {
  usuario: usuarioObtenido,
});

module.exports = {
  GetUser,
};
