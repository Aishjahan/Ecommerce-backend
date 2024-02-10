const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Yzc5Y2NjMjA1OTI1MzY2NGYzMTNiYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNzU4MDc0NH0.6wet0jlvyZZT7jis9IPGnebZhVCjT6pdUJvZxm6yvjQ";
  return token;
};
