const express = require('express');
const webroutes = require('./routes/web')

const app = express();


app.use('/', webroutes)

module.exports = app;
