// const express = require("express");
import express from "express";
const app = express();
// const fetchPosts = require("./data/dataService");
import fetchPosts from "./data/dataService.js";
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
    console.log("data has been successfully retrieved and sent as a response");
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
