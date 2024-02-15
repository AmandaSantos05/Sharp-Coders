let input = "3 /n 0 /n 4 /n 2"
let lines = input.split("/n").map(item => parseInt(item))

let T = lines.shift()

let numA = 0
let numB = 1
let numC = 0
let fibonacci = []

fibonacci[0] = numA, fibonacci[1] = numB

for (let cont = 1; cont <= T; cont++) {
    numC = numA + numB
    fibonacci.push(numC)
    numA = numB
    numB = numC
}

for (let i = 1; i <= T; i++) {
    let pos = lines.shift();
    console.log(`Fib(${pos}) = ${fibonacci[pos]}`)
}