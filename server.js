const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/johannes_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log('MongoDB Connected');
});

app.use(express.json({
    extended: false
}));

app.use('/', routes);

app.listen(3000, function () {
    console.log('listening on 3000');
});