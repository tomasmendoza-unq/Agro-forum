const { Sequelize } = require('sequelize');


const db = new Sequelize('agro-forum', 'root', '', {
  host: 'localhost',
  dialect: 'mysl',
  
});

module.exports= db;