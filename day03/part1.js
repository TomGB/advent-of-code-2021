const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n').filter(x => x)

const inputArray = input.map(x => x.split(''))

const count = inputArray[0].map((x, i) => {
    return inputArray.reduce((a, y) => {
        console.log(y[i])
        a += parseInt(y[i])
        return a
    }, 0)
})

const gammaString = count.map(x => x < inputArray.length / 2 ? '0' : '1').join('')

const gamma = parseInt(gammaString, 2 );

const epsilonString = count.map(x => x < inputArray.length / 2 ? '1' : '0').join('')

const epsilon = parseInt(epsilonString, 2 );

console.log(gamma * epsilon)