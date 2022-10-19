const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');

const { usuarios } = require('../models/Usuario.js');

async function Home(req, res) {
    res.render('index')
}


function notfound(req, res) {
    res.render('not-found-page')
}

module.exports = {
    home : Home,
    notfound
}