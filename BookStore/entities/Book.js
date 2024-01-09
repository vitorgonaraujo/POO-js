const Prodcut = require("./Product");

module.exports = class Book extends Prodcut {
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Livre: ${title}`, description, price, inStock);
  }
};
