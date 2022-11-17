const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../db/Connection.js');

const { plantas } = require('../models/Planta.js');
// Creacion de plantas
async function create(req, res) {
    let data = req.body

    const crearPlanta = await plantas.create({
        nombre_planta: data.nombre_planta,
        tipo_planta: data.tipo_planta,
        foto_planta: data.foto_planta
    });

    res.json(crearPlanta);
}
// Edicion de plantas
async function edit(req, res) {
    let data = req.body

    let editarPlanta = await plantas.update({ 
        nombre_planta: data.nombre_planta,
        tipo_planta: data.tipo_planta,
        foto_planta: data.foto_planta }, {
        where: { 
            id_planta: req.params.id
        }
    }); 
    res.json("Planta actualizada!");
}
// Visualizacion de todas las plantas
async function viewAll(req, res) {
    let Plantas = await plantas.findAll();
    let data = {
        Plantas
    }
    res.json(data);
}
// Eliminacion de plantas
async function deleteOne(req, res) {
    let Plantas = await plantas.destroy({
        where: {
            id_planta: req.params.id
        }
    });
    let data = {
        Plantas
    }
    res.json("Se elimino la planta!");
}
// - Ver una planta
async function viewOne(req, res) {
    let Planta = await plantas.findByPk(req.params.id);
    let data = {
        Planta
    }
    res.json(data);
}

module.exports = {
    create,
    edit,
    viewAll,
    deleteOne,
    viewOne
};