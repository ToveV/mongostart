const express = require('express');
const {getAll, createOne} = require('../controllers/Quote.js');


const router = express.Router();

router.get('/', getAll);
router.get('/createone', createOne);

module.exports = {
    routes: router
}