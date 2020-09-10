let myLibrary = [];

function Book(title, read, author, numberOfPages) {
  this.title = title;
  this.read = read;
  this.author = author;
  this.numberOfPages = numberOfPages;

  this.display = function () {
    const contentContainer = document.querySelector('#content');
    const newBook = document.createElement('div');
    newBook.className = 'book';

    const removeButton = document.createElement('button');
    removeButton.className = 'removeBook';
    removeButton.textContent = 'Remove';
    newBook.appendChild(removeButton);

    contentContainer.appendChild(newBook);
  };
}

function addBookToLibrary() {
  const book = new Book('Catcher of the rye', true, 'J. D. Salinger', 200);
  myLibrary.push(book);
  myLibrary[0].display();
}

// main
const newBookButton = document.querySelector('.newBook');
newBookButton.addEventListener('click', addBookToLibrary);
