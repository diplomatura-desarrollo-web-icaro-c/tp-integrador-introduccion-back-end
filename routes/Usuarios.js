const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUserById } = require("../controlador/Usuarios");
/* en este caso si la direccion ingresada lleva /all se llamara a GetAllUsers------ */
router.get("/all", GetAllUsers);
/* -------------------------------------------------------------------------------- */

/* aqui si la direccion ingresada lleva un numero como id se llamara a GetUserById la cual renderiza el usuario buscado */
router.get("/:id", GetUserById);
/* -------------------------------------------------------------------------------------------------------------------- */
module.exports = router;
