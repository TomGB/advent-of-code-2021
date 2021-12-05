const { expect } = require('@jest/globals')
const { part1 } = require('./part1')
const { part2 } = require('./part2')

beforeEach(() => {
    global.console = require('console')
})

test("part 1 with sample input", () => {
    const expectedAnswer = 5
    expect(part1("inputSample")).toEqual(expectedAnswer)
})

test("part 1 with challenge input", () => {
    const expectedAnswer = 5280
    expect(part1("input")).toEqual(expectedAnswer)
})

test("part 2 with sample input", () => {
    const expectedAnswer = 12
    expect(part2("inputSample")).toEqual(expectedAnswer)
})

test("part 2 with challenge input", () => {
    const expectedAnswer = 16716
    expect(part2("input")).toEqual(expectedAnswer)
})