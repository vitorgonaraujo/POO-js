const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, hp, attack, defense, shieldPoints) {
    super(name, hp, attack, defense);
    this.shieldPoints = shieldPoints;
    this.stance = "attacking";
  }
  toAttack(target) {
    if (this.stance === "attacking") {
      const damage = this.attack - target.defense;
      if (damage > 0) {
        target.hp -= damage;
        console.log(
          `${this.name} atacou ${target.name} e causou ${damage} de dano.\n${target.name} tem ${target.hp} pontos de vida restantes.`
        );
      } else {
        console.log(
          `${this.name} atacou ${target.name}, mas o ataque foi bloqueado pela defesa de ${target.name}.`
        );
      }
    } else {
      console.log(`${this.name} deve sair do modo de defesa para atacar!`);
    }
  }

  changeStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defense += this.shieldPoints;
      console.log(`${this.name} entrou em modo de defesa!`);
    } else {
      this.stance = "attacking";
      this.defense -= this.shieldPoints;
      console.log(`${this.name} entrou em modo de ataque!`);
    }
  }
}

module.exports = Warrior;
