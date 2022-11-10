const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../db/Connection.js');

const { plantas } = require('../models/Planta.js')
/*
- Creacion de plantas
- Edicion de plantas
- Visualizacion de todas las plantas
- Eliminacion de plantas
- Ver una planta
*/
async function create(req, res) {
    let data = req.body

    const posteoPlanta = await posteos.create(
        {
            nombre_planta: data.nombre_planta,
            tipo_planta: data.tipo_planta,
            foto_planta: data.foto_planta
        });

    res.render('posteoPlanta', { posteoPlanta })
}

async function edit(req, res) {
    let data = req.body

    let editPlanta = await edits.findByPk(data.id);

    if (editPlanta) {
        let edit = await editPlanta.update(
            {
                nombre_planta: data.nombre_planta,
                tipo_planta: data.tipo_planta,
                foto_planta: data.foto_planta
            },
            {
                where: { id_post: data.id },
            }
        )

        let editPlants = await edits.findAll()

        res.render(`editar`, { editPlants })
    } else {
        res.send('error')
    }
}

module.exports = {
    create,
    edit,
};