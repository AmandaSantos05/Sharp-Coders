let tempo = 140153

let horas = parseInt(tempo / 3600)

let minutos = parseInt((tempo % 3600) / 60)

let segundos = parseInt((tempo % 3600) % 60)

console.log(`${horas}:${minutos}:${segundos}`)