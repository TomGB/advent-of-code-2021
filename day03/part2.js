const fs = require('fs')

const clone = x => JSON.parse(JSON.stringify(x))

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n').filter(x => x)

const inputArray = input.map(x => x.split(''))

let gammaInput = clone(inputArray)

let epsilonInput = clone(inputArray)

let gammaString
let epsilonString

inputArray[0].map((x, i) => {
    const count = gammaInput.reduce((a, y) => {
        a += parseInt(y[i])
        return a
    }, 0)

    console.log(count)

    const keepBit = count < gammaInput.length / 2 ? '0' : '1'

    gammaInput = gammaInput.filter(y => {
        return y[i] == keepBit
    })


    if (gammaInput.length === 1) {
        gammaString = gammaInput[0].join('')
    }
})

inputArray[0].map((x, i) => {
    const count = epsilonInput.reduce((a, y) => {
        a += parseInt(y[i])
        return a
    }, 0)

    console.log(count)

    const keepBit = count < epsilonInput.length / 2 ? '1' : '0'
    epsilonInput = epsilonInput.filter(y => {
        return y[i] == keepBit
    })

    // console.log(epsilonInput)

    if (epsilonInput.length === 1) {
        epsilonString = epsilonInput[0].join('')
    }
})

// const gammaString = count.map(x => x < inputArray.length / 2 ? '0' : '1').join('')

console.log(gammaString)

console.log(epsilonString)


const gamma = parseInt(gammaString, 2 );

// const epsilonString = count.map(x => x < inputArray.length / 2 ? '1' : '0').join('')

const epsilon = parseInt(epsilonString, 2 );

console.log(gamma * epsilon)

// too high: 4135032