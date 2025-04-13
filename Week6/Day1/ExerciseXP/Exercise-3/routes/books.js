const express = require("express");
const router = express.Router();

let books = [];
let currentId = 1;

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: currentId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find((b) => b.id === parseInt(id));
  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((b) => b.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Book not found" });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
