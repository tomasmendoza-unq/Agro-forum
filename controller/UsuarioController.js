const { Model, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection.js');

const tipo = require('../models/Tipo')
const usuario = require('../models/Usuario')

async function getAll(req, res){
    console.log("pidiendo los tipos ");

    let data ={
        usuario
    }
    let tipos = await usuaario.findAll();
    console.log(tipos);

    res.render('data')
}

module.exports= {
    getAll
}