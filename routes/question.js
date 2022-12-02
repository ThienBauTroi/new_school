const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionController');


router.get('/', questionController.question);


module.exports = router;