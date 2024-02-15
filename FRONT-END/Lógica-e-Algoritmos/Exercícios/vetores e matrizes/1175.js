let lines = ["0", "-5", "18", "56", "3", "15", "78", "4", "25", "78", "4", "12", "11", "78", "4", "25", "12", "44", "63", "230"]
let vetor1 = lines.map(item => item.trim().split(" "))
let vetor2 = []

// for (let i = 0; i < 20; i++) {
//     let x = parseFloat(lines.shift())
//     vetor1.push(x)
// }

for (let num = 19; num >= 0; num--) {
    vetor2.push(vetor1[num])
}

for (let i = 0; i <= 19; i++) {
    console.log(`N[${i}] = ${vetor2[i]}`)
}
