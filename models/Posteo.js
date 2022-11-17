const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');


const usuario = require('./Usuario')
const planta = require('./Planta')

class posteos extends Model {}

posteos.init({
    id_post:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido_planta: DataTypes.STRING,
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    visitas: DataTypes.INTEGER, 
    id_planta: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
},{
    sequelize, 
    modelName: 'posteos' 
});

posteos.usuario = posteos.belongsTo(posteos, {as: 'usarios', foreignKey: 'id_usuario'});

posteos.plata = posteos.belongsTo(posteos, {as: 'plantas', foreignKey: 'id_planta'});

module.exports = {
    posteos
};
