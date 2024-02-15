let casosDeTeste = "10 /n 10 C /n 6 R /n 15 S /n 5 C /n 14 R /n 9 C /n 6 R /n 8 S /n 5 C /n 14 R";
let linha1 = casosDeTeste.split("/n")


let qtdTestes = linha1.shift()
linha1 = linha1.map(item => item.trim().split(" "))
let totalCobaias = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < linha1.length; i++) {
    let qtd = Number(linha1[i][0])
    totalCobaias += qtd
    if (linha1[i][1] === "C") { coelhos += qtd }
    if (linha1[i][1] === "R") { ratos += qtd }
    if (linha1[i][1] === "S") { sapos += qtd }
}

let percentCoelhos = (coelhos / totalCobaias) * 100
let percentRatos = (ratos / totalCobaias) * 100
let percentSapos = (sapos / totalCobaias) * 100

console.log(`Total: ${totalCobaias} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${percentCoelhos.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percentRatos.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percentSapos.toFixed(2)} %`)