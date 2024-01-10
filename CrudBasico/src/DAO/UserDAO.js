module.exports = class UserDAO {
  #users = [];

  addUser(user) {
    this.#users.push(user);
  }

  listUsers() {
    return this.#users;
  }

  searchUserID(id) {
    return this.#users.find((user) => user.id === id);
  }

  updateUser(id, newName, newEmail) {
    const user = this.searchUserID(id);
    if (user) {
      user.name = newName;
      user.email = newEmail;
      return "a operação foi bem-sucedida";
    }
    return "falha ao atualizar o usuário";
  }

  deleteUser(id) {
    const user = this.searchUserID(id);
    if (user) {
      const index = this.#users.indexOf(user);
      if (index !== -1) {
        this.#users.splice(index, 1);
        return "a operação foi bem-sucedida";
      }
      return "falha ao deletar o usuário";
    }
    return "falha ao encontrar o usuário";
  }
};
