const express = require('express');
const router = express.Router();
const quote = require('../controllers/quote');

router.get('/get-all', quote.getAll);
router.post('/save-new', quote.saveNew);

module.exports = router;