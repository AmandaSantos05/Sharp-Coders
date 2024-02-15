let lines = ['02/08/10', '']

let entrada = lines.shift().split("/")
let dia = entrada.shift()
let mes = entrada.shift()
let ano = entrada.shift()

console.log(`${mes}/${dia}/${ano}`);
console.log(`${ano}/${mes}/${dia}`);
console.log(`${dia}-${mes}-${ano}`);