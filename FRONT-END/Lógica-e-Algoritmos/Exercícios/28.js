// Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação

let lines = ["0", "-5", "6", "-4", "12"]

let array = lines.map(item => parseFloat(item))
let pares = 0;

for (let num of array) {
    if (num % 2 === 0) {
        pares++
    }
}

console.log(`${pares} valores pares`)