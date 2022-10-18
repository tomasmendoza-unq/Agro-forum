const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');
const multer = require('multer')
const path = require('path')

const { usuarios } = require('../models/Usuario.js');

var destino = ""

async function getAll(req, res,next) {
    if(req.session.user){
        console.log("Pidiendo los datos del usuario");
        
        let Usuarios = await usuarios.findOne({ where: {id_usuario: req.session.user} });
    
        let data = {
            Usuarios
        }
        res.render('perfil',data)
    }else{
        next()
    }
}
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
    let user = await usuarios.findOne({ where: { id_usuario: req.session.user} });
        const use = await user.update(
            {
                nombre: datos.nombre, 
                apellido: datos.apellido,
                password: datos.contraseña,
                nom_usuario: datos.nom_usuario,
                correo: datos.correo,
                img: destino,
                telefono: datos.num_telefono
            },
            {
              where: {id_usuario: req.session.user},
            }
          );
          console.log(use)
        res.send("registrado")
}




module.exports = {
    getAll,
    updat,
    upload
};