var express = require('express');
var router = express.Router();
var faker = require("faker");
/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email()
  });
  res.status(200).send(data);
});

router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  if(username==password){
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  }

});

module.exports = router;
