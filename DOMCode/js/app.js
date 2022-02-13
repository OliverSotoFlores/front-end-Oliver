
//Leasson 1
const search = document.getElementById('search-books');




//Leasson 2
var titles = document.getElementsByClassName('title');
//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item) {
  //console.log(item);
})

var lis = document.getElementsByClassName('li');
//console.log(lis);

for (var i = 0; i < titles.length; i++) {
  //console.log(titles[i]);
}

//Leasson 3
const wmf = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(wmf);

//return only one element the top one
var books = document.querySelector("#book-list li .name");
//console.log(books);

//return a collection of elements
books = document.querySelectorAll("#book-list li .name");
//console.log(books);

Array.from(books).forEach(function(book) {
  //console.log(book);
})

 //Leasson 4
 books = document.querySelectorAll("#book-list li .name");
 books.forEach(function(book) {
   book.textContent += '(bok title)';
 })

 var bookList = document.querySelector('#book-list');
 //bookList.innerHTML = '<h2>Books and more books..</h2>';
 bookList.innerHTML += '<p>This is how you add html</p>';


 //Leasson 5 DOM nodes
const banner = document.querySelector("#page-banner");
//console.log('#page-banner node type is:'+ banner.nodeType);
//console.log('#page-banner node type is:'+ banner.nodeName);
//console.log('#page-banner has child nodes:'+ banner.hasChildNodes());

const cloneBanner = banner.cloneNode(false);
//console.log(cloneBanner);


//Leasson 6 DOM Traversing

//console.log("The parent node is.",bookList.parentNode);
//console.log("The parent element is.",bookList.parentElement.parentElement);

//Leasson 7 DOM Traersing
/*console.log('book list next sibling is',bookList.nextSibling);
console.log('book list next sibling is',bookList.nextElementSibling);

console.log('book list next sibling is',bookList.previousSibling);
console.log('book list next sibling is',bookList.previousElementSibling);*/

bookList.previousElementSibling.querySelector('p').innerHTML+= "</br> Hola a todos soy Oliver xd"

//Leasson 8: DOM events/removing

/*var h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', function(event) {
  console.log(event.target);
  console.log(event);
})

var btns = document.querySelectorAll('#book-list .delete');
console.log(btns);

Array.from(btns).forEach(function(btn) {
  btn.addEventListener('click',function(e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  })
})

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Navigation to',e.target.textContent,' Was prevented');
})*/

//Leasson 9: Bubbling events

const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e) {
  if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
  }
})


//Leasson 10: Interacting with form
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const value =  addForm.querySelector('input[type="text"]').value;


//Leasson 11: Creating nextElementSibling
const li = document.createElement('li');
const bookName = document.createElement('Span');
const deleteBtn = document.createElement('Span');

//add content
deleteBtn.textContent = 'delete';
//leasson 12: add classes and styles
bookName.className  = 'name';
deleteBtn.className = 'delete';
bookName.textContent = value;

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);


});


//leasson 14:
/*book.getAttribute('class');
book.setAttribute('class', 'name-2');
book.hasAttribute('class');
book.hasAttribute('href');
book.removeAttribute('class');
book.setAttribute('class', 'name');*/

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function (e) {
  if (hideBox.checked) {
    list.style.display = 'none';
  }else {
    list.style.display = 'initial'
  }
})
