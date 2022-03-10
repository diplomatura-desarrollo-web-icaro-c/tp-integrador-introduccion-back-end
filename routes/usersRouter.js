const express = require('express');
const router = express.Router();
const GetUsuario = require('../controllers/userController')

router.get('/:id',GetUsuario);


module.exports=router;