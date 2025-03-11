'use strict';

const mongoose = require('mongoose');

const connectString = 'mongodb://localhost:27017/ShopDev';
mongoose
    .connect(connectString)
    .then(() => console.log(`Connected Mongodb Success`))
    .catch((err) => `Error Connect!`);

if (1 === 1) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
}

module.exports = mongoose;
