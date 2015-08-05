var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('./models/User.js');
// var jwt        = require('./services/jwt.js');
var jwt        = require('jwt-simple');
var app        = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.post('/register', function(req,res) {
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password: user.password
    });



    newUser.save(function(err) {
        createSendToken(newUser, res);
    });

});

app.post('/login', function(req, res) {
    req.user = req.body;

    var searchUser = {
        email: req.user.email
    };

    User.findOne(searchUser, function(err, user) {
        if(err) throw err;

        if(!user) {
            return res.status(401).send({message: "Wrong email/password"});
        }

        user.comparePasswords(req.user.password, function(err, isMatch) {
            if(err) throw err;

            if(!isMatch) {
                return res.status(401).send({message: "Wrong email/password"});
            }
            createSendToken(user, res);
        });
    });
});

function createSendToken(user, res) {
    var payload = {
        sub: user.id
    }

    var token = jwt.encode(payload, "shhh...");

    res.status(200).send({
        user: user  .toJSON(),
        token: token
    });
}

var jobs = [
    'Cook',
    'Superhero',
    'Unicorn Whisperer',
    'Unicorn',
    'Sandwich Maker'
];

app.get('/jobs', function(req, res) {
    var token   = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "shhh...");
    if(!payload.sub) {
        res.status(401).send({
            message: "Authentication failed"
        });
    }


    if(!req.headers.authorization) {
        return res.status(401).send({
            message: "You are not authorized!"
        });
    }
    res.json(jobs);
})

mongoose.connect('mongodb://localhost/ngnodejwt');

var server = app.listen(3000, function() {
    console.log('api listening on ', server.address().port);
});
