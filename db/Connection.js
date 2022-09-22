const { Sequelize } = require('sequelize');


const db = new Sequelize('agro-forum', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  loggin: false
});

/* esto es para comprobar si la conexion con la base de datos es exitosa
db.authenticate()
  .then(()=>{
    console.log("conexion exitosa")
  })
  .catch(error=>{
    console.log("error"+error)
  })
*/

module.exports= db;