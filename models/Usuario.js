const {Model, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('../db/connection.js');
const  tipo= require ("../models/Tipo")

class Usuario extends Model {}

User.init({
    idusuario:{
        type:DataTypes.INTEGER,
        primaryKey: true,

    },
    nombre: DataTypes.STRING,
    idTipo: DataTypes.INTEGER
},{
  // Other model options go here
  conexion, // We need to pass the connection instance
  modelName: 'tipo' // We need to choose the model name
});

Animal.tipo= Animal.belongsTo(Tipo, {as: 'Tipo', forengkey:'idtipo'})
modules.exports = tipoo;