enum TipoAnimal {
    BALEIA = 'baleia',
    ELEFANTE = 'elefante'
}

abstract class Animal {

    static quantidadeCriada = 0;

    constructor(
        private _tipo: String,
        private _nome: String,
        private _som: String) {}

    get tipo(): String {
        return this._tipo;
    }

    get nome(): String {
        return this._nome;
    }

    get som(): String {
        return this._som;
    }

    set tipo(tipo: TipoAnimal) {
        this._tipo = tipo;
    }

    set nome(nome: String) {
        this._nome = nome;
    }

    set som(som: String) {
        this._som = som;
    }

    abstract emitirSom(): void;

    abstract locomover(): void;

    abstract comer(): void;

    abstract informarTipo(): void;

    static getQuantidadeCriada() {
        console.log(Animal.quantidadeCriada);
        return Animal.quantidadeCriada;
    }

    static adicionaAnimal() {
        Animal.quantidadeCriada++;
    }
}

class Elefante extends Animal {

    constructor(nome: String) {
        super(TipoAnimal.ELEFANTE, nome, 'fuumm uuuuh');
        Animal.adicionaAnimal();
    }

    emitirSom() {
        console.log(`${this.nome} faz ${this.som}.`);
    }

    locomover() {
        console.log(`${this.nome} anda.`);
    }

    comer() {
        console.log(`${this.nome} come folhas.`);
    }

    informarTipo() {
        console.log(`${this.nome} é um ${this.tipo}.`)
    }
}

let e = new Elefante('Bob');

e.emitirSom();
e.comer();
e.locomover();
e.informarTipo();

/*

class Baleia extends Animal {

    constructor(nome) {
        super();
        this.tipo = 'Baleia';
        this.nome = nome;
        this.som = 'uuh uuh';
        Animal.adicionaAnimal();
    }

    emitirSom() {
        console.log(`${this.nome} faz ${this.som}.`);
    }

    locomover() {
        console.log(`${this.nome} nada.`);
    }

    comer() {
        console.log(`${this.nome} come plâncton.`);
    }

    informarTipo() {
        console.log(`${this.nome} é uma ${this.tipo}.`);
    }
}

let b = new Baleia('Jurema');

b.emitirSom();
b.comer();
b.locomover();
b.informarTipo();

Animal.getQuantidadeCriada();

*/