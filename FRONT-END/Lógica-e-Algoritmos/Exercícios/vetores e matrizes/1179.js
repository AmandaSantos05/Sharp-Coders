let input = "1 /n 3 /n 4 /n -4 /n 2 /n 3 /n 8 /n 2 /n 5 /n -7 /n 54 /n 76 /n 789 /n 23 /n 98"
let lines = input.split("/n")

let array = lines.map(item => parseInt(item))
let par = [];
let impar = [];

for (let i = 0; i < 15; i++) {
    let num = array[i]

    if (num % 2 === 0) {
        par.push(num)

        if (par.length === 5) {
            for (let j = 0; j < 5; j++) {
                console.log(`par[${j}] = ${par[j]}`)
            }
            par = [];
        }

    } else {
        impar.push(num)

        if (impar.length === 5) {
            for (let j = 0; j < 5; j++) {
                console.log(`impar[${j}] = ${impar[j]}`)
            }
            impar = [];
        }
    }
}

for (let i = 0; i < impar.length; i++) {
    console.log(`impar[${i}] = ${impar[i]}`)
}

for (let i = 0; i < par.length; i++) {
    console.log(`par[${i}] = ${par[i]}`)
}

