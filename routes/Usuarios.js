const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, GetUsuario,GetFormulario,ProcesarFormulario } = require("../controladores/Usuarios");

router.get("/all", GetAllUsers);
//router.get("/:id", GetUser);
router.get("/:id", GetUsuario);

router.get('/',GetFormulario);
router.post('/',ProcesarFormulario);

module.exports = router;
