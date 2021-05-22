const {Quote} = require('../models/Quote.js');

const getAll = async (req, res, next) => {

    // const list = [{
    //     name: "Jean-Paul",
    //     quote: "Sometimes when I close my eyes I can't see",
    //     category: "Serious"
    // }];

    const list = await Quote.find().exec();
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

const updateView = async (req, res, next) => {
    const id = req.params.id;
    let quote = await Quote.findById(id);
    res.render('update', {quote: quote});
}

const updateOne = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    let quote = await Quote.findByIdAndUpdate(id, {
        name: data.name,
        category: data.category,
        quote: data.quote
    });
    res.redirect('/');
}

const deleteOne = async (req, res, next) => {
    const id = req.params.id;
    await Quote.findByIdAndDelete(id);
    res.redirect('/');
}

module.exports = {
    getAll, createOne, updateView, updateOne, deleteOne
}