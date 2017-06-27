const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongooseUrl = "mongodb://admin:admin@ds133991.mlab.com:33991/car_rental_supreme";


//Import model
const Car = require('./models/Car.js');
const Customer = require('./models/Customer.js');

//Import routes
const carRouts = require('./routes/carrouts.js')(Car);
const customerRouts = require('./routes/customerrouts.js')(Customer);

//Create app
const app = express();

//Import config
const config = require('./config/config.js');

//Parsing routes to get req.body
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'pug');
app.use('/public', express.static('public'));


app.use('/', carRouts);
app.use('/', customerRouts);


mongoose.Promise = global.Promise;
mongoose.connect(mongooseUrl);
mongoose.connection.on('error', (error, db) => {
    if(error) console.log(error);
    console.log(db);
});

mongoose.connection.on('connected', () => {
    console.log('Connected!');
});


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/carlist', (req, res) => {
    res.render('carlist');
});



app.get('/admincarlist', (req, res) => {
    res.render('admin');
});

app.get('/adminaddcar', (req, res) => {
    res.render('adminaddcar');
});

app.get('/admineditcar', (req, res) => {
    res.render('admineditcar');
});



app.get('/customerform', (req, res) => {
    res.render('customerform');
});




app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});