let myLibrary = [];

function Book(title, read, author, numberOfPages) {
  this.title = title;
  this.read = read;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {
  const book = new Book('Catcher of the rye', true, 'J. D. Salinger', 200);
  myLibrary.push(book);
}

addBookToLibrary();
console.log(myLibrary);
