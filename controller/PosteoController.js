const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../db/Connection.js');

const multer = require('multer')
const path = require('path')

const { posteos } = require('../models/Posteo.js')
const { comentarios } = require ('../models/Comentario.js');
const { usuarios } = require ('../models/Usuario')

var destino = ""

//esto es para almacenar imagenes
const storage = multer.diskStorage({
    destination : 'public/img/posteos/',
    filename: (req, file, cb) => {
        destino = 'img/posteos/'+file.originalname
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
    }}).single("imagen");



async function getAll(req, res) {

    let Posteos = await posteos.findAll() 



    res.render('posteos', { Posteos})
}

// Obtener uno

async function getbyId(req, res) {
    let posteo = await posteos.findByPk(req.params.id);
    let user 
    
        let visitas = posteo.visitas + 1 
        let post = await posteo.update(
            {
                visitas: visitas
            },
            {
                where: {id_post: req.params.id},
            }
        )

    let comentario = await comentarios.findAll({
        where: {
            id_post: req.params.id
        }
    }) 
    for (let index = 0; index < comentario.length; index++) {
        const element = comentario[index].dataValues.id_usuario;
        user = await usuarios.findAll({
            where: {
                id_usuario: element
            }
        })
    }

    let t = false
    if (req.session.user === posteo.id_usuario ){
        t = true
    }

    // console.log(posteo.id_usuario)
    
    res.render('posteo', { t, posteo, res, comentario, user}) 
}

//render crear
function crear (req,res){
    res.render("crear")
}

// Editar uno 
async function editar(req, res) {

    let data = req.body

    //para poder editar un post, busca la sesion del usuario (id)
    let posteo = await posteos.findByPk(data.id);


    //este if es para comprobar si posteo tiene algo o esta, sino inicio sesion, le manda un error pero si inicio sesion puede editar
    if(posteo){
        let post = await posteo.update(
            {
                contenido_planta: data.descripcion,
                titulo: data.titulo,
                categoria: data.categoria,
                imagen: destino,
            },
            {
                where: {id_post: data.id},
            }
        )

        let Posteos = await posteos.findAll() 

        res.render(`posteos`, {Posteos})
    } else {
        res.send('error')
    }

}


//crear post
async function crearPost(req, res) {
    // Obtiene los datos del body 
    let data = req.body

    //y crea el post con los datos que obtuvo del req.body
    const posteo = await posteos.create(
        { 
            contenido_planta: data.descripcion,
            titulo: data.titulo,
            categoria: data.categoria,
            imagen: destino,
            id_usuario: req.session.user
        });

    res.render('posteo', {posteo})
}

async function comentar (req,res,next) {
    let data = req.body
    const Comentarios = await comentarios.create ({
        comentario_usuario: data.comentario,
        id_usuario: req.session.user,
        id_post: data.id
    });
    res.redirect('posteos')
}


module.exports = {
    getAll,
    getbyId,
    editar,
    upload,
    crearPost,
    crear,
    comentar
};