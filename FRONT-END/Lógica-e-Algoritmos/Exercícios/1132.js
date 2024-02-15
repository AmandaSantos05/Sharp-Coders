let x = 200
let y = 100
let multiplos = 0;

if (y > x) {
    for (let i = x; i <= y; i++) {
        if (i % 13 != 0) {
            multiplos += i
        }
    }
} else {
    for (let i = y; i <= x; i++) {
        if (i % 13 != 0) {
            multiplos += i
        }
    }
}

console.log(multiplos)