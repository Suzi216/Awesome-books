let books=[];
const bookdiv=document.querySelector(".books-list");
const newtitle=document.querySelector('.book-name');
const newauthor=document.querySelector(".book-author");
const addbutton=document.querySelector(".add-book");

class Books {
  constructer(){
    // books = [];
   var  books= new Array();
  }
   //Add a book
   addup(obj) {
    this.books.push(obj);
}
    ///display the books in html page
    display(){
      bookdiv.innerHTML = '';
      for(let i=0;i<this.books.length;i+=1){
        const listofbook=document.createElement('div');
        listofbook.classList.add('book_div');
        listofbook.innerHTML = `<h4>${this.books[i].title}</h4>
            <h4>${this.books[i].author}</h4>
            <button id=${i} class="rem-btn">Remove</button><br> <br>`;
        bookdiv.appendChild(listofbook);
      }
    }
    // remove the books
    removebook(id){
      this.books.splice(id, 1);
      display();
    }
}

const bookuse= new Books();
//adding books to the object book.
addbutton.addEventListener("click", ()=> {
  const book = { title: '', author: '' };
  book.title=newtitle.value;
  book.author=newauthor.value;
  bookuse.addup(book);
  bookuse.display();
})

// remove the books from list
bookdiv.addEventListener('click', (e) => {
  if (event.target.classList.contains('rem-btn')){
    bookuse.removebook(e.target.id);
  }
});
