let input = ["14", "123", "10", "-25"]

let x = input.map(item => Number(item))
let n = 4
let sim = 0
let nao = 0
for (let i = 0; i < n; i++) {
    if (x[i] >= 10 && x[i] <= 20) {
        sim++
    } else {
        nao++
    }
}

console.log(`${sim} in`)
console.log(`${nao} out`)