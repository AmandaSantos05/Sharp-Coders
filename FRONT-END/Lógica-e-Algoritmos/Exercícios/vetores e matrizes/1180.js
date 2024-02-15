let input = "10 /n 1 2 3 4 -5 6 7 8 9 10"
let lines = input.split("/n")

let N = parseInt(lines.shift())
let vetorX = lines[0].trim().split(" ").map(item => parseInt(item))

let menorValor = vetorX[0];
let posicao = 0;

for (let i = 1; i < N; i++) {
    let num = vetorX[i]

    if (num < menorValor) {
        menorValor = num;
        posicao = i
    }
}

console.log(`Menor valor: ${menorValor}`)
console.log(`Posicao: ${posicao}`)