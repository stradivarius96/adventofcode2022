const fs = require('fs');

let signal = fs.readFileSync('day06-input.txt').toString()

let marker = 0
let i = 0

while (marker == 0) {
    if (new Set(signal.substring(i, i + 4)).size == 4) {
        marker = i + 4
    }
    i++
}

console.log("Part 1 Result: " + marker)

marker = 0
i = 0
while (marker == 0) {
    if (new Set(signal.substring(i, i + 14)).size == 14) {
        marker = i + 14
    }
    i++
}

console.log("Part 2 Result: " + marker)