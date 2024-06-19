// THIS FILE CONTAINS THE DATABASE QUERIES FOR THE carts TABLE

const pgp = require("pg-promise")();
const pool = require("../db");

module.exports = class CartModel {
  // CREATE A NEW CART
  async createCart(userId) {
    try {
      const data = { userId, ...this };

      const statement =
        pgp.helpers.insert(data, null, "carts") + "RETURNING *";

      const result = await pool.query(statement);

      if (result.rows?.length > 0) {
        return result.rows[0];
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
};
