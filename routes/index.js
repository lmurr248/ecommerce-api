const authRouter = require("./auth");
const productsRouter = require("./products");

module.exports = (app, passport) => {
  authRouter(app, passport);
  productsRouter(app);
};
