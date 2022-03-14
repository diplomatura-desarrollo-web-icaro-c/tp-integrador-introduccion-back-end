const QueryUserById = require ('../services/UsuarioAccesoFuenteDatos');

const GetUser = (req, res) => {
    const userId = req.params.id;
    const user = QueryUserById(userId);

    return res.JSON (user)
}

res.render ('vista/vistaUsuario', {
    usuario: user;
})