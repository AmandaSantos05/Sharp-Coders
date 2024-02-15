// Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso

let x = 8
let y = 0

while (y <= x) {
    if (y % 2 !== 0) {
        console.log(y)
    }
    y++
}