const express = require('express');
const routes = require('./routes/routes.js');

const app = express();
console.log('May Node be with you');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes.routes);

app.listen(3000, function() {
    console.log('listening on 3000');
});