const { expect } = require('@jest/globals')
const { run, checkForWin } = require('./part2')

test("checkForWin returns 'row win' for row", () => {
    const board = [
        [{ selected: true }, { selected: true }, { selected: true }],
        [{ selected: false }, { selected: false }, { selected: false }],
        [{ selected: false }, { selected: false }, { selected: false }],
    ]

    expect(checkForWin(board)).toBe("row win")
})

test("checkForWin returns 'col win' for column", () => {
    const board = [
        [{ selected: true }, { selected: false }, { selected: false }],
        [{ selected: true }, { selected: false }, { selected: false }],
        [{ selected: true }, { selected: false }, { selected: false }],
    ]

    expect(checkForWin(board)).toBe("col win")
})

beforeEach(() => {
    global.console = require('console')
})