/* GET search results page */
module.exports.searchResults = function(req, res){
res.render('searchResults', { title: 'Search Results' });
};

/* GET search form page */
module.exports.newSearch = function(req, res){
res.render('newSearch', { title: 'Search Form' });
};
