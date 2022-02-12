
//Leasson 1
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');



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
  console.log(book);
})
