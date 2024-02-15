let valores = "10.0 20.1 5.1"

valores = valores.split(" ")

let A = parseFloat(valores[0])
let B = parseFloat(valores[1])
let C = parseFloat(valores[2])

let delta = Math.pow(B, 2) - 4 * A * C

if (delta >= 0 && A > 0) {
    let R1 = (- B + Math.sqrt(delta)) / (2 * A)
    let R2 = (- B - Math.sqrt(delta)) / (2 * A)

    console.log(R1.toFixed(5))
    console.log(R2.toFixed(5))
} else {
    console.log("Impossivel calcular")
}