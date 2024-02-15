let lines = ["0", "-5", "63", "-8.5"]
let vetor = []

for (let i = 0; i < 4; i++) {
    let x = parseFloat(lines.shift())
    vetor.push(x)
}

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] <= 10) {
        console.log(`A[${i}] = ${vetor[i].toFixed(1)}`)
    }
}
