const App = require("./App");

App.createUser("junior@email.com", "Junior da Silva");
App.createUser("lucas@email.com", "Lucas Queiroga");
App.createUser("juliana@email.com", "Juliana Conde");

App.deposit("junior@email.com", 100);

App.transfer("junior@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("junior@email.com"));
console.log(App.findUser("junior@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
