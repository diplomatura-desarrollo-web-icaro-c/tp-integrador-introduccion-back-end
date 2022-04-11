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

//asi quedo ultima clase pero con forEach, y error de header.

/* const ProcesarFormulario = (req, res) => {
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

} */


// Arreglado problema de header

const ProcesarFormulario = (req, res) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  let userFound=false
  const userList = QueryListOfUsers();

  userList.forEach(usuario => {
    if(usuario.nombre == nombre && usuario.apellido == apellido){
      userFound=true;
    }
  });

  if(userFound==true){
    var usuarioObtenido = {
        nombre,
        apellido
      }
    
      res.render('vistas/vistaUsuario', {
        usuario: usuarioObtenido
      })
      

  } else{ 
    res.send("<h1> Usuario incorrecto volver al <a href='/usuarios'> formulario</a> </h1>")
    
  }
}

// con for pero con error de header
/* const ProcesarFormulario = (req, res) => {
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
  console.log('esto sigue por aqui')
  res.send("<h1> Usuario incorrecto volver al <a href='/usuarios'> formulario</a> </h1>")

} */

module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario
};
