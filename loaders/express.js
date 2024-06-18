const cors = require("cors");
const session = require("express-session");
const session_secret = process.env.SESSION_SECRET;
const bodyParser = require("body-parser");

module.exports = (app) => {
  // Parse application/json requests
  app.use(bodyParser.json());

  // Parse application/x-www-form-urlencoded requests
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  app.set("trust proxy", 1); // trust first proxy

  app.use(
    session({
      secret: session_secret,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
    })
  );

  return app;
};
