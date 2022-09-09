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
    fecha_publicacion: DataTypes.DATE,
    createdAt: {
        type: 'DATE',
    },
    updatedAt: {
        type: 'DATETIME',
    },
    id_planta: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
},{
    sequelize, 
    modelName: 'posteos' 
});


async function getAll(req, res) {
    console.log("Pidiendo los datos de los posteos");

    let Posteos = await posteos.findAll();
    let data = {
        Posteos
}
    res.render('posteos',data)
}

posteos.usuario = posteos.belongsTo(posteos, {as: 'usarios', foreignKey: 'createdAt', foreignKey: 'updatedAt', foreignKey: 'id_usuario'});

posteos.plata = posteos.belongsTo(posteos, {as: 'plantas', foreignKey: 'id_planta'});

module.exports = {
    posteos,
    getAll
};