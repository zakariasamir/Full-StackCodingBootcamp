const db = require("../config/db");

const getAllUsers = () => db("users").select("*");
const getUserById = (id) => db("users").select("*").where({ id });
const updateUser = (id, user) =>
  db("users").where({ id }).update(user).returning("*");

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
};
