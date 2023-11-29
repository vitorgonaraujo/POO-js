class Book {
  constructor(title, pages, description, Author) {
    this.title = title;
    this.pages = pages;
    this.description = description;

    this.Author = Author;
    this.inStock = 0;
    this.published = false;
  }

  addToStock(qnt) {
    this.inStock += qnt;
  }

  publish() {
    this.published = true;
  }
}

module.exports = Book;

// const eragon = new Book("Eragon");
// const eldest = new Book("Eldest");

// eragon.publish();

// console.log(eragon);
// console.log(eldest);
