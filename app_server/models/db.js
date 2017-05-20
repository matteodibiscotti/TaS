var mongoose = require('mongoose');

var dbURL = 'mongodb://dbadmin:dbpassword@ds141351.mlab.com:41351/trades';
mongoose.connect(dbURL);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to dbURL');
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  })
};

//the schemas that are required will go here
