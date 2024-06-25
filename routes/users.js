const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('User List');
});

router.get('/new', (req, res) => {
	res.send('New user form');
});

// put dynamic ones last, otherwise never reach specific ones
router.route('/:id')
.get((req, res) => {
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

module.exports = router;