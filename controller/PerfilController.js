const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');
const multer = require('multer')
const path = require('path')

const { usuarios } = require('../models/Usuario.js');



async function getAll(req, res,next) {
    let user = await usuarios.findOne({ where: {id_usuario: req.session.user} });

    res.render('perfil',{ user })
}

var destino = ""

const storage = multer.diskStorage({
    destination : 'public/img/usuarios/',
    filename: (req, file, cb) => {
        destino = 'img/usuarios/'+file.originalname
        console.log(file)
        cb("",file.originalname);
    },
});

var upload = multer({storage: storage, 
    fileFilter : (req, file, cb) => {    
        const filetypes = /jpeg|jpg|png|gif/
        const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null,true);
        } else {
            cb('Error: Images Only!');
        }
    }}).single("avatar");

async function updat(req, res) {
    const datos = req.body
    let Usuarios = await usuarios.findOne({ where: { id_usuario: req.session.user} });
    if(datos.contrasena !== Usuarios.password){
        let logge= true
        let log= {
                logge,
                Usuarios
            }
          res.render("perfil",log)
    }
    else{
        const use = await Usuarios.update(
            {
                nombre: datos.nombre, 
                apellido: datos.apellido,
                password: datos.contrasena,
                nom_usuario: datos.nom_usuario,
                correo: datos.correo,
                img: destino,
                telefono: datos.num_telefono
            },
            {
              where: {id_usuario: req.session.user},
            }
          );
          let loggedin= true
          let log= {
                  loggedin,
                  Usuarios
              }
        res.render("perfil", log)
    }
}




module.exports = {
    getAll,
    updat,
    upload
};