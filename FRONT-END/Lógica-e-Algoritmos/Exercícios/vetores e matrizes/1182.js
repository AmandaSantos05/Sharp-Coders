var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const cont = parseInt(lines.shift());
const operacao = lines.shift();

let soma = 0, resultado = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const num = parseInt(lines.shift());
        if (j === cont) {
            soma += num;
        }
    }
}

if (operacao === 'S') {
    resultado = soma;
} else {
    resultado = soma / 12;
}

console.log(resultado.toFixed(1));