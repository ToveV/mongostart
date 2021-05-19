const Quote = require('../models/quote');

function getAll(req, res) {
    Quote.find({}, (err, quotes) => {
        if (err) {
            return res.json({
                err
            });
        }

        return res.json(quotes);
    });
}

function saveNew(req, res) {
    console.log(req.body);
    new Quote(req.body)
        .save(err => {
            if (err) {
                return res.json({
                    err
                });
            }

            return res.json({
                message: 'saved'
            });
        });
}

module.exports = {
    getAll,
    saveNew
};