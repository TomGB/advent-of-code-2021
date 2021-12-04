const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input2.txt`, 'utf8').split('\n').filter(x => x)

const instructions = input.map(x => x.split(' '))

let depth = 0
let distance = 0
let aim = 0

instructions.map(([dir, x]) => {
    const num = parseInt(x)

    if (dir === 'up') {
        aim -= num
    } else if (dir === 'down') {
        aim += num
    } else {
        distance += num
        depth += aim * num
    }
})

console.log({depth, distance})

console.log(depth * distance)