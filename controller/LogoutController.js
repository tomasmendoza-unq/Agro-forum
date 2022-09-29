function logout (req,res){
    req.session.destroy()
    let loggedin= false
    let log= {
        loggedin
    }
    res.render("index", log)
}

module.exports = {
    logout
}