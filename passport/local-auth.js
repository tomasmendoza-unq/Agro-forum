const passport = require('passport');
const Localstrategy = require('passport-local').Strategy;

const {usuarios} = require('../models/Usuario')

passport.serializeUser((usuarios,done)=>{
    done(null, usuarios.id)
});

passport.deserializeUser(async (id_usuario,done)=>{
    const usuario= await usuarios.findByPk(id_usuario);
    done(null, usuario)
});


passport.use('local-singup', new Localstrategy({
    usernameField: 'nom_usuario',
    passwordField: 'contraseña',
    passReqToCallback: true
}), async (req, nom_usuario, contraseña, done)=>{
    const usuario = new usuarios ();
    usuario.nom_usuario= nom_usuario;
    usuario.contraseña= contraseña;
    await usuario.save();
    done(null, usuario)
});