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


//login

const GetFormularioLogin = (req, res) => {
  res.render('vistas/login')
};

/* const PostFormularioLogin2 = (req,res) => {
  const {email,password} = req.body;
  const usuarioEnviado={
    email,password
  }

  res.render('vistas/mensajeError', {
    usuario: usuarioEnviado
  });
}; */


/* respuesta a validaciones */
const PostFormularioLogin = (req,res,errors)=>{
  if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });

      /* const {email,password} = req.body;
      const usuarioEnviado={email,password} */
      let validaciones = errors.array()
      res.render('vistas/mensajeError',{validaciones:validaciones})
  }
}




//formulario antiguo
const GetFormulario = (req, res) => {
  res.render('vistas/formulario')
};

const ProcesarFormulario = (req,res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const usuarioEnviado={
    nombre,apellido
  }
  res.render('vistas/vistaUsuario', {
    usuario: usuarioEnviado
  });
};



module.exports = {
  GetAllUsers,
  GetUsuario,
  GetFormulario,
  ProcesarFormulario,
  GetFormularioLogin,
  PostFormularioLogin
};





