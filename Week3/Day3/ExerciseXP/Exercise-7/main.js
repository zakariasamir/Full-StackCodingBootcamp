const allBooks = [
  {
    title: "Harry Potter",
    author: "J K Rolling",
    image:
      "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855898.jpg",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
    alreadyRead: false,
  },
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const bookDiv = document.createElement("div");

  const bookDetails = document.createElement("p");
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    bookDetails.style.color = "red";
  }

  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = `${book.title} cover`;
  bookImage.style.width = "100px";

  bookDiv.appendChild(bookDetails);
  bookDiv.appendChild(bookImage);

  bookSection.appendChild(bookDiv);
});
