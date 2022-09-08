const { Model, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection.js');

const tipo = require('../models/Tipo')

async function getAll(req, res){
    console.log("pidiendo los tipos ");

    let data ={
        tipos
    }
    let tipos = await tipo.findAll();
    console.log(tipos);

    res.render('tipo',data)
}

module.exports= {
    getAll
}