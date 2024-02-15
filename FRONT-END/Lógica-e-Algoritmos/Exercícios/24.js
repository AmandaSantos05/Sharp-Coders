let valorMonetario = 4.35

let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")
for (let nota of notas) {
    let qtdNotas = parseInt(valorMonetario / nota)
    console.log(`${qtdNotas} nota(s) de R$ ${nota}.00`)
    valorMonetario = valorMonetario % nota
}
console.log("MOEDAS:")
for (let moeda of moedas) {
    let qtdMoedas = parseInt(valorMonetario / moeda)
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    valorMonetario = parseFloat(valorMonetario % moeda).toFixed(2)
}
