
function Home(req, res) {
    let data = 
    {
        planta : "girasol",
        años : "10"

    }
    res.render('index', data)
}

function notfound(req, res) {
    res.render('not-found-page')
}
module.exports = {
    home : Home,
    notfound
}