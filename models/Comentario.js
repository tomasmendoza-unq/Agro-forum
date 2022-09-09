const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');


const usuario = require('./Usuario')
const post = require('./Posteo')

class comentarios extends Model {}

comentarios.init({
    id_comentarios:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comentario_usuario: DataTypes.STRING,
    createdAt: {
        type: 'DATE',
    },
    updatedAt: {
        type: 'DATETIME',
    },
    id_usuario: DataTypes.INTEGER,
    id_respuesta: DataTypes.INTEGER,
    id_post: DataTypes.INTEGER
},{
    sequelize, 
    modelName: 'comentarios' 
});


async function getAll(req, res) {
    console.log("Pidiendo los datos de los comentarios");

    let Comentarios = await comentarios.findAll();
    let data = {
        Comentarios
}
    res.render('comentarios',data)
}

comentarios.usuario = comentarios.belongsTo(comentarios, {as: 'usarios', foreignKey: 'createdAt', foreignKey: 'updatedAt', foreignKey: 'id_usuario'});

comentarios.post = comentarios.belongsTo(comentarios, {as: 'posteos', foreignKey: 'id_post'});

module.exports = {
    comentarios,
    getAll
};