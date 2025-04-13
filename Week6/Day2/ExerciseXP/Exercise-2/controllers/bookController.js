const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  const Books = await getAllBooks();
  res.json(Books);
};

exports.getBookById = async (req, res) => {
  const book = await getBookById(req.params.id);
  book
    ? res.status(200).json(book)
    : res.status(404).json({ err: "Book Not Found" });
};

exports.createBook = async (req, res) => {
  const [newBook] = await createBook(req.body);
  res.status(201).json(newBook);
};

exports.updateBook = async (req, res) => {
  const [updatedBook] = await updateBook(req.params.id, req.body);
  updatedBook
    ? res.status(200).json(updatedBook)
    : res.status(404).json({ error: "Book Not Found" });
};

exports.deleteBook = async (req, res) => {
  const deleted = await deleteBook(req.params.id);
  deleted
    ? res.status(200).json({ message: "Book Deleted succesfully" })
    : res.satus(404).json({ error: "Book Not Found" });
};

// module.exports = {
//   getAllBooks,
//   getBookById,
//   createBook,
//   updateBook,
//   deleteBook
// }
