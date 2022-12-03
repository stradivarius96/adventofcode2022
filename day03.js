const fs = require('fs');
let arr = fs.readFileSync('day03-input.txt').toString().split("\n")
let alphabet = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

let sum = 0
arr.forEach(row =>{
    let front = row.slice(0,row.length/2).split('')
    let back = row.slice(row.length/2).split('')

    let intersection = front.filter(element => back.includes(element))
    sum += alphabet.indexOf(intersection[0])
})

console.log("Part 1 Result: " + sum)

sum = 0
for (let i = 0; i < arr.length; i=i+3) {
    let first = arr[i].split('')
    let second = arr[i+1].split('')
    let third = arr[i+2].split('')

    let intersection = first.filter(element => second.includes(element)).filter(element => third.includes(element))

    sum += alphabet.indexOf(intersection[0])
}

console.log("Part 2 Result: " + sum)