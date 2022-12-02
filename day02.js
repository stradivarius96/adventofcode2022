const fs = require('fs');
let arr = [] 
fs.readFileSync('day02-input.txt').toString().split("\n").forEach(row => {arr.push(row.split(' '))});

let usValue = {'X': 1, 'Y': 2, 'Z' : 3}
let themValue = {'A': 1, 'B': 2, 'C' : 3}

let gameScores = []
for (let i = 0; i < arr.length; i++) {
    let us = usValue[arr[i][1]]
    let them = themValue[arr[i][0]]

    let game = 0
    switch (us-them) {
        case 0:
            game = 3
            break;
        case 1:
        case -2:
            game = 6
            break;
        case -1:
        case 2:
            game = 0
            break;
    }
    gameScores.push(us + game)
}
console.log("Part 1 Result: " + gameScores.reduce((a,b)=>a+b, 0))

gameScores = []
for (let i = 0; i < arr.length; i++) {
    let us = usValue[arr[i][1]]
    let them = themValue[arr[i][0]]

    let game = 0
    switch (us) {
        // lose
        case 1:
            game = 0 + (them == 1 ? 3 : (them - 1))

            break;

        // draw
        case 2:
            game = 3 + them
            break;

        // win
        case 3:
            game = 6 + (them == 3 ? 1 : (them + 1))
            break;
    }
    gameScores.push(game)
}
console.log("Part 2 Result: " + gameScores.reduce((a,b)=>a+b, 0))
