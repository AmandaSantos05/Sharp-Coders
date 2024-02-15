let input = ""
let lines = input.split("/n")

const [line, character] = lines.splice(0, 2);
let soma = 0;
let qtd = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const num = parseFloat(lines.shift());

        if (i === parseInt(line)) {
            qtd++;
            soma += num;
        }
    }
}
const resultado = character.toUpperCase() == 'S' ? soma.toFixed(1) : (soma / qtd).toFixed(1);

console.log(resultado);