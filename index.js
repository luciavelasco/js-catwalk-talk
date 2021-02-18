
// Ash
// ...your function goes here: ashFunction
function ashFunction(string) {
    let result = {
        short: 0,
        medium: 0,
        long: 0
    }

    string.split(' ').forEach(word => {
        if (word.length <= 3) {
            result.short++
        } else if (word.length <= 5) {
            result.medium++
        } else {
            result.long++
        }
    })

    for(const [key, value] of Object.entries(result)) {
        if (value === 0) {
            delete result[key]
        }
    }

    return result
}

// Rayna
// ...your function goes here: raynaFunction
function raynaFunction(sentence) {
    let sentenceArray = sentence.split(' ')
    let wordCounts = {
        short: 0,
        medium: 0,
        long: 0
    }

    sentenceArray.forEach( (word) => {
        if(word.length <= 3) {
            wordCounts.short++
        } else if(word.length <= 5) {
            wordCounts.medium++
        } else {
            wordCounts.long++
        }
    })

    for (let property in wordCounts) {
        if(wordCounts[property] === 0) {
            delete wordCounts[property]
        }
    }

    return wordCounts
}

// Charlie
// ...your function goes here: charlieFunction

//top level function to call everything in order and return response
// need somewhere to keep track of results
// need to isolate each word and count the length
// bonus to remove spaces that are identified as 'words'
// compares word length and adds to correct result property
// adds to the result object

const charlieFunction = (sentance)=> {
    let result = {}
    let wordLengths = wordLength(sentance)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    return result
}

//old
// const createResponse = () => {
//   return {
//     short: 0,
//     medium: 0,
//     long: 0
//   }
// }

const wordLength = (str) => {
    return str.split(' ')
        .filter(sanitiseSpaces)
        .map(word => word.length)
}

const sanitiseSpaces = (word) => {
    return word !== ''
}

const editResult = (key, result) => {
    key in result ? result[key]++ : result[key] = 1
}

//old
// const editResult = (key, result) => {
//   result[key]++
// }

const incrementResult = (wordLength, result) => {
    if(wordLength <= 3) { editResult('short', result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}

// Lucia
// ...your function goes here: luciaFunction
const getCategory = length =>
    length < 4 ? 'short' :
        length < 6 ? 'medium' : 'long';

const luciaFunction = sentence =>
    sentence.split(' ')
        .map(word => getCategory(word.length))
        .reduce(
            // In production I would use `accumulator` instead of `prev`, and
            // `lengthCategory` instead of `cat`, but I didn't want it to be confusingly long
            (prev, cat) => ({
                ...prev,
                [cat]: cat in prev ? prev[cat] + 1 : 1
            }), // meow
            {}
        );


// Mike
// ...your function goes here: mikeFunction
function increment(output, key) {
    output[key] = ++output[key] || 1
    return output
}

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

module.exports = {
    ashFunction,
    charlieFunction,
    raynaFunction,
    luciaFunction,
    mikeFunction
}
