class Character {
    constructor(name, hp, attack, defense) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
    }
    toAttack(target) {
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
            }
        }
        
        
        module.exports = Character;