const express = require("express");
const router = express.Router();
const CartService = require("../services/CartService");
const CartServiceInstance = new CartService();
const authMiddleware = require("../loaders/authMiddleware");

module.exports = (app, passport) => {
  app.use("/cart", router);

  // CREATE CART
  router.post("/new", authMiddleware, async (req, res, next) => {
    try {
      const { id } = req.user;

      const response = await CartServiceInstance.create({ userId: id });
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
