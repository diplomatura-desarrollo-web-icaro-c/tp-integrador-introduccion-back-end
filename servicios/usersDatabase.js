/* en este archivo vamos a acceder a los datos provenientes de modelo el cual los obtuvo a partir de la base de datos */

const { USERS_INFORMATION } = require("../modelo/DatosDeUsuarios");

/* obtenemos la lista de todos los usuarios----------------------- */

const QueryListOfUsers = () => {
  return USERS_INFORMATION;
};
/* -------------------------------------------------------------- */

/* obtenemos un usuario dado un id ------------------------------*/
const QueryUserById = (id) => {
  let user;

  USERS_INFORMATION.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};
/* ------------------------------------------------------------ */
module.exports = { QueryListOfUsers, QueryUserById };
