const authRouter = require("./auth");
const productsRouter = require("./products");
const cartRouter = require("./cart");

module.exports = (app, passport) => {
  authRouter(app, passport);
  productsRouter(app);
  cartRouter(app);
};
