const { informacion_usuario } = require("../modelo/DatosDeUsuarios");

//return list of users

const QueryListOfUsers = () => {
  return informacion_usuario;
};

//returns user by id

const QueryUserById = (id) => {
  let user;
  informacion_usuario.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

module.exports = {
  QueryListOfUsers,
  QueryUserById,
};
