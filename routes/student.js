const express = require('express');
const router = express.Router();

const {
    getTasks,
    changeTaskStatus,
} = require('../controllers/student');

const { auth } = require('../middlewares/auth');

// View assigned tasks route
router.get('/tasks', auth, getTasks);

// Change task status route
router.put('/changeTaskStatus/:id', auth, changeTaskStatus);

module.exports = router;
