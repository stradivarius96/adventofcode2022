const fs = require('fs');
const _ = require('lodash')

let arr = fs.readFileSync('day04-input.txt').toString().split("\n")


let containsCount = 0
let overlapCount = 0

arr.map(row => {
    let [first,second] = row.split(',').map(instruction => { return instruction.split('-') })
    
    let firstRange = _.range(first[0],+first[1] + 1)
    let secondRange = _.range(second[0],+second[1] + 1)
    
    let union = _.union(firstRange,secondRange)

    // one instruction contains the other so union is the same length as one of the instructions
    if (union.length == firstRange.length || union.length == secondRange.length){
        containsCount++
    } 

    // if any overlap, length of union will be less than the total lengths
    if (union.length < firstRange.length + secondRange.length){
        overlapCount++
    } 
})

console.log("Part 1 Result: " + containsCount)

console.log("Part 2 Result: " + overlapCount)
