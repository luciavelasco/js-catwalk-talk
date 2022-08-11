// Ash
// ...your function goes here: ashFunction
const ashFunction = string => {
  const result = {
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

  return result
}

// Lucia
// ...your function goes here: luciaFunction
const getLengthCategory = word =>
  word.length <= 3 ?
  'short' : word.length <= 5 ?
  'medium': 'long'
// checkIsValidSentence
// is a string
// has at least one letter

const luciaFunction = (sentence) => checkIsValidSentence(sentence)
  .split(' ')
  .map(getLengthCategory)
  .reduce(
    (prev, category) => ({
      ...prev,
      [category]: prev[category] + 1
    }),
    { short: 0, medium: 0, long: 0})

// Charlie

//top level function to call everything 
//need somewhere to keep track of results
//need to isolate each word and count the length
//bonus to remove spaces that are identified as 'words'
//compares the word length and adds to correct result property
//adds to the result property

//top level function to call everything 
const charlieFunction = (sentance) => {
  let result = createResponse()
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
const sanitiseSpaces = (word) => word !== ''

//need to isolate each word and count the length
const wordLength = (str) => {
  return str.split(' ')
    .filter(sanitiseSpaces)
    .map(word => word.length)
}

//adds to the result property
const editResult = (key, result) => {
  result[key]++
}

//compares the word length and adds to correct result property
const incrementResult = (wordLength, result) => {
  if(wordLength <= 3) { editResult('short', result)}
  if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result)}
  if(wordLength >= 6) { editResult('long', result)}
}

// ...your function goes here: charlieFunction

// Rayna 
// ...your function goes here: raynaFunction
let isShort = word => word.length <= 3
let isMedium = word => word.length > 3 && word.length < 6
let isLong = word => word.length >= 6

let raynaFunction = sentence => sentence.split(' ').reduce((resultSoFar, currentWord) => {
    return {
      short: resultSoFar.short + isShort(currentWord),
      medium: resultSoFar.medium + isMedium(currentWord),
      long: resultSoFar.long + isLong(currentWord)
    }
  }, {
    short: 0,
    medium: 0,
    long: 0
  })




module.exports = {
  ashFunction,
  luciaFunction,
  charlieFunction,
  raynaFunction
}
