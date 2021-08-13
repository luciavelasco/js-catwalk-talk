
// Charlie
// ...your function goes here: charlieFunction

//top level function to call everything in order and return response
//need somewhere to keep track of results
//need to isolate each word and count the length
//bonus to remove the spaces that are identified as 'words'
//compares the word length and adds to correct property
//adds to the result object

//top level function to call everything in order and return response
const charlieFunction = (sentance) => {
    let result = {}
    let wordLengths = wordLength(sentance)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    return result
}

//need somewhere to keep track of results
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
//bonus to remove the spaces that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}

//adds to the result object
const editResult = (key, result) => {
    key in result ? result[key]++ : result[key] = 1
}

//compares the word length and adds to correct property
const incrementResult = (wordLength, result) => {
    if(wordLength <= 3) { editResult('short', result)}
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result)}
    if(wordLength >= 6) { editResult('long', result)}
}





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

// Lucia
// ...your function goes here: luciaFunction
const getWordCategory = length =>
    length <= 3 ? 'short' :
        length <= 5 ? 'medium' : 'long'

const luciaFunction = sentence =>
    sentence
        .split(' ')
        .map(word => getWordCategory(word.length))
        .reduce(
            (accumulator, category) => ({
                ...accumulator,
                [category]: accumulator[category] + 1 || 1
            }),
            {}
        )

module.exports = {
    charlieFunction,
    ashFunction,
    luciaFunction
}
