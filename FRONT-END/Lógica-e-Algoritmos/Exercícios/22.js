let idade = 400
let dias = parseInt((idade % 365) % 30)
let meses = parseInt((idade % 365) / 30)
let anos = parseInt(idade / 365)


console.log(`${anos}:${meses}:${dias}`)