const fs = require('fs');
let arr = fs.readFileSync('day01-input.txt').toString().split("\n");

// loop through, only store highest total
let mostCalories = 0
let currentCalories = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > 0){
        currentCalories += parseInt(arr[i])
    }else{
        if (mostCalories < currentCalories){
            mostCalories = currentCalories
        }
        currentCalories = 0
    }
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