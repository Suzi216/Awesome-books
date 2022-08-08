// var books=[];
const bookdiv = document.querySelector('.books-list');
const newtitle = document.querySelector('.book-name');
const newauthor = document.querySelector('.book-author');
const addbutton = document.querySelector('.add-book');

class Book {
  constructor() {
    this.Books = [];
  }

  // Add a book
  addup(obj) {
    this.Books.push(obj);
  }

  /// display the books in html page
  display() {
    bookdiv.innerHTML = '';
    for (let i = 0; i < this.Books.length; i += 1) {
      const listofbook = document.createElement('div');
      listofbook.classList.add('book_div');
      listofbook.innerHTML = `<h4>${this.Books[i].title}</h4>
            <h4>${this.Books[i].author}</h4>
            <button id=${i} class="rem-btn">Remove</button><br> <br>`;
      bookdiv.appendChild(listofbook);
    }
  }

  // remove the books
  removebook(id) {
    this.Books.splice(id, 1);
    window.localStorage.setItem('books', JSON.stringify(this.Books));
    this.display();
  }
}

const bookuse = new Book();
// adding books to the object book.
addbutton.addEventListener('click', () => {
  const book = { title: '', author: '' };
  book.title = newtitle.value;
  book.author = newauthor.value;
  bookuse.addup(book);
  window.localStorage.setItem('books', JSON.stringify(this.Books));
  bookuse.display();
});

// remove the books from list
bookdiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('rem-btn')) {
    bookuse.removebook(e.target.id);
  }
});
