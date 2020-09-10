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
    newBook.id = this.title;
    this.bookCardDiv = newBook;

    const title = document.createElement('h4');
    title.textContent = this.title;

    const author = document.createElement('p');
    author.textContent = this.author;

    const numberOfPages = document.createElement('p');
    numberOfPages.textContent = this.numberOfPages;

    const read = document.createElement('button');
    read.textContent = this.read ? 'Read' : 'Not read';
    read.addEventListener('click', () => {
      this.read = !this.read;
      read.textContent = this.read ? 'Read' : 'Not read';
    });

    const removeButton = document.createElement('button');
    removeButton.className = 'removeBook';
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      const node = document.getElementById(this.title);
      contentContainer.removeChild(node);
    });

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(numberOfPages);
    newBook.appendChild(read);
    newBook.appendChild(removeButton);

    contentContainer.appendChild(newBook);
  };
}

function addBookToLibrary() {
  const book = new Book('Catcher of the rye', true, 'J. D. Salinger', 200);
  myLibrary.push(book);
  book.display();
}

// main
const newBookButton = document.querySelector('.newBook');
newBookButton.addEventListener('click', addBookToLibrary);
