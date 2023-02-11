const { response, request } = require('express');


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

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
};

const usuariosPost = (req, res = response) => {

    const {
        nombre,
        edad
    } = req.body;


    res.json({
        msg: 'post API',
        nombre,
        edad
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