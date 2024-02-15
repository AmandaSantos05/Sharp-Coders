let input = "S /n 1 2 3 /n 4 5 6 /n 7 8 9"
let lines = input.split("/n")

let operacao = lines.shift();
let soma = 0;
let qtd = 0;
let resultado = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const num = parseFloat(lines.shift());
        if (j > i) {
            soma += num
            qtd++;
        }
    }
}

if (operacao === 'S') {
    resultado = soma;
} else {
    resultado = soma / qtd;
}

console.log(resultado.toFixed(1))