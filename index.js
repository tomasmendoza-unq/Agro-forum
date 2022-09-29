//inicializadores
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const port = 8000
const { Model, DataTypes} = require('sequelize');
const sequelize = require('./db/Connection.js');

const {usuarios} = require('./models/Usuario')

const homeController = require('./controller/homeController')

const loginController = require('./controller/LoginController')
const registerController = require('./controller/RegisterController')
const LogoutController = require('./controller/LogoutController')

const PerfilController = require('./controller/PerfilController')
const PlantasController = require('./controller/PlantaController')
const PosteosController = require('./controller/PosteoController')
const ComentariosController = require('./controller/ComentarioController')


//configuracion
// app.use((req, res, next) => {
//   if (!req.session.user) {
//       res.clearSession()     
//   }
//   next();
// });

// var hbsContent = {userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World"}; 

// middleware function to check for logged-in users
// var sessionChecker = (req, res, next) => {
//   if (req.session.user) {
  
//       res.redirect('/');
//   } else {
//       next();
//   }    
// };

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(session({
  secret: 'botanicos',
  resave: false,
  saveUninitialized: true,
}))

//

app.use(express.urlencoded({extended: false}));



//redirecciones

app.get('/', homeController.home);



// app.get('/login', async (req, res) => {
//   if (req.session.user) {
//   const datos = req.body;
//   let user = await usuarios.findOne({ where: { correo: datos.email} });
//   hbsContent.loggedin = true; 
//   hbsContent.userName = req.session.user; 
//       res.render('/', hbsContent);
//   } else {
//       res.render('login');
//   }
// });

// app.get('/logout', (req, res) => {
//   if (req.session.user) {
//   hbsContent.loggedin = false; 
//   hbsContent.title = "You are logged out!"; 
//       res.clearSession('user_sid'); 
//       res.redirect('/');
//   } else {
//       res.redirect('/login');
//   }
// });

app.get('/login', loginController.login)

app.post('/login', registerController.register);

app.post('/', loginController.logeo);

app.get('/plantas', PlantasController.getAll);

app.get('/perfil', PerfilController.getAll)

app.get('/posteos', PosteosController.getAll);

app.get('/logout', LogoutController.logout);

app.get('*', homeController.notfound)


app.listen(port)
console.log("Esta ejecutando el server: " + "http://localhost:"+port)

