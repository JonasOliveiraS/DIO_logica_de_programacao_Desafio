class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack() {
        if (this.tipo == "Guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo == "Mago") {
            this.ataque = "magia";
        } else if (this.tipo == "Ninja") {
            this.ataque = "shuriken";
        } else {
            this.ataque = "artes marciais";
        }
        console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${this.ataque}!`);
    }
}

let hero01 = new hero("Jonas", 30, "Monge")

hero01.attack()