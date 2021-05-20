import express from 'express';

const app = express();
console.log('May Node be with you');

app.set('view engine', 'ejs');
app.use(express.json());

import routes from './routes/routes.js';
app.use('/', routes);

app.listen(3000, function() {
    console.log('listening on 3000');
});