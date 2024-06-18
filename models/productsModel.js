// THIS FILE CONTAINS THE DATABASE QUERIES FOR THE products TABLE

const pool = require("../db");

module.exports = class ProductsModel {
  // GET ALL PRODUCTS
  async getProducts(options = {}) {
    try {
      const statement = `SELECT * FROM products`;

      const values = [];

      const result = await pool.query(statement, values);

      if (result.rows?.length > 0) {
        return result.rows;
      }

      return [];
    } catch (error) {
      throw new Error(`Error in ProductsModel.getProducts(): ${error}`);
    }
  }

  // GET PRODUCT BY ID
  async getProductById(id) {
    try {
      const statement = `SELECT * FROM products WHERE id = $1`;
      const values = [id];
      const result = await pool.query(statement, values);

      if (result.rows?.length > 0) {
        return result.rows[0]; // Return the first product found
      }

      return null; // Return null if no product found
    } catch (error) {
      throw new Error(`Error in ProductsModel.getProductById(): ${error}`);
    }
  }
};
