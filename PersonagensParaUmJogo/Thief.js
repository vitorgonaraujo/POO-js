const Character = require("./Character.js");

class Thief extends Character {
  toAttack(target) {
    const damage = 2 * (this.attack - target.defense);
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
}

module.exports = Thief;
