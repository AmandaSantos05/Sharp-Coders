let salario = 3002.00
let imposto = 0

if (salario > 0.00 && salario < 2000.00) {
    console.log("Isento")
} else if (salario < 3000.00) {
    imposto = (salario - 2000.00) * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
} else if (salario < 4500.00) {
    imposto = (salario - 3000) * 0.18 + 1000.00 * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
} else {
    imposto = (salario - 4500.00) * 0.28 + 1500.00 * 0.18 + 1000.00 * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
}