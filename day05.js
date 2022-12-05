const fs = require('fs');
let arr = fs.readFileSync('day05-input.txt').toString().split("\n")

let stacks = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": []
}

// iterate through the initial stacks map portion of the input
// the "top" of the stack is the front of the array

for (let j = 0; j < 8; j++) {         // 8 rows of instructions
    let row = arr[j].split('')
    for (let i = 0; i < 9; i++) {     // 9 stacks to fill
        if (row[i * 4 + 1] != ' ') {  // crate every 4 characters
            stacks[i + 1].push(row[i * 4 + 1])
        }
    }
}

// iterate through the instructions portion of the input
for (let k = 10; k < arr.length; k++) {

    let row = arr[k].split(' ')
    for (let l = 0; l < row[1]; l++) {
        stacks[row[5]].unshift(stacks[row[3]].shift())
    }
}

let part1 = Object.keys(stacks).reduce((acc, key) => {
    return acc + stacks[key][0]
}, '')

console.log("Part 1 Result: " + part1)


stacks = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": []
}

// iterate through the initial stacks map portion of the input
// the "top" of the stack is the front of the array

for (let j = 0; j < 8; j++) {         // 8 rows of instructions
    let row = arr[j].split('')
    for (let i = 0; i < 9; i++) {     // 9 stacks to fill
        if (row[i * 4 + 1] != ' ') {  // crate every 4 characters
            stacks[i + 1].push(row[i * 4 + 1])
        }
    }
}

// iterate through the instructions portion of the input
for (let k = 10; k < arr.length; k++) {
    let row = arr[k].split(' ')
    let queue = []
    for (let l = 0; l < row[1]; l++) {
        queue.push(stacks[row[3]].shift())
    }
    stacks[row[5]].unshift(...queue)
}

let part2 = Object.keys(stacks).reduce((acc, key) => {
    return acc + stacks[key][0]
}, '')

console.log("Part 2 Result: " + part2)