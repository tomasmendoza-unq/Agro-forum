const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')

async function register(req, res) {
    const datos = req.body
    console.log(datos)
    const user = await usuarios.create(
        { 
            nombre: datos.nombre, 
            apellido: datos.apellido,
            password: datos.contraseña,
            nom_usuario: datos.nom_usuario,
            correo: datos.correo,
            telefono: datos.num_telefono
        });
    res.send("registrado")
}

// const {usuarios} = require('../models/Usuario')

// post(function(req, res, next){
//     nombre= req.body.nombre;
//     contraseña= req.body.contraseña;
//     var mensaje='';
//     if (nombre !== '' && contraseña !== ''){
//         usuarios.create({
//             nombre : nombre,
//             contraseña : contraseña
//         })
//         mensaje="usuario creado" + '' + nombre;
//     }else{
//         mensaje = "no pueden estar vacios los campos"
//     }
//     res.render('login',{mensaje: mensaje})
// })

module.exports = {
    register: register
}
