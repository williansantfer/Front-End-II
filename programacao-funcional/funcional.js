let numeros = [4, 3, 2, 1];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

soma = numeros.reduce( (acumulador, numero) =>
    acumulador + numero, 0);

console.log(soma);

let pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

console.log(pares);

let ehPar = numero => numero % 2 === 0;

let parFuncional = numeros.filter(ehPar);

console.log(pares);