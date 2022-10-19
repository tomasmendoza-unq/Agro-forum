const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')


function login(req, res) {
    res.render('login')
}

async function logeo(req, res){
    const datos = req.body;
    let user = await usuarios.findOne({ where: { correo: datos.email} });

    if (!user) {
        let loggedin= true
        let log= {
            loggedin
        }
        res.render("login", log)
    }else if (datos.contrasena !== user.password){
        let loggedin= true
        let log= {
            loggedin
        }
        res.render("login",log)
    }else{
        req.session.user= user.id_usuario;
        let loggedin= true
        let log= {
            loggedin,
            user
        }
        console.log(req.session.user);
        res.render("index", log)
    }
}


module.exports = {
    login : login,
    logeo : logeo

}