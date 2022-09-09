const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const Usuarios = require('../models/Usuario')

async function getAll(req, res) {
    console.log("Pidiendo los datos de usuario");

    let usuarios = await Usuarios.findAll();

    let data = {
        usuarios
    }
    res.render('usuario',data)
}

module.exports= {
    getAll
}