
//Leason 1
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');



//Leason 2
var titles = document.getElementsByClassName('title');
//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item) {
  console.log(item);
})

var lis = document.getElementsByClassName('li');
//console.log(lis);

for (var i = 0; i < titles.length; i++) {
  //console.log(titles[i]);
}
