require ('dotenv').config();
const express = require('express');
const app = express();

const db = require('./models');

const errorController = require('./controllers/error');
const planRoutes = require('./routes/plan');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(planRoutes);
app.use(errorController.get404);

app.listen(5000);
