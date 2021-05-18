//const {Quote} = require('../models/Quote.js');

const getAll = (req, res, next) => {
    const list = [{
        name: "Jean-Paul",
        quote: "Sometimes when I close my eyes I can't see",
        category: "Serious"
    }];
    res.render('index', {
        quotes: list
    });
}

module.exports = {
    getAll
}