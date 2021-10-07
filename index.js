// Ash
// ...your function goes here: ashFunction
const ashFunction = (string) => {
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
//need somewhere to keep track of the results
//need to isolate each word and count the length
//bonus to remove space that are identified as 'words'
// compares word length and adds to correct result property
//adds to the result object

//////////

//top level function to call everything in order and return response
const charlieFunction = (sentance) => {
    let result = {}
    let wordLengths = wordLength(sentance)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    return result

}
//need somewhere to keep track of the results
//delete for v2
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

//adds to the result object
const editResult = (key, result) => {
    key in result ? result[key]++ : result[key] = 1
}

//bonus to remove space that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}
// compares word length and adds to correct result property
const incrementResult = (wordLength, result) => {
    if(wordLength <= 3) { editResult('short', result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}



// Lucia
// ...your function goes here: luciaFunction
const getWordCategory = length =>
    length <= 3 ? 'short' : length <= 5 ? 'medium' : 'long'

const luciaFunction = (phrase) => phrase
    .split(' ')
    .map(v => getWordCategory(v.length))
    .reduce(
        (accumulator, category) => ({
            ...accumulator,
            [category]: accumulator[category] + 1 || 1
        }),
        { }
    )

// Neal
// ...your function goes here: nealFunction
class StringProcessor {
    wordLengths(str) {
        const words = str.split(' ');
        return words.map(word => word.length);
    }
    countWordLengths(str) {
        const lengths = this.wordLengths(str);
        const counts = {
        }
        for (const len of lengths) {
            if (len <= 3) {
                counts['short'] = counts['short'] ? ++counts['short'] : 1;
            } else if (len <= 5) {
                counts['medium'] = counts['medium'] ? ++counts['medium'] : 1;
            } else {
                counts['long'] = counts['long'] ? ++counts['long'] : 1;
            }
        }
        return counts;
    }
}
const nealFunction = (str) => {
    // create an object that knows how to process a string
    const stringProcessor = new StringProcessor();
    // call its method to count lengths
    return stringProcessor.countWordLengths(str);
}

module.exports = {
    ashFunction,
    charlieFunction,
    luciaFunction,
    nealFunction
}
