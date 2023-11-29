const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, hp, attack, defense, mp) {
    super(name, hp, attack, defense);
    this.mp = mp;
  }
  toAttack(target) {
    const damage = this.attack + this.mp - target.defense;
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
  }
  healing(target) {
    const heal = this.mp * 2;
    if (heal > 0) {
      target.hp += heal;
      console.log(
        `${this.name} usou cura em ${target.name} e curou ${heal} hp.\n${target.name} tem ${target.hp} pontos de vida restantes.`
      );
    } else {
      console.log(
        `${this.name} tentou usar cura em ${target.name}, mas a cura não funcionou.`
      );
    }
  }
}

module.exports = Mage;
