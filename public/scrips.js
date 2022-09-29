const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../db/Connection.js');

const { usuarios } = require('../models/Usuario.js');

const perfil = document.querySelector("#perfil")
let elemento = document.createElement("div")
function perfi (req, res){
  if(req.session.user){
    elemento.innerHTML = `              
`
    perfil.appendChild(elemento)
  }else{
    elemento.innerHTML = `              
`
    perfil.appendChild(elemento)
  }
}

perfi()