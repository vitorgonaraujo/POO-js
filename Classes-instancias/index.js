const Author = require("./Author.js");
const Book = require("./Book.js");

const vitor = new Author("Vitor Gonçalves", "17/01/2003");
const roberto = new Author("Roberto Abrão", "01/05/1997");

const bk1984 = new Book("1984", 93, "Livro sobre 1984", vitor);

const bkRed = new Book("Red", 54, "Livro de robertinho", roberto);

console.log(bkRed);

bk1984.addToStock(40);
bk1984.publish();
console.log(bk1984);
