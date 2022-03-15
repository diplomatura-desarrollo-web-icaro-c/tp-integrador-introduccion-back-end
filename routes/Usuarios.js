const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, GetUsuario, VistaNuevaSinUsuario } = require("../controladores/Usuarios");

router.get("/all", GetAllUsers);
//router.get("/:id", GetUser);
router.get("/sinUsuario", VistaNuevaSinUsuario);

module.exports = router;
