const express = require("express");
const router = express.Router();
//express validator
const { body, validationResult } = require('express-validator');

//BODY-PARSER
const bodyParser = require('body-parser');

const { GetAllUsers, GetUser, GetUsuario,GetFormulario,ProcesarFormulario,GetFormularioLogin,PostFormularioLogin } = require("../controladores/Usuarios");

router.get("/all", GetAllUsers);

//login
router.get("/login",GetFormularioLogin);
/* router.post("/",PostFormularioLogin); */


//seteo respuesta a post login en home
router.post('/login',
body('email','ingrese un email valido').isEmail(),
body('password','ingrese un password valido').isStrongPassword()/* .isLength({ min: 5 }) */,

(req, res) => {
    const errors = validationResult(req);
    PostFormularioLogin(req,res,errors) 
})


//router.get("/:id", GetUser);
router.get("/:id", GetUsuario);


/* router.get('/',GetFormulario);
router.post('/',ProcesarFormulario); */


module.exports = router;
