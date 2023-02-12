const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const User = require('../models/user');


const usuariosGet = (req = request, res = response) => {

    const {
        q,
        nombre = 'No name', // Dar un valor default por si no viene la variable en el query
        apikey
    } = req.query;

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey
    });
};

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    const { contrasena, google, correo, __id, ...resto } = req.body;

    // Validar usuario contra BD
    if (contrasena) {
        // Encripar contraseña
        const salt = bcryptjs.genSaltSync();
        resto.contrasena = bcryptjs.hashSync(contrasena, salt);
    };

    const usuario = await User.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API',
        usuario
    });
};

const usuariosPost = async (req, res = response) => {


    const {
        nombre,
        correo,
        contrasena,
        rol
    } = req.body;

    const user = new User({
        nombre,
        correo,
        contrasena,
        rol
    });

    // Encripar contraseña
    const salt = bcryptjs.genSaltSync();
    user.contrasena = bcryptjs.hashSync(contrasena, salt);

    // Guardar en db
    await user.save();

    res.json({
        msg: 'post API',
        user
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
};

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
};