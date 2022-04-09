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

const GetFormulario = (req, res) => {
  res.render('vistas/formulario');
};

const ProcesarFormulario = (req, res) => {
  var vectorUsuarios = QueryListOfUsers();
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;

  for (let i = 0; i < vectorUsuarios.length; i++) {
    if (vectorUsuarios[i].nombre.toLowerCase() == nombre.toLowerCase()
      && vectorUsuarios[i].apellido.toLowerCase()  == apellido.toLowerCase()) {
      var usuarioObtenido = {
        id:vectorUsuarios[i].id,
        nombre:vectorUsuarios[i].nombre,
        apellido:vectorUsuarios[i].apellido,
        email:vectorUsuarios[i].email
      }

      res.render('vistas/vistaUsuario', {
        usuario: usuarioObtenido
      })
    }
  }
  res.render('vistas/vistaerrorlogueo', {

  })

}



module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
