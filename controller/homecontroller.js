
function Home(req, res) {
    res.render('index')
}

function notfound(req, res) {
    res.render('not-found-page')
}

module.exports = {
    home : Home,
    notfound
}