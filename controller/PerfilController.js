const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');
const { usuarios } = require('../models/Usuario.js');


async function getAll(req, res,next) {
    if(req.session.user){
        console.log("Pidiendo los datos del usuario");
        
        let Usuarios = await usuarios.findOne({ where: {id_usuario: req.session.user} });
    
        let data = {
            Usuarios
        }
        res.render('perfil',data)
    }else{
        next()
    }
}



module.exports = {
    getAll
};