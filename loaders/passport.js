const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const AuthService = require("../services/AuthService");
const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await AuthServiceInstance.getUserById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });

  // Local strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", 
      },
      async (username, password, done) => {
        try {
          const user = await AuthServiceInstance.loginUser({
            email: username,
            password,
          });
          return done(null, user); 
        } catch (error) {
          return done(error, false); 
        }
      }
    )
  );

  return passport;
};
