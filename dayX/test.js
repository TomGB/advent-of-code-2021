const { expect } = require('@jest/globals')
const { run: part1 } = require('./part1')
const { run: part2 } = require('./part2')

beforeEach(() => {
    global.console = require('console')
})

test("part 1", () => {
    const expectedAnswer = undefined
    expect(part1("inputSample")).toEqual(expectedAnswer)
})

test("part 2", () => {
    const expectedAnswer = undefined
    expect(part2("inputSample")).toEqual(expectedAnswer)
})