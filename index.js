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
            result.long = result.long + 1  || 1
        }
    })

    return result
}
// Charlie
// ...your function goes here: charlieFunction

//TOP level function to call everything in order and return response
//need somewhere to keep track of results
//need to isolate each word and count the length
//bonus to remove spaces that are identified as 'words'
//compares word length and adds to correct result property
//adds to the result object


//TOP level function to call everything in order and return response
const charlieFunction = (sentance) => {
    //let result = createResponse()
    //v2
    const result = {}
    let wordLengths = wordLength(sentance)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    return result
}
//need somewhere to keep track of results
const createResponse = () => {
    return {
        short: 0,
        medium: 0,
        long: 0
    }
}

//bonus to remove spaces that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}

//need to isolate each word and count the length
const wordLength = (str) => {
    return str.split(' ')
        .filter(sanitiseSpaces)
        .map(word => word.length)
}

//adds to the result object
// const editResult = (key, result) => {
//   result[key]++
// }
//v2
const editResult = (key, result) => {
    key in result ? result[key]++ : result[key] = 1
}

//compares word length and adds to correct result property
const incrementResult = (wordLength, result) => {
    if(wordLength <= 3) { editResult('short', result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}


// Lucia
// ...your function goes here: luciaFunction
const getWordCategories = (length) =>
    length <= 3 ? 'short' : length <= 5 ? 'medium' : 'long'

const luciaFunction = (sentence) =>
    sentence.split(' ')
        .map(word => getWordCategories(word.length))
        .reduce(
            (prev, category) => ({
                ...prev,
                [category]: prev[category] + 1 || 1
            }),
            {}
        )

// Rayna 
// ...your function goes here: raynaFunction
const raynaFunction = (sentence) => {
    // would be good to check the data type of sentence but i can't be bothered

    let wordCounts = {}

    let wordsArray = sentence.split(' ')
    wordsArray.forEach((word) => {
        if(word.length <= 3) {
            if(wordCounts.short) wordCounts.short++
            else wordCounts.short = 1
        } else if(word.length >= 6) {
            if(wordCounts.long) wordCounts.long++
            else wordCounts.long = 1
        } else {
            if(wordCounts.medium) wordCounts.medium++
            else wordCounts.medium = 1
        }
    })

    return wordCounts
}

module.exports = {
    ashFunction,
    charlieFunction,
    luciaFunction,
    raynaFunction
}
