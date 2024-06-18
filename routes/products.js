// THIS FILE DEFINES THE ROUTES FOR PRODUCTS. IT USES THE ProductService TO HANDLE THE LOGIC FOR THE ROUTES.

const express = require("express");
const router = express.Router();
const ProductService = require("../services/ProductService");
const ProductServiceInstance = new ProductService();

// Database queries for products
module.exports = (app) => {
  // ROUTE TO GET ALL PRODUCTS
  app.use("/products", router);

  router.get("/", async (req, res, next) => {
    try {
      const queryParams = req.query;
      const products = await ProductServiceInstance.getProducts(queryParams);
      res.status(200).send(products);
    } catch (error) {
      next(error);
    }
  });

  // ROUTE TO GET PRODUCT BY ID
  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await ProductServiceInstance.getProductById(id);
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  });
};
