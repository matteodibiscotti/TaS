/* GET private page */
module.exports.profilePrivate = function(req, res){
res.render('index', { title: 'Private Profile' });
};

/* GET public page */
module.exports.profilePublic = function(req, res){
res.render('index', { title: 'Public Profile' });
};

/* GET review form page */
module.exports.addReview = function(req, res){
res.render('index', { title: 'Add Review' });
};