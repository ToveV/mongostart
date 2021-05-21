const {Quote} = require('../models/Quote.js');

const getAll = async (req, res, next) => {

    // const list = [{
    //     name: "Jean-Paul",
    //     quote: "Sometimes when I close my eyes I can't see",
    //     category: "Serious"
    // }];

    const list = await Quote.find({category: "Serious"}).exec();
    res.render('index', {
        quotes: list
    });
}

const createOne = (req, res, next) => {
    let quote = new Quote({
        name: "Douglas Adams",
        quote: "Don't panic!",
        category: "Fun"
    });
    quote = quote.save();
}

module.exports = {
    getAll, createOne
}