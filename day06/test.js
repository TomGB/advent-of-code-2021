const { expect } = require('@jest/globals')
const { part1 } = require('./part1')
const { part2 } = require('./part2')

beforeEach(() => {
    global.console = require('console')
})

test("part 1 with sample input", () => {
    const expectedAnswer = 5934
    expect(part1("inputSample")).toEqual(expectedAnswer)
})

test("part 1 with challenge input", () => {
    const expectedAnswer = 350917
    expect(part1("input")).toEqual(expectedAnswer)
})

test("part 2 with sample input", () => {
    const expectedAnswer = 26984457539
    expect(part2("inputSample")).toEqual(expectedAnswer)
})

test("part 2 with challenge input", () => {
    const expectedAnswer = 1592918715629
    expect(part2("input")).toEqual(expectedAnswer)
})