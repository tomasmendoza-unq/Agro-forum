const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {posteos} = require('../models/Posteo.js')

async function getAll(req, res) {
    console.log("Pidiendo los datos de los posteos");

    let Posteos = await posteos.findAll();
    let data = {
        Posteos
}
    res.render('posteos',data)
}

module.exports = {
    getAll
};