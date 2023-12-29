const express = require('express');
const router = express.Router();
 
const {
    addStudent,
    assignTask,
} = require('../controllers/admin'); // Fix the casing of the file name

const { 
    isAdmin,
    auth
} = require('../middlewares/auth');

// Add student route
router.post('/addStudent', auth , isAdmin, addStudent);

// Assign task route
router.post('/assignTask',  auth , isAdmin, assignTask);

module.exports = router;
