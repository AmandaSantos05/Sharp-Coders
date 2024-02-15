let input = ["-5", "0", "3", "-4"]
let n = 4
let x = input.map(item => Number(item))

for (let num = 0; num < n; num++) {
    if (x[num] % 2 == 0 && x[num] > 0) {
        console.log("EVEN POSITIVE");
    }
    else if (x[num] % 2 != 0 && x[num] > 0) {
        console.log("ODD POSITIVE");
    }
    else if (x[num] % 2 == 0 && x[num] < 0) {
        console.log("EVEN NEGATIVE");
    }
    else if (x[num] % 2 != 0 && x[num] < 0) {
        console.log("ODD NEGATIVE");
    } else {
        console.log("NULL");
    }
}