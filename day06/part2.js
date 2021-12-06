const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split(',').map(x => parseInt(x))
    return input
}

const runGeneration = fishCount => {
    const newFishCount = fishCount.shift()

    fishCount.push(newFishCount)

    fishCount[6] += newFishCount

    return fishCount
}

const part2 = fileName => {
    const input = parseInput(fileName)

    let fishCount = Array(9).fill().map((_, i) => {
        return input.filter(x => x === i).length
    })

    const numGenerations = 256

    for (let index = 0; index < numGenerations; index++) {
        fishCount = runGeneration(fishCount)
    }

    const numFishes = fishCount.reduce((a, x) => a + x, 0)

    log(numFishes)

    return numFishes
}

module.exports = {
    part2,
}