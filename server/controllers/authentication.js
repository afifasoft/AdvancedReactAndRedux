const User = require('../models/user')
exports.signup = function(req, res, next) {
  console.log(req.body);
  const email= req.body.email;
  const password = req.body.password;

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {

  });
  // If a user with email does exists, return an error

  // If a user with email does not exists, create and save user record


  // Repond to request indicating the user was created
  //res.send({ success: 'true' });
}
