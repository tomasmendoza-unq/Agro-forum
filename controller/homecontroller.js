const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')

async function Home(req, res) {
    if(req.session.user){
            
        let user = await usuarios.findOne({ where: {id_usuario: req.session.user} });

        console.log(req.session.user)
        let loggedin= true
        let log= {
            loggedin,
            user
        }
        res.render('index',log)
    }else{
        console.log(req.session.user)
        res.render('index')
    }
}



function notfound(req, res) {
    res.render('not-found-page')
}

module.exports = {
    home : Home,
    notfound
}