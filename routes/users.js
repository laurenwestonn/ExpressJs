const express = require('express');
const router = express.Router();
router.use(logger); // must be above any routes or wouldnt do anything

const users = [ { name: 'Taylor Swift' }, { name: 'Hayley Williams'} ];

router.route('/')
	.get( (req, res) => {
		res.send(`User List: ${users.map(u => u.name).join()}`);
	})
	.post( (req, res) => {
		if (2 + 2 === 4) {
			users.push({ name: req.body.thisWillGoOnTheBody });
			res.redirect(`/users/${users.length-1}`);
		} else {
			console.log('Error');
			res.render('users/new', { name: req.body.thisWillGoOnTheBody });
		}
	});

router.get('/new', (req, res) => {
	res.render("users/new", { name: 'Lauren' }); // dynamic, so must live in "views" with an .ejs extension
});

// put dynamic ones last, otherwise never reach specific ones
router.route('/:id')
.get((req, res) => {
	console.log(req.user.name); // this was set in the params middleware
	res.send(`Get the User with ID ${req.params.id} and name ${users[req.params.id].name}`)
})
.put((req, res) => {
	res.send(`Update the User with ID ${req.params.id}`)
})
.post((req, res) => {
	res.send(`Create User with ID ${req.params.id}`)
})
.delete((req, res) => {
	res.send(`Delete User ${req.params.id}`)
});

// Middleware. Happens after request, and before response
// To say you're done, you must call the next thing explicitly
// next() will call the res in this case
router.param('id', (req, res, next, id) => {
	req.user = users[id]; // can use this in any id response now! C, R, U and D. Don't have to set it multiple times!
	next();
});

function logger(req, res, next) {
	console.log(req.originalUrl);
	next(); // middleware, so must be called to continue
}

module.exports = router;