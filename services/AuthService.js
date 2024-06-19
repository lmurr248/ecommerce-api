// THIS FILE HANDLES THE LOGIC FOR DEALING WITH THE PRODUCTS DATABASE QUERIES

const createError = require("http-errors");
const UsersModel = require("../models/usersModel");
const UsersModelInstance = new UsersModel();
const bcrypt = require("bcrypt");

module.exports = class AuthService {
  async registerUser(data) {
    try {
      // Check if user already exists
      const user = await UsersModelInstance.getUserByEmail(data.email);

      if (user) {
        throw new createError.Conflict(
          `User with email ${data.email} already exists`
        );
      }

      // Create a new user
      return await UsersModelInstance.createUser(data); // Ensure createUser method is defined
    } catch (error) {
      throw new createError.InternalServerError(error);
    }
  }

  async loginUser(data) {
    const { email, password } = data;
    try {
      // Check if user exists
      const user = await UsersModelInstance.getUserByEmail(email);

      // If no user found
      if (!user) {
        throw new createError.NotFound(`User with email ${email} not found`);
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new createError.Unauthorized("Incorrect email or password");
      }

      // Update last_login in database
      const lastLogin = new Date().toISOString();
      await UsersModelInstance.updateLastLogin(user.id, lastLogin);

      // Return the user
      return user;
    } catch (error) {
      throw new createError.InternalServerError(error);
    }
  }

  async getUserById(id) {
    try {
      const user = await UsersModelInstance.getUserById(id);
      if (!user) {
        throw new createError.NotFound(`User with id ${id} not found.`);
      }
      return user;
    } catch (err) {
      throw new createError.InternalServerError(err);
    }
  }
};
