const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./model');

var FacebookTokenStrategy = require('passport-facebook-token');

passport.use(new FacebookTokenStrategy({
    clientID: 589763351368286,
    clientSecret: '312bc49cbb0428eb08df2fa544f5ed35'
  }, function(accessToken, refreshToken, profile, done) {
    console.log('User profile', profile)
    User.findOrCreate({facebookId: profile.id}, function (error, user) {
      return done(error, user);
    });
  }
));

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
    .then(users => {
      res.json(users);
    })
});

router.post('/', function(req, res, next) {
  new User(req.body.user)
    .save()
    .then(user => {
      res.json({user})
    })
    .catch(next)
});

router.post('/facebook/token',
  passport.authenticate('facebook-token'),
  function (req, res) {
    // do something with req.user
    res.send(req.user);
  }
);

module.exports = router;
