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

        res.render("login", { loggedin })
    }else if (datos.contrasena !== user.password){
        let loggedin= true

        res.render("login", { loggedin })
    }else{
        req.session.user= user.id_usuario;

        res.render("perfil", {user})
    }
}


module.exports = {
    login : login,
    logeo : logeo

}