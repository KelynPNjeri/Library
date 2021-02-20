// Create Book Constructor
function Book(title, pages, author, readStatus) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.readStatus = readStatus;
}
let bookArr = [];
bookArr = (bookArr == null) ? JSON.parse(localStorage.getItem('data-store')) : [];


// Get reference to the content div.
const contentDiv = document.getElementById('content');
const bookForm = document.getElementById('book-form');
// Get text from the input fields.

// Push the data onto an arr.
// Create a localStorage instance 'data-store' that stores the current array values.
// Everytime a new object is added, update the localStorage
const clearFields = () => {
    document.getElementById('book-title').value = "";
    document.getElementById('book-pages').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('read-status').checked = false;

}
const displayBooks = () => {
    bookArr.forEach((book) => {
        const divEl = document.createElement("div");
        divEl.className = "card w-25";
        divEl.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">
                ${book.pages}
                </p>
                <p>${book.author}</p>
                <a href="#" class="btn btn-primary">${book.readStatus}</a>
            </div>
        `;


    });
    contentDiv.appendChild(divEl);

}
const saveBook = () => {
    const bookTitle = document.getElementById('book-title').value;
    const bookPages = document.getElementById('book-pages').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookRead = document.getElementById('read-status').checked;
    // Populate the Book constructor.
    let newBook = new Book(bookTitle, bookPages, bookAuthor, bookRead);
    bookArr.push(newBook);
    // FIXME: Fix the new save after refresh bug.
    localStorage.setItem('data-store', JSON.stringify(bookArr));

    console.log(bookArr);
    clearFields();
    displayBooks();
}



bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveBook();
});