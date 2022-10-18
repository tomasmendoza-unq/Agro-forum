const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');
const multer = require('multer')
const path = require('path')

const {usuarios} = require('../models/Usuario')

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


async function register(req, res) {
      const datos = req.body
      console.log(datos)
      const user = await usuarios.create(
          { 
              nombre: datos.nombre, 
              apellido: datos.apellido,
              password: datos.contraseña,
              nom_usuario: datos.nom_usuario,
              correo: datos.correo,
              img: destino,
              telefono: datos.num_telefono
          });
      res.send("registrado")
  }


module.exports = {
    register: register,
    upload
}
