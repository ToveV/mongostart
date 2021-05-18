const express = require('express');
const {getAll} = require('../controllers/Quote.js');


const router = express.Router();

router.get('/', getAll);

module.exports = {
    routes: router
}