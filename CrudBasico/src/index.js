const UserDAO = require("./DAO/UserDAO");
const User = require("./models/User");

const userDAO = new UserDAO();

const user1 = new User("Joao", "joao@gmail");
const user2 = new User("Fernanda Monte Negro", "fernandinha34@gmail");
const user3 = new User("Afonso Soarez", "afonso@gmail");
const user4 = new User("Robertinho Carrara", "roberto@gmail");

userDAO.addUser(user1);
userDAO.addUser(user2);
userDAO.addUser(user3);
userDAO.addUser(user4);

console.log(userDAO.listUsers());

console.log(userDAO.updateUser(1, "Rafael", "rafael@gmail.com"));
console.log(userDAO.listUsers());

userDAO.deleteUser(3);
userDAO.deleteUser(8);
console.log(userDAO.listUsers());
