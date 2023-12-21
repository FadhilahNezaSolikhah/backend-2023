// import studentController
const studentController = require('../controllers/StudentController');

// import express
const express = require('express');

// membuat object router dari express
const router = express.Router();

// membuat route
router.get('/students', studentController.index);
router.post('/students', studentController.store);
router.put('/students/:id', studentController.update);
router.delete('/students/:id', studentController.destroy);

module.exports = router;