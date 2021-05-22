const mongoose = require('mongoose');
const connectionString = "mongodb+srv://mongodbuser:epAZgmhEghtytbH9@cluster0.u8h1n.mongodb.net/database?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    useUnifiedTopology: true
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