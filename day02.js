const fs = require('fs');
let arr = [] 
fs.readFileSync('day02-input.txt').toString().split("\n").forEach(row => {arr.push(row.split(' '))});

let usValue = {'X': 1, 'Y': 2, 'Z' : 3}
let themValue = {'A': 1, 'B': 2, 'C' : 3}


for (let i = 1; i < arr.length; i++) {
    let us = usValue[arr[i][1]]
    let them = themValue[arr[i][0]]

    let game = 0
    switch ((us-them)%3) {
        case: 0
            game = 3
            break;
        case: 1
            game = 6
            break;
        case: 2
            game = 0
            break;
    }
    let score = us + game
}
console.log("Part 1 Result: " + mostCalories)

// shifted to array of all totals from original solution
currentCalories = 0
let totals = []
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > 0){
        currentCalories += parseInt(arr[i])
    }else{
        totals.push(currentCalories)
        currentCalories = 0
    }
}
totals = totals.sort((a,b) => b-a)


console.log("Part 2 Result: " + (totals[0] + totals[1] + totals[2]))