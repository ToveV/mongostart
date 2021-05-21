const mongoose = require('mongoose');
const connectionString = "enterYourConnectionStringToMongoDB";

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("MongoDB connected"));

const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 25,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Quote = mongoose.model('quotes', quoteSchema);

module.exports.Quote = Quote;