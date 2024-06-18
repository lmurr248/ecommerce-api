// THIS FILE CONTAINS THE DATABASE QUERIES FOR THE users TABLE

const pgp = require("pg-promise")();
const pool = require("../db");

module.exports = class UsersModel {
  // CREATE A NEW USER
  async createUser(data) {
    try {
      // Generate SQL statement using pg-promise
      const statement = pgp.helpers.insert(data, null, "users") + "RETURNING *";

      // Execute the SQL statement
      const result = await pool.query(statement);

      if (result.rows?.length > 0) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(`Error in ProductsModel.createUser(): ${error}`);
    }
  }

  // UPDATE LAST_LOGIN WITH CURRENT DATE & TIME WHEN A USER LOGS IN
  async updateLastLogin(userId, lastLogin) {
    try {
      const query = `
        UPDATE users
        SET last_login = $1
        WHERE id = $2
      `;
      const values = [lastLogin, userId];
      await pool.query(query, values);
    } catch (error) {
      throw new Error(`Failed to update last login: ${error.message}`);
    }
  }

  // UPDATE A USER

  // FIND USER BY EMAIL
  async getUserByEmail(email) {
    try {
      const query = "SELECT * FROM users WHERE email = $1";
      const result = await pool.query(query, [email]);
      return result.rows[0]; // Assuming you expect only one user with this email
    } catch (error) {
      throw new Error(`Error in UsersModel.getUserByEmail: ${error.message}`);
    }
  }

  // FIND USER BY ID
};
