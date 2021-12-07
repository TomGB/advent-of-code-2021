const { run: part1 } = require("./part1")
const { run: part2 } = require("./part2")

const [part, inputFile] = process.argv.slice(2);

if (!part || !inputFile) {
    console.log("node run [day] [fileName]")
    console.log("e.g. node run 1 input")
}

if (part === '1') {
    part1(inputFile)
}

if (part === '2') {
    part2(inputFile)
}