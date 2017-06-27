const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to db before tests run
before(function(done){
  //Connect to mongodb
  mongoose.connect('mongodb://admin:admin@ds133991.mlab.com:33991/car_rental_supreme');
  mongoose.connection.once('open', function(){
    console.log('------> Connection successful\n');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error);
  });
});
