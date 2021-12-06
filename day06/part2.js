const fs = require('fs')

const parseInput = (fileName) =>
    fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split(',').map(x => parseInt(x))

const runGeneration = fishCount => {
    const newFishCount = fishCount.shift()
    fishCount.push(newFishCount)
    fishCount[6] += newFishCount
    return fishCount
}

const run = fileName => {
    const input = parseInput(fileName)

    let fishCount = Array(9).fill().map((_, i) =>
        input.filter(x => x === i).length
    )

    const numGenerations = 256

    for (let index = 0; index < numGenerations; index++) {
        fishCount = runGeneration(fishCount)
    }

    return fishCount.reduce((a, x) => a + x, 0)
}

module.exports = {
    run,
}