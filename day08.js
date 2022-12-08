const fs = require('fs');
let arr = []
fs.readFileSync('day08-input.txt').toString().split("\n").forEach(row => { arr.push(row.split('')) });

let visibleCount = 0
let valCount = 0
// for each row, find maximum. check if that is maximum for column too. if yes, increment
arr.forEach((row, rowIndex) => {
    row.forEach((val, valIndex) => {
        let visible = false

        // visible left
        if ((valIndex == 0 || val > Math.max(...(row.slice(0, valIndex))))) {
            visible = true
        }

        //visible right
        if (valIndex == row.length - 1 || val > Math.max(...(row.slice(valIndex + 1)))) {
            visible = true
        }

        if (visible == false) {
            let column = arr.map(value => { return value[valIndex] })

            // visible top
            if ((rowIndex == 0 || val > Math.max(...(column.slice(0, rowIndex))))) {
                visible = true
            }

            //visible bottom
            if (rowIndex == arr.length - 1 || val > Math.max(...(column.slice(rowIndex + 1)))) {
                visible = true
            }
        }

        if (visible) {
            visibleCount++
        }
        valCount++
    })
})
console.log(`Part 1 Result: ${visibleCount}`)



let highScore = 0

arr.forEach((row, rowIndex) => {
    row.forEach((val, valIndex) => {
        let score = 0

        let left = 0
        // border has score of 0
        if ((valIndex == 0)) {
            score = score * left
        }

        else {
            left = row.slice(0, valIndex).reverse().findIndex(element => {
                return parseInt(element) >= parseInt(val)
            })
            if (left == -1) {
                score = row.slice(0, valIndex).length
                left = row.slice(0, valIndex).length
            } else {
                left++
                score = left
            }
        }

        //visible right
        // border has score of 0
        let right = 0

        if ((valIndex == row.length - 1)) {
            score = score * right
        }

        else {
            right = row.slice(valIndex + 1).findIndex(element => {
                return parseInt(element) >= parseInt(val)
            })
            if (right == -1) {
                score = score * row.slice(valIndex + 1).length
                right = row.slice(valIndex + 1).length
            } else {
                right++
                score = score * right
            }
        }

        let column = arr.map(value => { return value[valIndex] })


        // border has score of 0
        let top = 0
        if ((rowIndex == 0)) {
            score = score * top
        }

        else {
            top = column.slice(0, rowIndex).reverse().findIndex(element => {
                return parseInt(element) >= parseInt(val)
            })
            if (top == -1) {
                score = score * rowIndex
                top = rowIndex
            } else {

                top++
                score = score * top
            }
        }

        //visible bottom
        let bottom = 0
        // border has score of 0
        if ((rowIndex == arr.length - 1)) {
            score = score * bottom
        }

        else {
            bottom = column.slice(rowIndex + 1).findIndex(element => {
                return parseInt(element) >= parseInt(val)
            })
            if (bottom == -1) {
                score = score * (column.slice(rowIndex + 1)).length 
                bottom = column.slice(rowIndex + 1).length 
            } else {
                bottom++
                score = score * bottom
            }
        }


        if (score > highScore) {
            // console.log(`Score ${score} ${left} ${right} ${top} ${bottom} ${val} ${rowIndex} ${valIndex}`)
            highScore = score
        }
    })
})
console.log(`Part 2 Result: ${highScore}`)