// import express from "express";
const express = require("express");
const app = express();
app.use(express.json());

const posts = [
  { id: 1, title: "Post 1", content: "Content of Post 1" },
  { id: 2, title: "Post 2", content: "Content of Post 2" },
  { id: 3, title: "Post 3", content: "Content of Post 3" },
  { id: 4, title: "Post 4", content: "Content of Post 4" },
  { id: 5, title: "Post 5", content: "Content of Post 5" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }
  const updatedPost = {
    id: postId,
    title: req.body.title,
    content: req.body.content,
  };
  posts[postIndex] = updatedPost;
  res.json(updatedPost);
});

app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }
  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
