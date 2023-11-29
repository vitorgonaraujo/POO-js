const Character = require("./Character.js");
const Thief = require("./Thief.js");
const Mage = require("./Mage.js");
const Warrior = require("./Warrior.js");

const doll = new Character("Boneco de teste", 200, 10, 10);
const weakdoll = new Character("Boneco fraco", 200, 0, 10);

const personagem1 = new Character("Teste Character", 100, 15, 12); //testa Character
const lula = new Thief("Lula", 100, 15, 5); //Testa thief
const merlin = new Mage("Merlin", 60, 5, 5, 15); //Testa mage
const golem = new Warrior("PEEKA", 150, 15, 10, 5); // Testa Warrior

personagem1.toAttack(doll);
lula.toAttack(doll);
weakdoll.toAttack(doll);
merlin.toAttack(doll);
merlin.healing(doll);
golem.changeStance();

merlin.toAttack(golem);
golem.toAttack(weakdoll);
