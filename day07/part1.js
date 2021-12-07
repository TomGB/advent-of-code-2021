const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split(',').map(x => parseInt(x))
    return input
}

const median = values => {
    if (values.length === 0) throw new Error("No inputs");

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

const run = fileName => {
    const input = parseInput(fileName)

    const medianPos = median(input)

    const distances = input.map(x =>
        Math.abs(medianPos - x)
    )

    return distances.reduce((a, x) => a + x, 0)

}

module.exports = {
    run,
}