const myLibrary = [];

function Book(title, author, isbn, description, pages, status) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.description = description;
  this.pages = pages;
  this.status = status;
}
Book.prototype.changeReadStatus = function change() {
  if (this.status.includes('Read')) {
    this.status = 'Unread';
  } else if (this.status.includes('Unread')) {
    this.status = 'Read';
  }
};
function displayBooks(array) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    const book = document.createElement('div');
    book.className = 'book';

    const booktitle = document.createElement('h4');
    booktitle.textContent = `Title: ${array[i].title}`;
    book.appendChild(booktitle);

    const bookauthor = document.createElement('p');
    bookauthor.textContent = `Author: ${array[i].author}`;
    book.appendChild(bookauthor);

    const description = document.createElement('p');
    description.textContent = `Description: ${array[i].description}`;
    book.appendChild(description);

    const bookactions = document.createElement('div');
    bookactions.className = 'book-detail';
    book.appendChild(bookactions);

    const read = document.createElement('div');
    read.className = 'stat';
    read.id = 'status';
    read.textContent = `Status: ${array[i].status}`;

    bookactions.appendChild(read);
    const buttonRead = document.createElement('button');
    buttonRead.textContent = 'Change Status';
    buttonRead.className = 'status-btn';
    buttonRead.onclick = () => {
      array[i].changeReadStatus();
      const modifiedstatus = document.getElementById('status');
      modifiedstatus.innerHTML = `Status: ${array[i].status}`;
    };
    bookactions.appendChild(buttonRead);

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Remove';
    buttonRemove.className = 'remove-book';
    buttonRemove.id = 'remove';
    buttonRemove.onclick = () => {
      buttonRemove.closest('div.book').remove();
      array.splice(i, 1);
    };
    bookactions.appendChild(buttonRemove);

    document.getElementById('target').appendChild(book);
  }
}
// eslint-disable-next-line no-unused-vars
function addBookToLibrary() {
  const addedbook = new Book(
    document.getElementById('input-title').value,
    document.getElementById('input-author').value,
    document.getElementById('input-isbn').value,
    document.getElementById('input-description').value,
    document.getElementById('input-pages').value,
    'Unread',
  );

  myLibrary.push(addedbook);

  document.getElementById('form-container').style.display = 'none';
  displayBooks(myLibrary);
  return false;
}

const addbookbtn = document.getElementById('add-btn');

addbookbtn.addEventListener('click', () => {
  const form = document.getElementById('form-container');
  form.style.display = 'block';
  form.style.position = 'absolute';
});
