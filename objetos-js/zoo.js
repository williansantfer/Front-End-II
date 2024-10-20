class Animal {

    #tipo;
    #nome;
    #som;
    static quantidadeCriada = 0;

    constructor() {
        if (new.target === Animal) {
            throw new Error('A classe Animal não pode ser instanciada.');
        }
    }

    get tipo() {
        return this.#tipo;
    }

    get nome() {
        return this.#nome;
    }

    get som() {
        return this.#som;
    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set som(som) {
        this.#som = som;
    }

    emitirSom() {
        throw new Error('Este método deve ser implementado!');
    }

    locomover() {
        throw new Error('Este método deve ser implementado!');
    }

    comer() {
        throw new Error('Este método deve ser implementado!');
    }

    informarTipo() {
        throw new Error('Este método deve ser implementado!');
    }

    static getQuantidadeCriada() {
        console.log(Animal.quantidadeCriada);
        return Animal.quantidadeCriada;
    }

    static adicionaAnimal() {
        Animal.quantidadeCriada++;
    }
}

class Elefante extends Animal {

    constructor(nome) {
        super();
        this.tipo = 'Elefante';
        this.nome = nome;
        this.som = 'fuumm uuuuh';
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