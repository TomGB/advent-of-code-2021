const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n').filter(x => x)

const instructions = input.map(x => x.split(' '))

let depth = 0
let distance = 0

instructions.map(([dir, x]) => {
    const num = parseInt(x)

    if (dir === 'up') {
        depth -= num
    } else if (dir === 'down') {
        depth += num
    } else {
        distance += num
    }
})

console.log({depth, distance})

console.log(depth * distance)