let books=[];
const bookdiv=document.querySelector(".books-list");
const newtitle=document.querySelector('.book-name');
const newauthor=document.querySelector(".book-author");
const addbutton=document.querySelector(".add-book");

///display the books in html page
function display(){
  bookdiv.innerHTML = '';
  for(let i=0;i<books.length;i+=1){
    const listofbook=document.createElement('div');
    listofbook.classList.add('book_div');
    listofbook.innerHTML = `<h4>${books[i].title}</h4>
        <h4>${books[i].author}</h4>
        <button id=${i} class="rem-btn">Remove</button><br> <br>`;
    bookdiv.appendChild(listofbook);
  }
}
//adding books to the object book.
addbutton.addEventListener("click", ()=> {
  const book = { title: '', author: '' };
  book.title=newtitle.value;
  book.author=newauthor.value;
  books.push(book);
  display();
})
// remove the books
function removebook(id){
  books.splice(id, 1);
  display();
}
// remove the books from list
bookdiv.addEventListener('click', (e) => {
  if (event.target.classList.contains('rem-btn')){
    removebook(e.target.id);
  }
});
