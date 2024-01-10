// App.js
const User = require("../models/User");
const Address = require("../models/Address");

module.exports = class App {
  static #users = [];
  static #addresses = [];

  static findUser(CPF) {
    const user = this.#users.find((user) => user.CPF === CPF);
    return user ?? null;
  }

  static createUser(CPF, fullname, phone) {
    const userExists = App.findUser(CPF);
    if (!userExists) {
      this.#users.push(new User(CPF, fullname, phone));
      console.log("Usuário criado com sucesso!");
    }
  }

  static findAddress(cep, number) {
    const address = this.#addresses.find(
      (address) => address.cep === cep && address.number === number
    );

    return address ?? null;
  }

  static addAddressToUser(cpf, cep, number, street, neighborhood, desc) {
    const user = App.findUser(cpf);

    if (!user) {
      return "Usuário não encontrado"; // Usuário não encontrado
    }

    const existingAddress = App.findAddress(cep, number);

    if (!existingAddress) {
      const newAddress = new Address(cep, number, street, neighborhood, desc);
      this.#addresses.push(newAddress);
      user.addresses.push(newAddress); // Adiciona o endereço ao array de endereços do usuário
      return "Endereço adicionado com sucesso"; // Endereço adicionado com sucesso
    }

    return "Endereço já existe"; // Endereço já existe
  }

  static findUserAddresses(cpf) {
    const user = App.findUser(cpf);

    if (!user || !user.addresses || user.addresses.length === 0) {
      return "Endereço de usuário não encontrado!";
    }

    return user.addresses;
  }
};
