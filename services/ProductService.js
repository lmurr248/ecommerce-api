// THIS FILE HANDLES THE LOGIC FOR DEALING WITH THE PRODUCTS DATABASE QUERIES

const createError = require("http-errors");
const ProductsModel = require("../models/productsModel");
const ProductsModelInstance = new ProductsModel();

module.exports = class ProductService {
  async getProducts(options) {
    try {
      const products = await ProductsModelInstance.getProducts(options);
      return products;
    } catch (error) {
      throw new createError.InternalServerError(error);
    }
  }

  async getProductById(id) {
    try {
      const product = await ProductsModelInstance.getProductById(id);

      if (!product) {
        throw new createError.NotFound(`Product with id ${id} not found`);
      }
      return product;
    } catch (error) {
      throw new createError.InternalServerError(error);
    }
  }
};
