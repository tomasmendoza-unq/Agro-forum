
function Home(req, res) {
    res.render('index')
}

function yqs (req, res) {
    if (req.session.user) {
		hbsContent.loggedin = true; 
		hbsContent.userName = req.session.user.user; 
		//console.log(JSON.stringify(req.session.user)); 
		console.log(req.session.user.username); 
		hbsContent.title = "You are logged in"; 
        //res.sendFile(__dirname + '/public/dashboard.html');
        res.render('index', hbsContent);
    } else {
        res.redirect('/login');
    }
}


function notfound(req, res) {
    res.render('not-found-page')
}

module.exports = {
    home : Home,
    notfound
}