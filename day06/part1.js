const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split(',').map(x => parseInt(x))
    return input
}

const runGeneration = population => {
    return population.flatMap(x => {
        if (x === 0) {
            return [6, 8]
        }
        newX = x - 1
        return [newX]
    })
}

const part1 = fileName => {
    let input = parseInput(fileName)

    const numGenerations = 80

    for (let index = 0; index < numGenerations; index++) {
        input = runGeneration(input)
    }

    log(input.length)

    return input.length
}

module.exports = {
    part1,
}