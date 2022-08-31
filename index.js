const express = require('express')
const homeController = require('./controller/homeController')
const app = express()
const port = 8000



app.use( express.static('public'))
app.set('view engine', 'hbs');

>>>>>>> e3b40b8a1fcaa9c39ab0d36b612e0fac364c6648

app.get('/', homeController.home )


app.get('*', homeController.notfound)


app.listen(port)
console.log("Esta ejecutando el server " + port)

//10:15
