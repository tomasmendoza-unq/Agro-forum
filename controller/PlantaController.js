const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {plantas} = require('../models/Planta.js')

async function getAll(req, res) {
    console.log("Pidiendo los datos de las plantas");

    let Plantas = await plantas.findAll();
    let data = {
        Plantas
}
    res.render('plantas',data)
}

module.exports = {
    getAll
};