let input = 576

const notas = [100, 50, 20, 10, 5, 2, 1]

console.log(input)

for (let nota of notas) {
    let qtdNotas = input / nota
    console.log(`${qtdNotas} nota (s) de R$ ${nota},00`)
    input = input % nota
}