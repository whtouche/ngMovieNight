var express       = require('express');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var User          = require('./models/User.js');
var jwt           = require('jwt-simple');
var passport      = require('passport');
var moment        = require('moment');
var localStrategy = require('./services/localStrategy.js');
var jobs          = require('./services/jobs.js');
var app           = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

passport.use('local-register', localStrategy.register);
passport.use('local-login', localStrategy.login);

app.post('/register', passport.authenticate('local-register'), function(req,res) {
    createSendToken(req.user, res);
});

app.post('/login', passport.authenticate('local-login'), function(req, res) {
    createSendToken(req.user, res);
});

function createSendToken(user, res) {
    var payload = {
        sub: user.id,
        exp: moment().add(10, 'days').unix()
    }

    var token = jwt.encode(payload, "shhh...");

    res.status(200).send({
        user: user  .toJSON(),
        token: token
    });
}

app.get('/jobs', jobs)

mongoose.connect('mongodb://localhost/ngnodejwt');

var server = app.listen(3000, function() {
    console.log('api listening on ', server.address().port);
});
