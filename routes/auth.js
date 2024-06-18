// THIS FILE DEFINES THE ROUTES FOR AUTHENTICATION. IT USES THE AuthService TO HANDLE THE LOGIC FOR THE ROUTES.

const express = require("express");
const router = express.Router();
const AuthService = require("../services/AuthService");
const AuthServiceInstance = new AuthService();

// Database queries for products
module.exports = (app, passport) => {
  // ROUTE FOR AUTHENTICATION
  app.use("/auth", router);

  // ROUTE TO REGISTER A NEW USER
  router.post("/register", async (req, res, next) => {
    try {
      const { email, password, name_first, name_last } = req.body;

      // Validate if email and password are present
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      const created = new Date().toISOString();

      const response = await AuthServiceInstance.registerUser({
        email,
        password,
        name_first,
        name_last,
        created,
      });
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  // ROUTE TO LOGIN A USER

  router.post(
    "/login",
    passport.authenticate("local"),
    async (req, res, next) => {
      try {
        // Ensure req.body contains { email, password } correctly
        const last_login = new Date().toISOString();
        const { email, password } = req.body;
        const response = await AuthServiceInstance.loginUser({
          email,
          password,
          last_login,
        });
        res.status(200).send(response);
      } catch (err) {
        next(err);
      }
    }
  );
};
