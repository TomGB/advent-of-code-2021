const fs = require('fs')
const util = require('util')
const colors = require('colors/safe')

const log = (...x) => console.log(...x.map(item => util.inspect(item, false, null, true /* enable colors */)))

const parseInput = (fileName) => {
    const [bingoString, ...boardsStrings] = fs.readFileSync(`${__dirname}/${fileName}.txt`, 'utf8').trim().split('\n\n')

    const bingoNumbers = bingoString.split(",")
    
    const boards = boardsStrings.map(board =>
        board.split("\n").map(row =>
            row.split(" ")
            .filter(x => x)
            .map(x =>
                ({ value: x, selected: false })
            )
        )
    )

    return { bingoNumbers, boards }
}

const checkForWin = board => {
    const rowWin = board.some(row => 
        row.every(item => item.selected)
    )

    if (rowWin) return "row win"

    const colWin = board[0].some((_, i) => 
        board.every(row => row[i].selected)
    ) ? "Col win" : false

    if (colWin) return "col win"
}

const findMatch = (board, bingoNumber) => {
    board.find(row => 
        row.find(item => {
            if (item.value === bingoNumber) {
                item.selected = true
                return true
            }
        })
    )
}

const sumUnselected = board =>
    board.reduce((a, row) =>
        a + row.filter(item =>
            !item.selected
        ).reduce((rowA, item) => 
            rowA + parseInt(item.value)
        , 0)
    , 0)

const print = board => {
    console.log('')
    board.map(row => {
        console.log(
            row.map(item => 
                (item.selected ? colors.red(item.value.padStart(2, ' ')) : item.value.padStart(2, ' '))
            ).join(' ')
        )
    })
}

const part2 = fileName => {
    const { bingoNumbers, boards } = parseInput(fileName)
    
    let boardsLeft = boards
    let lastBoard = null
    
    const winningNumber = bingoNumbers.find(bingoNumber => {
        boardsLeft = boardsLeft.filter(board => {
            findMatch(board, bingoNumber)

            const res = checkForWin(board)
            if (res) {
                console.log(res)
            }

            return !res
        })

        boardsLeft.map(print)
    
        if (boardsLeft.length === 1) {
            lastBoard = boardsLeft[0]
        }
    
        return boardsLeft.length === 0
    })
    
    const unselectedSum = sumUnselected(lastBoard)
    
    log(unselectedSum * winningNumber)
}

module.exports = {
    part2,
    parseInput,
    checkForWin,
    findMatch,
    sumUnselected,
}