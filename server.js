const express = require('express');
const app = express();

// required to render .ejs files from a folder called "views"
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	console.log('here');
	
	// Used mainly for testing 
	// res.send('I got it');
	
	// res.status(200).json({ message: 'A thing happened' });

	// res.download('server.js');

	// Most common use case will be to render a html file or sending json
	
	// Render: 
	// by default all views live under folder Views, so it must be created
	// requires a VIEW ENGINE, e.g. ejs, pug
	res.render('index', { text: 'World' });	// 2nd params allows you to send from server to FE

})

app.get('/users', (req, res) => {
	res.send('User List');
})


app.get('/users/new', (req, res) => {
	res.send('New user form');
})

app.listen(1234);