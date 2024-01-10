const App = require("./services/App");

App.createUser("1010", "Junior Silva", "21 99999");


console.log(
  App.addAddressToUser("1010", "250", "80", "laguna", "veneza", "casa")
);
console.log(App.addAddressToUser("0", "250", "80", "laguna", "veneza", "casa"));
console.log(
  App.addAddressToUser("1010", "252", "82", "laguna 2", "veneza 2", "casa")
);

console.log(App.findUserAddresses("1010"));
console.log(App.findUserAddresses("101"));

