const { createUser, loginUser } = require("../models/hashpwdModel");
const {
  getAllUsers,
  getUserById,
  updateUser,
} = require("../models/usersModel");

exports.getAllUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};
exports.getUserById = async (req, res) => {
  const user = await getUserById(req.params.id);
  user
    ? res.status(200).json(user)
    : res.status(404).json({ err: "User Not Found" });
};
exports.updateUser = async (req, res) => {
  const [updatedUser] = await updateUser(req.params.id, req.body);
  updatedUser
    ? res.status(200).json(updatedUser)
    : res.status(404).json({ error: "User Not Found" });
};
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }
    const [newUser] = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const user = await loginUser(req.body.username, req.body.password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
