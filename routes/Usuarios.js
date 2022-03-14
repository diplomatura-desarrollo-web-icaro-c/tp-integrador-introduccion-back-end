const express = require ('express');
const router = express.Router ();
const QueryUserById = require ("../services/UsuarioAccesoFuenteDatos");



const GetUser = (req, res) => {
    const userId = req.params.id;
    const user = QueryUserById(userId);

    return res.JSON(user) 
}

router.get('/:id', GetUser);

module.exports = router;
