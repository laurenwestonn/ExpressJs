const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('User List');
})

router.post('/', (req, res) => {
	res.send('Create user');
})

router.put('/', (req, res) => {
	res.send('Create user');
})

router.delete('/', (req, res) => {
	res.send('Create user');
})

router.get('/new', (req, res) => {
	res.send('New user form');
})

// put dynamic ones last, otherwise never reach specific ones
router.get('/:id', (req, res) => {
	res.send(`Get the User with ID ${req.params.id}`)
})

module.exports = router;