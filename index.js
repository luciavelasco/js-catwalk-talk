
// Ash
// ...your function goes here: ashFunction
const ashFunction = string => {
    let result = {}

    string.split(' ').forEach(word => {
        if (word.length <= 3) {
            result.short = result.short + 1 || 1
        } else if (word.length <= 5) {
            result.medium = result.medium + 1 || 1
        } else {
            result.long = result.long + 1 || 1
        }
    })

    return result
}
// Charlie
// ...your function goes here: charlieFunction

//top level function to call everything in order and return response
const charlieFunction = (sentence) => {
    // v2 - uses a blank obj
    let result = {}
    let wordLengths = wordLength(sentence)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    return result
}
//need somewhere to keep track of results
//v2 - dont need it any more
// const createResponse = () => {
//   return {
//     short: 0,
//     medium: 0,
//     long: 0
//   }
// }
//need to isolate each word and count the length
const wordLength = (str) => {
    return str.split(' ')
        .filter(sanitiseSpaces)
        .map(word => word.length)
}
// bonus to remove spaces that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}
// compares word length and adds to correct result property
const incrementResult = (wordLength, result) => {
    if(wordLength <= 3) { editResult('short', result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}
//adds to the result object
const editResult = (key, result) => {
    //v2 - makes a ternary to only add when need to
    key in result ? result[key]++ : result[key] = 1
}



// Lucia
// ...your function goes here: luciaFunction
const getLengthCategory = length =>
    length <= 3 ? 'short' :
        length <= 5 ? 'medium' : 'long';

const luciaFunction = sentence =>
    sentence.split(' ')
        .map(word => getLengthCategory(word.length))
        .reduce(
            (accumulator, category) => ({
                ...accumulator,
                [category]: accumulator[category] + 1 || 1
            }),
            {}
        )

// Mike
// ...your function goes here: mikeFunction
function mikeFunction(words) {
    words = words.split(' ')
    let output = {}
    words.forEach(word => {
        if (word.length <= 3) {
            output = increment(output, 'short')
        } else if (word.length < 6) {
            output = increment(output, 'medium')
        } else {
            output = increment(output, 'long')
        }
    })
    return output
}

function increment(output, key) {
    output[key] = ++output[key] || 1
    return output
}

module.exports = {
    ashFunction,
    charlieFunction,
    luciaFunction,
    mikeFunction
}
