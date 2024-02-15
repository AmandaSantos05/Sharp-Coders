let lines = ["1", "50", "65", "3", "7", "800", "1534", "21", "49", "310"]
let entrada = lines.map(item => parseInt(item))
let maior = entrada[0];
let posMaior = 1
let x;
for (let i = 0; i < 10; i++) {
    x = entrada[i]
    if (x > maior) {
        maior = x;
        posMaior = i + 1
    }
}
console.log(maior)
console.log(posMaior)