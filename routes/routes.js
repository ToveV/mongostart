const express = require('express');
const {getAll, createOne, updateView, updateOne, deleteOne} = require('../controllers/Quote.js');


const router = express.Router();

router.get('/', getAll);
router.get('/createone', createOne);
router.get('/update/:id', updateView);
router.post('/updatesave/:id', updateOne);
router.get('/delete/:id', deleteOne);

module.exports = {
    routes: router
}