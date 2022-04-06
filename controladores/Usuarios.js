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
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;

  const userList = QueryListOfUsers();

  userList.forEach(usuario => {
    if(usuario.nombre == nombre && usuario.apellido == apellido){

      var usuarioObtenido = {
        nombre,
        apellido
      }
    
      res.render('vistas/vistaUsuario', {
        usuario: usuarioObtenido
      })
    }

  });

  res.send("<h1> Usuario incorrecto volver al <a href='/usuarios'> formulario</a> </h1>")


}



module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
