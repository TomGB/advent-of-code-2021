const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const input = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split('\n')
    return input.map(line => {
        const [a, b] = line.split(" -> ")
        const [x1, y1] = a.split(',').map(x => parseInt(x))
        const [x2, y2] = b.split(',').map(x => parseInt(x))

        return { x1, y1, x2, y2 }
    })
}

const generateRange = (a, b) => {
    const aIsSmall = a < b
    const small = aIsSmall ? a : b
    const large = aIsSmall ? b : a

    const points = []

    for (let loc = small; loc <= large; loc++) {
        points.push(loc)
    }

    if (!aIsSmall) {
        points.reverse()
    }

    return points
}

const getMax = lines => {
    let maxY = 0
    let maxX = 0

    lines.forEach(({ x1, y1, x2, y2 }) => {
        if (x1 > maxX) {
            maxX = x1
        }
        if (x2 > maxX) {
            maxX = x2
        }
        if (y1 > maxX) {
            maxY = y1
        }
        if (y2 > maxX) {
            maxY = y2
        }
    })

    return { maxX, maxY }
}

const part2 = fileName => {
    const lines = parseInput(fileName)

    const { maxX, maxY } = getMax(lines)

    const grid = Array(maxX+1).fill().map(() => Array(maxY+1).fill().map(() => 0))

    const linesWithPoints = lines.map(({ x1, y1, x2, y2 }) => {
        let xPoints = generateRange(x1, x2)
        let yPoints = generateRange(y1, y2)

        if (yPoints.length === 1) {
            yPoints = Array(xPoints.length).fill(yPoints[0])
        }

        if (xPoints.length === 1) {
            xPoints = Array(yPoints.length).fill(xPoints[0])
        }

        return ({ xPoints, yPoints })
    })

    linesWithPoints.forEach(({ xPoints, yPoints}) => {
        xPoints.forEach((x, i) => {
            grid[x][yPoints[i]] ++
        })
    })

    let moreThanTwoCount = 0

    grid.map(row => {
        row.map(item => {
            if (item >= 2) {
                moreThanTwoCount ++
            }
        })
    })

    log(moreThanTwoCount)

    return(moreThanTwoCount)
}

module.exports = {
    part2,
}