const {
  QueryListOfUsers,
  QueryUserById,
} = require("../servicios/UsuariosAccesoDatos");

const GetAllUsers = (req, res) => {
  QueryListOfUsers();
};
