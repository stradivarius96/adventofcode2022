const fs = require('fs');
let arr = []
fs.readFileSync('day09-input.txt').toString().split("\n").forEach(row => { arr.push(row.split(' ')) });

let positions = {}
let head = {x: 0,y: 0}
let tail = {x: 0,y: 0}

arr.forEach(move =>{
    switch (move[0]) {
        case "L":
            for (let i = 0; i < move[1]; i++){
                head.x--
                
                moveTail()
            }
            break;
        case "R":
            for (let i = 0; i < move[1]; i++){
                head.x++
                moveTail()
            }
            break;
        case "U":
            for (let i = 0; i < move[1]; i++){
                head.y++
                moveTail()
            }
            break;
        case "D":
            for (let i = 0; i < move[1]; i++){
                head.y--
                moveTail()

            }
            break;
    }
})

console.log(`Part one solution: ${Object.keys(positions).length}`)

function moveTail(){
    if (tail.x - head.x > 1){
        tail.x--
        if (tail.y != head.y){
            tail.y = head.y
        }
    }
    if (head.x - tail.x > 1){
        tail.x++
        if (tail.y != head.y){
            tail.y = head.y
        }
    }
    if (tail.y - head.y > 1){
        tail.y--
        if (tail.x != head.x){
            tail.x = head.x
        }
    }
    if (head.y - tail.y > 1){
        tail.y++
        if (tail.x != head.x){
            tail.x = head.x
        }
    }
    positions[JSON.stringify(tail)] = true
}