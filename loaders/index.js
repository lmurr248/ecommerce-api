const routeLoader = require("../routes");
const expressLoader = require("./express");
const passportLoader = require("./passport");

module.exports = async (app) => {
  // Load the express middleware
  expressLoader(app);

  // Load the passport middleware
  const passport = passportLoader(app);

  // Load all the routes
  routeLoader(app, passport);
};
