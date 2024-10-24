// Ex. 1

function somaArray(arr) {

    /*

    let soma = 0;

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            soma += somaArray(arr[i]);
        } else if (typeof arr[i] === 'number') {
            soma += arr[i];
        }
    }
    return soma;

    */

    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc + somaArray(item);
        }
        if (typeof item === 'number') {
            return acc + item;
        }
    },0);

}

let array = [1, [3, 5, [7, 9], 10], [7,8]];
console.log(somaArray(array));

// Ex. 2

const composicao = (f, g) => {
    return function (x) {
        return f(g(x));
    }
}

function dobro(x) {
    return x * 2;
}

function quadrado(x) {
    return x * x;
}

let dobroQuadrado = composicao(dobro, quadrado);
console.log(dobroQuadrado(3));

// Ex. 3

function gerarSequencia(inicio, passo) {

    let valor = inicio - passo;

    return function () {
        valor += passo;
        return valor;
    };

}

let sequencia = gerarSequencia(2, 3);
console.log(sequencia());
console.log(sequencia());
console.log(sequencia());
console.log(sequencia());