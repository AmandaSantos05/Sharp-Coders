let entrada1 = '1 1 15.10';
let entrada2 = '2 1 15.10';

let peca1 = entrada1.split(" ")
let codigoPeca1 = parseInt(peca1[0])
let numeroPecas1 = parseInt(peca1[1])
let valorUntPeca1 = parseFloat(peca1[2])

let peca2 = entrada2.split(" ")
let codigoPeca2 = parseInt(peca2[0])
let numeroPecas2 = parseInt(peca2[1])
let valorUntPeca2 = parseFloat(peca2[2])

let valorAPagar = (numeroPecas1 * valorUntPeca1) + (numeroPecas2 * valorUntPeca2)
valorAPagar = parseFloat(valorAPagar)
console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2))
// console.log(valorAPagar)