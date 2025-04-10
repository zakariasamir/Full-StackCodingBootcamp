const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 1, title: "Book 1", author: "Author 1", publishedYear: 2001 },
  { id: 2, title: "Book 2", author: "Author 2", publishedYear: 2002 },
  { id: 3, title: "Book 3", author: "Author 3", publishedYear: 2003 },
  { id: 4, title: "Book 4", author: "Author 4", publishedYear: 2004 },
  { id: 5, title: "Book 5", author: "Author 5", publishedYear: 2005 },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book).status(200);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.get((req, res) => {
  res.send("Page not found").status(404);
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
