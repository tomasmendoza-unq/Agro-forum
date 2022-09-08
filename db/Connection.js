const { Sequelize } = require('sequelize');


const db = new Sequelize('agro-forum', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  loggin: true
});

module.exports= db;