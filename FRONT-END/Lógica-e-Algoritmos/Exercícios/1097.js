let i = 1;
let j = 7;

while (i <= 9) {
    for (let k = 0; k < 3; k++) {
        console.log(`I=${i} J=${j}`)
        j--
    }
    i += 2;
    j += 5
}