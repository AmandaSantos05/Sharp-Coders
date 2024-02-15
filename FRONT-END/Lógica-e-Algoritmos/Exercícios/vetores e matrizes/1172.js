let lines = ["0", "-5", " 63", "0", "8", "-13", "45", "0", "6", "7"]
let vetorX = lines.map(item => Number(item))

for (let x = 0; x < vetorX.length; x++) {
    if (vetorX[x] <= 0) {
        vetorX[x] = 1
    }
    console.log(`X[${x}] = ${vetorX[x]}`)
}

