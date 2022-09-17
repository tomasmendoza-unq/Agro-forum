const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');


const {usuarios} = require('./Usuario')
const {posteos} = require('./Posteo')

class comentarios extends Model {}

comentarios.init({
    id_comentarios:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comentario_usuario: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    id_respuesta: DataTypes.INTEGER,
    id_post: DataTypes.INTEGER
},{
    sequelize, 
    modelName: 'comentarios' 
});

comentarios.usuarios = comentarios.belongsTo(comentarios, {as: 'usuarios', foreignKey: 'id_usuario'});

comentarios.posteos = comentarios.belongsTo(comentarios, {as: 'posteos', foreignKey: 'id_post'});

module.exports = {
    comentarios
};