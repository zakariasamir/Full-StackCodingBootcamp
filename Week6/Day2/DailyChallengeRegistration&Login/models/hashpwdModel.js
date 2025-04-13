const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
const createUser = async (user) => {
  const hashedPassword = await hashPassword(user.password);
  return db("hashpwd")
    .insert({ ...user, password: hashedPassword })
    .returning("*");
};

const loginUser = async (username, password) => {
  const user = await db("hashpwd").where({ username }).first();
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

module.exports = {
  createUser,
  loginUser,
};
