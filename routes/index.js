var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs) {
    res.render('index', { 
      title : 'Express', 
      users : docs 
    });
  });
});

/* GET userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e, docs) {
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New user page */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add new user' });
});

router.post('/add',function(req, res) {
    var userName = req.body.displayName;
    registeredUsers.push(userName);
    res.render('index', { title: 'Express', users : registeredUsers});
     
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

var validateUserName = function(username) {
    
}

module.exports = router;
