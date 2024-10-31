// Ex. 1

let numeros = [5, 4, 3, 2, 1, 13 ,0]

function quadrado(array: Array<number>): number[] {
    
    let quadrados = [];

    for (let i = 0; i < array.length; i++) {
        // quadrados.push(array[i] * array[i]);
        quadrados.push(array[i] ** 2);
    }
    
    //let quadrados = array.map(n => n ** 2);
    return quadrados;
}

let novoArray = quadrado(numeros);
console.log(quadrado(numeros));
console.log(numeros);

// Ex. 2

type Produto = {
    nome: String;
    preco: number
}

let produtos = [
    { nome: "sabonete", preco: 2 },
    { nome: "xampu", preco: 5 },
    { nome: "pasta de dente", preco: 3 }
]

function aumentaPreco(produtos: Produto[]): Produto[] {

    return produtos.map( produto => {
        return {
            nome: produto.nome,
            preco: produto.preco * 1.1
        }
    })
}

console.log(produtos);
console.log(aumentaPreco(produtos));
console.log(produtos);

// Ex. 3

let maiorElemento = (array: number[]): number => {
    return array.reduce( (maior, numero) => 
        numero > maior ? numero : maior
    )
}

console.log(maiorElemento(numeros));