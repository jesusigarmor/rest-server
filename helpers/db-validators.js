const Role = require('../models/role');
const User = require('../models/user');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`EL rol: ${rol} no está registrado en la base de datos`); // la funcion custom de express validator agrupa los errores
    };
};

const emailExiste = async (correo = '') => {
    // Verificar que el correo existe
    const existeEmail = await User.findOne({
        correo
    });
    if (existeEmail) {
        throw new Error(`El usuario con el correo ${correo} ya existe`);
    };
};


const existeUsuarioPorId = async (id) => {
    // Verificar que el usuario existe
    const existeUsuario = await User.findOne({
        id
    });
    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe`);
    };
};

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
};