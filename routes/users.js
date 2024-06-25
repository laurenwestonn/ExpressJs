const express = require('express');
const router = express.Router();

const users = [ { name: 'Taylor Swift' }, { name: 'Hayley Williams'} ];

router.get('/', (req, res) => {
	res.send('User List');
});

router.get('/new', (req, res) => {
	res.send('New user form');
});

// put dynamic ones last, otherwise never reach specific ones
router.route('/:id')
.get((req, res) => {
	console.log(req.user.name); // this was set in the params middleware
	res.send(`Get the User with ID ${req.params.id}`)
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

module.exports = router;