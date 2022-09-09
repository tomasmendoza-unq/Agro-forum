const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const Plantas = require('../models/Plantas.js')

async function getAll(req, res) {
    console.log("Pidiendo los datos de las plantas");

    let plantas = await Plantas.findAll();
    let data = {
        Plantas
}
    res.render('plantas',data)
}

module.exports = {
    getAll
};