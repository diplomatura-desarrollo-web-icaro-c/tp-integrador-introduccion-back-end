const QueryUserById = require('../service/UserAccessSourceData');

const GetUsuario = (req, res) => {
    const userId = req.params.id;
    const usuarioObtenido = QueryUserById(userId);
    res.render('vistas/vistaUsuario.ejs', { usuario: usuarioObtenido })
}


module.exports = GetUsuario;