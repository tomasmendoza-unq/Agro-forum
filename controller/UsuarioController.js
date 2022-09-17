const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')

async function getAll(req, res) {
    console.log("Pidiendo los datos de usuario");

    let users = await usuarios.findAll();


    let data = {
        Usuarios : users
    }
    res.render('usuario',data)
}

module.exports = {
    getAll
  };