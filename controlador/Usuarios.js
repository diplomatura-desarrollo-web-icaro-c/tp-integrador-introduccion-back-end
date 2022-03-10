const {
  QueryListOfUsers,
  QueryUserById,
} = require("../servicios/usersDatabase");

/* usamos las funciones que importamos y hacemos otras que se van a encargar de enviar la respuesta correspondiente ------*/

/* esta funcion obtiene todos los usuarios y los envia transformandolos en formato json------------ */
const GetAllUsers = (req, res) => {
  const usersList = QueryListOfUsers();
  return res.json(usersList);
};
/* --------------------------------------------------------------------------------------------- */

/* esta funcion obtiene un usuario por su id y lo renderiza con render disponibilizandolo en un ubjeto user */
const GetUserById = (req, res) => {
  const userId = req.params.id;
  const userObtained = QueryUserById(userId);

  res.render("vistas/vistaUsuario", { user: userObtained });
};
/* ----------------------------------------------------------------------------------------------------- */
module.exports = { GetAllUsers, GetUserById };
