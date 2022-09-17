const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {comentarios} = require('../models/Comentario')

async function getAll(req, res) {
    console.log("Pidiendo los datos de los comentarios");

    let Comentarios = await comentarios.findAll();
    let data = {
        Comentarios
}
    res.render('comentarios',data)
}

module.exports = {
    getAll
};