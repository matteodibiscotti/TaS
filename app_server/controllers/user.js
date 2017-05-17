/* GET search results page */
module.exports.searchResults = function(req, res){
res.render('index', { title: 'Search Results' });
};

/* GET search form page */
module.exports.newSearch = function(req, res){
res.render('index', { title: 'Search Form' });
};