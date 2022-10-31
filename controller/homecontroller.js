const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')


async function Home(req, res) {
    if(res.locals.userAdmin){
        let user = await usuarios.findOne({ where: {id_usuario: res.locals.userLogged} });

        console.log(req.session.user)

        res.render('index', { res , user})
    } else if (req.session.user) {
        
        let user = await usuarios.findOne({ where: {id_usuario: res.locals.userLogged} });

        console.log(req.session.user)
        
        res.render('index', { res , user})
    } else {
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