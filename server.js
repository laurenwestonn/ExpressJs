const express = require('express');
const app = express();

// required to render .ejs files from a folder called "views"
app.set('view engine', 'ejs');

// not efficient to create a route for something that doesn't ever change
// serve a static html file in a folder. lets call it public.
app.use(express.static('public'));

// This middleware allows you to access body e.g. req.body. in a route
app.use(express.urlencoded({ extended: true }));

// Same thing as url encoded but lets you parse JSON from the body
app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(1234);






// Exapmles of things you can do:
// app.get('/', (req, res) => {	
	//// Most common use case will be to render a html file or sending json
	
	// render: 
	// only renders stuff inside of "views" folder, so make one!
	// requires a VIEW ENGINE, e.g. ejs, pug
	// res.render('index', { text: 'World' });	// 2nd params allows you to send from server to FE

	//// Other things you can do

	// send: Used mainly for testing 
	// res.send('I got it');
	
	// statusCode: (or status if you want to return a message. Can be text or JSON)
	// res.status(200).json({ message: 'A thing happened' });

	// download: visiting url makes you download whatever you specify
	// res.download('server.js');

// })