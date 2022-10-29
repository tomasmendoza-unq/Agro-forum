const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');

const { usuarios } = require('../models/Usuario.js');

module.exports = {
    authMiddleware : (req,res,next)=>{
        if(!req.session.user){
            return res.render("login");
        } else {
            next()
        }
    },
    sessionMiddleware: async (req,res,next) => {
        res.locals.userFound = false;
        let user;
        if (req.session && req.session.user) {
        res.locals.userFound = true;
        res.locals.userLogged = req.session.user;
            if (req.session.user === 1) {
                res.locals.userAdmin = true;
            }
        } else {
            if (req.session.user) {
                user = await usuarios.findOne({
                where: { id_usuario: req.session.user },
                });
            }

            if (user) {
                res.locals.userFound = true;
                res.locals.userLogged = user;
            }
        }
    
        next();
    }
}

            
