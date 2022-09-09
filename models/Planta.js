const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');


const usuario = require('./Usuario')

class plantas extends Model {}

plantas.init({
    id_planta:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_planta: DataTypes.STRING,
    tipo_planta: DataTypes.INTEGER,
    foto_planta: DataTypes.STRING,
    createdAt: {
        type: 'DATE',
    },
    updatedAt: {
        type: 'DATETIME',
    }
},{
    sequelize, 
    modelName: 'plantas' 
});


async function getAll(req, res) {
    console.log("Pidiendo los datos de las plantas");

    let Plantas = await plantas.findAll();
    let data = {
        Plantas
}
    res.render('plantas',data)
}
plantas.usuario = plantas.belongsTo(plantas, {as: 'usarios', foreignKey: 'createdAt', foreignKey: 'updatedAt'});

module.exports = {
    plantas,
    getAll
};

