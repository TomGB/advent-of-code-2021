const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split('\n')
    return input
}

const part1 = fileName => {
    const input = parseInput(fileName)
}

module.exports = {
    part1,
}