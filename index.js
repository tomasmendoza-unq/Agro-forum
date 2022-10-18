//inicializadores
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const port = 8000
const exphbs = require('express-handlebars');

const homeController = require('./controller/homeController')

const loginController = require('./controller/LoginController')
const registerController = require('./controller/RegisterController')
const LogoutController = require('./controller/LogoutController')

const PerfilController = require('./controller/PerfilController')
const PlantasController = require('./controller/PlantaController')
const PosteosController = require('./controller/PosteoController')

// app.engine('handlebars', exphbs.engine({
//   defaultLayout: 'main',
//   layoutsDir: path.join(__dirname, 'views/layouts'),
//   extname: '.hbs'
// }));
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

