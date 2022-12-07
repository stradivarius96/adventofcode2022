const fs = require('fs');
let arr = fs.readFileSync('day07-input.txt').toString().split("\n")

let files = {}
let path = ''


for (let i = 0; i < arr.length; i++)
{ 
    let line = arr[i].split(' ')
    
    // instruction
    if (line[0] == "$"){

        // change dir
        if (line[1] == "cd"){
            if (line[2] == ".."){
                console.log(`${path}  ${path.lastIndexOf('/')}`)
                path = path.slice(0,path.lastIndexOf('/'))
            }
            else{
                if (line[2] != '/')
                path += '/' + line[2]
            }
        }

        // do nothing for ls
        else if (line[1] == "ls"){

        }
    }
    // do nothing for dir
    else if (line[0] == "dir"){

    }

    // file
    else{
        if (!files[path]){
            files[path] = 0
        }

        // push size to existing dir and all parent dirs
        files[path] += +line[0]
        
        let workingPath = path
        while (workingPath.slice(0,path.lastIndexOf('/') != '/')){
            workingPath = workingPath.slice(0,workingPath.lastIndexOf('/'))
            
            if (!files[workingPath]){
            files[workingPath] = 0
            }
                files[workingPath] += +line[0]
        }
    }
}
let total = Object.values(files).reduce((sum, key) => {if (key < 100000) { 
    sum += key 
    }
    return sum
},0)

console.log("Part 1 Result: " + total)


let freeTarget = files[""] - 40000000

let closestDir = Object.values(files).reduce((closest, key) => {
    if (key < closest && key > freeTarget) { 
        closest = key
    }
    return closest
})

console.log("Part 2 Result: " + closestDir)