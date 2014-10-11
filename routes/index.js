var express = require('express');
var router = express.Router();

var registeredUsers = ["Ivan", "Natalie"];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', users : registeredUsers});
});

router.post('/add',function(req, res) {
    var userName = req.body.displayName;
    registeredUsers.push(userName);
    res.render('index', { title: 'Express', users : registeredUsers});
     
});

var validateUserName = function(username) {
    
}

module.exports = router;
