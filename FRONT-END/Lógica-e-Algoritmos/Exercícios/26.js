let input = ["7", "-5", "6", "-3.4", "4.6", "12"]
// let array = lines.map(item => parseFloat(item))
let positivos = 0;
for (let numero of input) {
    if (numero > 0) {
        positivos++;
    }
}
console.log(positivos)