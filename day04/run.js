const { part1 } = require("./part1")
const { part2 } = require("./part2")

const [part, inputFile] = process.argv.slice(2);

if (!part || !inputFile) {
    console.log("yarn run [day] [fileName]")
    console.log("e.g. yarn run 1 input")
}

if (part === '1') {
    part1(inputFile)
}

if (part === '2') {
    part2(inputFile)
}