module.exports = class User {
  constructor(CPF, fullname, phone) {
    this.CPF = CPF;
    this.fullname = fullname;
    this.phone = phone;
    this.addresses = [];
  }
};
