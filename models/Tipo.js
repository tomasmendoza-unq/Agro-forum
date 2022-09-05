const {Model, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('../db/connection.js');

class Tipo extends Model {}

User.init({
    idtipo:{
        type:DataTypes.INTEGER,
        primaryKey: true,

    },
    nombre: DataTypes.STRING
},{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tipo' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

modules.exports = Tipo;