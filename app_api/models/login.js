var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
  username: {type: String, required: true},
  pw: {type: String, required: true}
});
mongoose.model('login', loginSchema);
