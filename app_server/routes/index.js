var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');
var ctrlUser = require('../controllers/user');
var ctrlTradie = require('../controllers/tradie');


/* GET Others pages. */
router.get('/', ctrlOthers.login);
router.get('/ref', ctrlOthers.references);
router.get('/welcome', ctrlOthers.welcome);

/* GET User pages. */
router.get('/user/results', ctrlUser.searchResults);
router.get('/user/search/new', ctrlUser.newSearch);

/* GET Tradie pages. */
router.get('/tradie/profile/private', ctrlTradie.profilePrivate);
router.get('/tradie/profile/public', ctrlTradie.profilePublic);
router.get('/tradie/review/new', ctrlTradie.addReview);

module.exports = router;
