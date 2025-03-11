const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());

// init db
require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init routes
app.get('/', (req, res, next) => {
    return res.status(500).json({
        message: 'Welcome Fantipsjs!',
    });
});

// handle errors
module.exports = app;
