const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../models/postModel.js");

exports.getAllPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await getPostById(req.params.id);
  post ? res.json(post) : res.status(404).json({ error: "Post not found" });
};

exports.createPost = async (req, res) => {
  const [newPost] = await createPost(req.body);
  res.status(201).json(newPost);
};

exports.updatePost = async (req, res) => {
  const [updatedPost] = await updatePost(req.params.id, req.body);
  updatedPost
    ? res.json(updatedPost)
    : res.status(404).json({ error: "Post not found" });
};

exports.deletePost = async (req, res) => {
  const deleted = await deletePost(req.params.id);
  deleted
    ? res.json({ message: "Post deleted" })
    : res.status(404).json({ error: "Post not found" });
};
