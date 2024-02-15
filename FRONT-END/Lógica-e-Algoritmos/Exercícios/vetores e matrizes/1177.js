let T = 3;
let N = 0;

for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${N}`)
    N++;
    if (N === T) {
        N = 0;
    }
}