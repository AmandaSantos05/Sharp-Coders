let entrada = [7, -5, 6, -3.4, 4.6, 12]

let positivos = 0;
let total = 0;
for (let numero of entrada) {
    if (numero > 0) {
        positivos++;
        total += numero;
    }
}

let media = total / positivos

console.log(`${positivos} valores positivos`)
console.log(media)