const fs = require('fs')

const clone = x => JSON.parse(JSON.stringify(x))
const log = x => console.log(x)
const print = x => console.log(x)
const p = x => console.log(x)

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8').trim().split('\n\n')

const bingoNumbers = input.shift().split(",")

const boards = input.map(board => board.split("\n").map(row => row.split(" ").filter(x => x).map(x => ({ value: x, selected: false }))))

const checkBoard = board => {
    const rowWin = board.find(row => 
        !row.find(item => !item.selected) // true if not this row
    )

    if (rowWin) {
        console.log('row win')
        return true
    }

    // check each column

    const colWin = board[0].find((x, i) => 
        !board.find(row => 
            !row[i].selected
        )
    )

    if (colWin) {
        console.log("col win")
        return true
    }
}

const part1 = () => {
    let winningBoard = null

    const winningNumber = bingoNumbers.find(x => {
        winningBoard = boards.find(board => 
            board.find(row => 
                row.find(item => {
                    if (item.value === x) {
                        item.selected = true
                        return checkBoard(board)
                    }
                })
            )
        )
    
        return winningBoard
    })
    
    // console.log(winningBoard)
    
    // console.log(winningNumber)
    
    const unselected = winningBoard.reduce((a, row) =>
        a + row.filter(item =>
            !item.selected
        ).reduce((rowA, item) => 
            rowA + parseInt(item.value)
        , 0)
    , 0)
    
    log(unselected * winningNumber)
}

module.exports = { part1 }