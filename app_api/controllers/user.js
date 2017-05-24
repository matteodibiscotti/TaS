module.exports.resultsCreate = function (req, res) { };
module.exports.resultsByDistance = function (req, res) { };
module.exports.userCreate = function (req, res) {
  
  sendJsonResponse(res, 200, {"status" : "success"});
  console.log('saved new user to database');
  res.redirect('/');
};
