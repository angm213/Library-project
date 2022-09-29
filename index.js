const insertBook = document.querySelector(".modal");
let libraryArr = [];
let createdBook;

// modal JS
function modalShow() {
    insertBook.style.display = "flex";
  }
  
  function modalHide() {
    insertBook.style.display = "none";
  }


// book cosntructor
class Book {
  constructor (title, author, page, read) {
    this.title = bookForm.authName.value;
    this.author = bookForm.bookTitle.value;
    this.page = bookForm.pageNum.value + " " + 'pages';
    this.read = bookForm.read.value;
  }
}

// adding books
function addToLibrary() {
  event.preventDefault();
  modalHide();
  createdBook = new Book();
  libraryArr.push(createdBook);
  renderBook();
  bookForm.reset();
}

// placing books on the page
function renderBook() {
  const displayArea = document.querySelector(".card-books-area");
  const bookBodies = document.querySelectorAll(".book-body");
  bookBodies.forEach(bookBodies => displayArea.removeChild(bookBodies));
  // libraryArr.forEach(item => createBookBody(item));
  for (let i = 0; i < libraryArr.length; i++) {
    createBookBody(libraryArr[i]);
  }
}

//delete element
function removeElement(event) {
  event.target.parentElement.style.display = 'none';
}

// creating DOM elements to place on page
function createBookBody(item) {
  let libraryBody = document.querySelector(".card-books-area");
  let bookBodyDiv = document.createElement('div');
  let bookTitleDiv = document.createElement('div');
  let bookAuthorDiv = document.createElement('div');
  let bookPagesDiv = document.createElement('div');
  let removeBtn = document.createElement('button');
  let readBtn = document.createElement('button');

  bookBodyDiv.classList.add('book-body');
  bookBodyDiv.setAttribute('id', libraryArr.indexOf(item));
  
  bookTitleDiv.textContent = item.title;
  bookTitleDiv.classList.add('title');
  bookBodyDiv.appendChild(bookTitleDiv);

  bookAuthorDiv.textContent = item.author;
  bookAuthorDiv.classList.add('author');
  bookBodyDiv.appendChild(bookAuthorDiv);

  bookPagesDiv.textContent = item.page;
  bookPagesDiv.classList.add('pages');
  bookBodyDiv.appendChild(bookPagesDiv);

  readBtn.setAttribute('id', 'read-btn');
  bookBodyDiv.appendChild(readBtn);
  if (item.read == 'false') {
    readBtn.textContent = 'Not Read'
  } else readBtn.textContent = 'Read';
    
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('id', 'rem-btn');
  bookBodyDiv.appendChild(removeBtn);
  
  libraryBody.appendChild(bookBodyDiv);
  
  removeBtn.addEventListener('click', () => {
    libraryArr.splice(libraryArr.indexOf(item),1);
    removeElement(event);
  });

  readBtn.addEventListener('click', () => {
    readBtn.textContent = ((readBtn.textContent != "Read") ? "Read" : "Not Read");
  });
}


// footer
document.querySelector("#ydate").innerHTML = (new Date().getFullYear());
