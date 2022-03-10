const {INFORMACION_USUARIO} = require("../models/DatosDeUsuario");

//Responde usuario por ID
const QueryUserById=(id)=>{
    let user;
    INFORMACION_USUARIO.forEach((usuario) => {
        if(usuario.id===Number(id)){
            user = usuario;
        }
    });
    return user;
}


module.exports= QueryUserById;