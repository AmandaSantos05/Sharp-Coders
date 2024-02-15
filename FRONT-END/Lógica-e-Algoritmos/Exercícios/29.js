// Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, 
// quantos valores digitados foram ímpares, quantos valores digitados foram positivos 
// e quantos valores digitados foram negativos

let lines = ["6", "0", "3", "-4", "12"]

let array = lines.map(item => parseInt(item))

let pares = 0; let impares = 0; let positivos = 0; let negativos = 0

for (let num = 0; num < 5; num++) {
    if (array[num] < 1) { negativos++ }

    if (array[num] > 0) { positivos++ }

    if (array[num] % 2 === 0) { pares++ }

    if (array[num] % 2 !== 0) { impares++ }
}

console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)