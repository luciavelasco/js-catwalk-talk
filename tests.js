const functionsToTest = require("./index.js")

const runTest = (getWordLengths, functionName) => {
    let count;
    console.log(`    EXERCISE 1: ${functionName} returns short, medium and long words for a single sentence.`)
    count = getWordLengths("What a great day for an enormous picnic in my garden")
    if (typeof count !== 'object') throw new Error("Invalid return value. Must be object.")
    "short" in count &&
    "medium" in count &&
    "long" in count &&
    count.short === 6 && count.medium === 2 && count.long === 3 ?
        console.log("\x1b[1m\x1b[5m\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m", "    PASS") :
        console.warn("\x1b[31m%s\x1b[0m", "    FAIL")
    /*
      {
      short: 6,
      medium: 2,
      long: 3
      }
     */

    console.log(`    EXERCISE 2: ${functionName} does not return categories with count of 0`)
    count = getWordLengths("Palaver over nothing")
    "short" in count === false &&
    "medium" in count &&
    "long" in count &&
    count.medium === 1 && count.long === 2 ?
        console.log("\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m", "    PASS") :
        console.warn("\x1b[31m%s\x1b[0m", "    FAIL")
    /*
      {
      medium: 1,
      long: 2
      }
     */

    console.log(`    EXERCISE 3: ${functionName} ignores punctuation when counting lengths`)
    count = getWordLengths("Hello! Hello!")
    "short" in count === false &&
    "medium" in count &&
    "long" in count === false &&
    count.medium === 2 ?
        console.log("\x1b[1m\x1b[5m\x1b[32m%s\x1b[0m", "    PASS") :
        console.warn("\x1b[31m%s\x1b[0m", "    FAIL")
    /*
      {
      medium: 2
      }
     */
}

// run tests on each function exported from index
const keys = Object.keys(functionsToTest)
keys.forEach(functionName => {
    console.log('\n TESTING:', functionName)
    runTest(functionsToTest[functionName], functionName)
})
