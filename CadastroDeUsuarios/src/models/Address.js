module.exports = class Address {
  constructor(cep, number, street, neighborhood, desc) {
    this.cep = cep;
    this.number = number;
    this.street = street;
    this.neighborhood = neighborhood;
    this.desc = desc;
  }
};
