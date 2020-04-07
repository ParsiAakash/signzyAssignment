const express = require('express');
const bodyParser = require('body-parser');
const category = require('./routes/category.route'); // Imports routes for the products
const device = require('./routes/device.route');
const mongoose = require('mongoose');

let mongoUrl = 'mongodb://localhost:27017/signzy';
const mongoDB = process.env.MONGODB_URI || mongoUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app
const app = express();

// let port = 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/category', category);
app.use('/device', device);

exports.app = app;
// app.listen(port, () => {
//     console.log('Server is up and running on port : ' + port);
// });

