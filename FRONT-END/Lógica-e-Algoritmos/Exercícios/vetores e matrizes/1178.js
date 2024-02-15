let X = 200.0000

for (let i = 0; i < 100; i++) {
    let numFormat = X.toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false })
    console.log(`N[${i}] = ${numFormat}`)
    X /= 2.0

}

