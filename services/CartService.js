// THIS FILE HANDLES THE LOGIC FOR DEALING WITH THE carts DATABASE QUERIES

const createError = require("http-errors");
const CartModel = require("../models/cartModel");
const CartModelInstance = new CartModel();

module.exports = class CartService {
  async create(data) {
    const { id } = data;

    try {
      const Cart = new CartModel();
      const cart = await Cart.createCart(userId);

      return cart;
    } catch (err) {
      throw err;
    }
  }
};
