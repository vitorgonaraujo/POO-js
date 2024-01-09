const Prodcut = require("./Product");

module.exports = class Poster extends Prodcut {
  constructor(name, description, heigh, width, price, inStock = 0) {
    super(name, description, price, inStock);
    this.heigh;
    this.width;
  }
};
