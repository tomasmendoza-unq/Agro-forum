const express = require('express')
const homeController = require('./controller/homeController')
const app = express()
const port = 8000



app.use( express.static('public'))
app.set('view engine', 'hbs');


//redirecciones
app.get('/', homeController.home )


app.get('*', homeController.notfound)


app.listen(port)
console.log("Esta ejecutando el server " + port)

