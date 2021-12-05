const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split('\n')
    return input.map(line => {
        const regexpSize = /(\d+),(\d+) -> (\d+),(\d+)/;
        const [_, x1, y1, x2, y2] = line.match(regexpSize).map(x => parseInt(x));
        return { x1, y1, x2, y2 }
    })
}

const generateRange = (a, b) => {
    const small = Math.min(a, b)
    const large = Math.max(a, b)

    const points = []

    for (let loc = small; loc <= large; loc++) {
        points.push(loc)
    }

    if (a >= b) {
        points.reverse()
    }

    return points
}

const getMax = lines => {
    const xVals = lines.flatMap(({ x1, x2 }) => [x1, x2])
    const yVals = lines.flatMap(({ y1, y2 }) => [y1, y2])

    return {
        maxX: Math.max(...xVals),
        maxY: Math.max(...yVals),
    }
}

const part2 = fileName => {
    const lines = parseInput(fileName)

    const { maxX, maxY } = getMax(lines)

    const grid = Array(maxX+1).fill().map(() => Array(maxY+1).fill().map(() => 0))

    lines.map(({ x1, y1, x2, y2 }) => {
        let xPoints = generateRange(x1, x2)
        let yPoints = generateRange(y1, y2)

        if (yPoints.length === 1) {
            yPoints = Array(xPoints.length).fill(yPoints[0])
        }

        if (xPoints.length === 1) {
            xPoints = Array(yPoints.length).fill(xPoints[0])
        }

        xPoints.forEach((x, i) => {
            grid[x][yPoints[i]] ++
        })
    })

    const moreThanTwoCount = grid.flat().filter(x => x >= 2).length

    log(moreThanTwoCount)

    return(moreThanTwoCount)
}

module.exports = {
    part2,
}