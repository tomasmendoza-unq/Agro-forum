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
    password: DataTypes.STRING,
    nom_usuario: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    
},{
  sequelize, 
  modelName: 'Usuario' 
});


module.exports = {
  usuarios
};