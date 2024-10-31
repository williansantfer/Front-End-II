"use strict";
// // Ex. 1
// let numeros = [5, 4, 3, 2, 1, 13, 0]
// function quadrado(array) {
//     /*
//     let quadrados = [];
//     for (let i = 0; i < array.length; i++) {
//         // quadrados.push(array[i] * array[i]);
//         quadrados.push(array[i] ** 2);
//     }
//     */
//     let quadrados = array.map(n => n ** 2);
//     return quadrados;
// }
// console.log(numeros);
// console.log(quadrado(numeros));
// console.log(numeros);
// // Ex. 2
// let produtos = [
//     { nome: "sabonete", preco: 2 },
//     { nome: "xampu", preco: 5 },
//     { nome: "pasta de dente", preco: 3 }
// ]
// function aumentaPreco(produtos) {
//     return produtos.map( produto => {
//         return {
//             nome: produto.nome,
//             preco: produto.preco * 1.1
//         }
//     })
// }
// console.log(produtos);
// console.log(aumentaPreco(produtos));
// console.log(produtos);
// // Ex. 3
// let maiorElemento = function(array) {
//     return array.reduce( (maior, numero) => 
//         numero > maior ? numero : maior
//     )
// }
// console.log(maiorElemento(numeros));
// // Ex. 4
// function somaParesAoQuadrado(array) {
//     return array
//         .filter( numero => numero % 2 === 0)
//         .map( numero => numero ** 2)
//         .reduce( ( soma, numero) => soma + numero);
// }
// console.log(somaParesAoQuadrado(numeros));
// // Ex. 5
// let palavras = ['banana', 'casa', 'amora', 'maçã'];
// function stringsMaiusculas(array) {
//     return array
//         .filter( palavra => palavra.length >= 5)
//         .map( palavra => palavra.toUpperCase());
// }
// console.log(stringsMaiusculas(palavras));
// // Ex. 6
// function incrementarPor(quantidade) {
//     return valor => valor + quantidade;
// }
// let incrementarCinco = incrementarPor(5);
// console.log(incrementarCinco(10));
// // Ex. 7
// function fibonacci(n) {
//     let cache = {};
//     function fib(n) {
//         if (n in cache) {
//             return cache[n];
//         }
//         if (n <= 1) {
//             return n;
//         }
//         cache[n] = fib(n - 1) + fib(n - 2);
//         return cache[n];
//     }
//     return fib(n);
// }
// const fib = fibonacci;
// console.log(fib(3));
// console.log(fib(6));
// console.log(fib(8));
// console.log(fib(8));
// // Ex. 8
// function potencia() {
//     let cache = {};
//     return function exp(base, expoente) {
//         let chave = `${base},${expoente}`;
//         if (chave in cache) {
//             return cache[chave];
//         }
//         if (expoente === 0) {
//             return 1;
//         }
//         cache[chave] = base * exp(base, expoente - 1);
//         return cache[chave];
//     }
// }
// const pow = potencia();
// console.log(pow(2,4));
// console.log(pow(3,3));
// console.log(pow(3,3));
