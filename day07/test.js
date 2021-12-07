const { expect } = require('@jest/globals')
const { run: part1 } = require('./part1')
const { run: part2 } = require('./part2')

beforeEach(() => {
    global.console = require('console')
})

test("part 1 with sample input", () => {
    const expectedAnswer = 37
    expect(part1("inputSample")).toEqual(expectedAnswer)
})

test("part 1 with challenge input", () => {
    const expectedAnswer = 364898
    expect(part1("input")).toEqual(expectedAnswer)
})

test("part 2 with sample input", () => {
    const expectedAnswer = 168
    expect(part2("inputSample")).toEqual(expectedAnswer)
})

test("part 2 with challenge input", () => {
    const expectedAnswer = 104149091
    expect(part2("input")).toEqual(expectedAnswer)
})