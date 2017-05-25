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
router.get('/user/signup/new', ctrlUser.userSignup);

/* GET Tradie pages. */
router.get('/tradie/profile/private', ctrlTradie.profilePrivate);
router.get('/tradie/profile/public', ctrlTradie.profilePublic);
router.get('/tradie/review/new', ctrlTradie.addReview);
router.get('/tradie/signup/new', ctrlTradie.tradieSignup);

// passportjs stuff
var passport = require('passport');
var Account = require('../models/account');


router.get('/index', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render('userSignup', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/index');
            });
        });
    });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/index');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
