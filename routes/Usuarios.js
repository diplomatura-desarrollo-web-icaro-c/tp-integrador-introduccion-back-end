const { Router } = require("express");
const express = require("express");

const router = express.Router();
const GetUser = require("../controlador/Usuarios");

router.get("/:id", GetUser);

module.exports = router;
