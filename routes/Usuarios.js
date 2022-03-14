const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, GetUsuario, nadie } = require("../controladores/Usuarios");

router.get("/all", GetAllUsers);
router.get("/nadie", nadie);
//router.get("/:id", GetUser);
router.get("/:id", GetUsuario);

module.exports = router;
