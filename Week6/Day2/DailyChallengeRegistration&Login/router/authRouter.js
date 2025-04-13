const {createUser, loginUser} = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
module.exports = router;