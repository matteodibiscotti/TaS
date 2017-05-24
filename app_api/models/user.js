var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  unitNumber: {type: String},
  streetNumber: {type: String},
  streetName: {type: String, required: true},
  postcode: {type: Number, required: true},
  coords: {type: [Number], index: '2dsphere'}, //longitude, then latitude
  email: {type: String, required: true},
  pwd: {type: String, required: true},
  confpwd: {type: String, required: true}
});
mongoose.model('user', userSchema);
