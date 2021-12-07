const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split(',').map(x => parseInt(x))
    return input
}

const sum = arr => arr.reduce((a, x) => a + x, 0)

const mode = values =>
    Math.round(sum(values) / values.length)

const getDistances = (locations, digPos) => locations.map(x => {
    const distance = Math.abs(digPos - x)
    return (distance * (distance + 1)) / 2;
})

const run = fileName => {
    const input = parseInput(fileName)

    const digPos = mode(input)

    const distances = getDistances(input, digPos)
    const distancesLeft = getDistances(input, digPos - 1)
    const distancesRight = getDistances(input, digPos + 1)

    const totalFuel = sum(distances)
    const totalFuelLeft = sum(distancesLeft)
    const totalFuelRight = sum(distancesRight)

    return Math.min(totalFuel, totalFuelLeft, totalFuelRight)
}

module.exports = {
    run,
}