function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(qnt) {
    this.inStock += qnt;
  };
  this.save = function () {};
}

const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure"];

const eragon = new Book("Eregon", 312, tags, author);

console.log(eragon);

eragon.addOnStock(20);
console.log(eragon);

const eldest = new Book("Eldest", 453, tags, author);

console.log(eldest);
