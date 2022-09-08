const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');

class usuarios extends Model {}

usuarios.init({
    id_usuario:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nom_usuario: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    createdAt: {
        type: 'DATE',
    },
    updatedAt: {
      type: 'DATETIME',
    }
},{
  sequelize, 
  modelName: 'Usuario' 
});

async function getAll(req, res) {
  console.log("Pidiendo los datos de usuario");

  let Usuarios = await usuarios.findAll();
  let data = {
    Usuarios
}
  res.render('usuario',data)
}

module.exports = {
  usuarios,
  getAll
};