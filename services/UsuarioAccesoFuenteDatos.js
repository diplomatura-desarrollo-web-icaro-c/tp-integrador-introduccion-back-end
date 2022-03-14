const { INFORMACION_USUARIO } = require("../model/DatosDeUsuario");

//Responde usuario por id
const QueryUserById = (id) => {
    let user;
    INFORMACION_USUARIO.forEach(userData => {
        if (userData.id === Number(id)) {
            user = userData;
        }
    });
    return user;

}

module.exports = { QueryUserById };
