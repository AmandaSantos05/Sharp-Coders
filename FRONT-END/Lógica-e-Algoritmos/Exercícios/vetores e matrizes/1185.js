let input = "S /n 26.9 27.2 28.7 -29.1 30.5 /n 34.2 33.2 32.8 31.2 10.1 /n 11.2 12.2 -13.7 14.2 15.2 /n 16.2 17.2 18.2 19.2 20.3 /n 21.2 22.1 23.2 24.2 25.2"
let lines = input.split("/n")

let operacao = lines.shift();
let matriz = lines.map(item => item.trim().split(" ").map(num => parseFloat(num)))

let soma = 0;
let qtd = 0;
let resultado = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const num = parseFloat(lines.shift());
        if (i < 11 - j) {
            soma += num;
            qtd++;
        }
    }
}

if (operacao === 'S') {
    resultado = parseFloat(soma);
} else {
    resultado = parseFloat(soma / qtd);
}

console.log(resultado.toFixed(1));

//        [26, 27, 28, 29, 30],
// //     [34, 33, 32, 31, 10],
// //     [11, 12, 13, 14, 15],
// //     [16, 17, 18, 19, 20],
// //     [21, 22, 23, 24, 25]