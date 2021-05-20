import express from 'express';
const router = express.Router();

import getAll from '../controllers/Quote.js';

router.route('/')
    .get(function(req, res) {
        res.render('index', getAll);
    })

export default router;