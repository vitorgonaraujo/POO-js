module.exports = class User {
  static contadorID = 1;

  constructor(name, email) {
    this._id = User.contadorID++;
    this._name = name;
    this._email = email;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
};
