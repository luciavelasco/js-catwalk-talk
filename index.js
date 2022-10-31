// Lucia
// ...your function goes here: luciaFunction
const getCategoryFromLength = (length) =>
  length <= 3 ? `short`
  : length <= 5 ? `medium`
  : `long`

const luciaFunction = (sentence) => sentence
    .split(` `)
    .map(word => getCategoryFromLength(word.length))
    .reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category]: accumulator[category] + 1
      }),
      { short: 0, medium: 0, long: 0 }
    )

class StringProcessor {
  wordLengths(str) {
    const words = str.split(' ');
    return words.map(word => word.length);
  }
  countWordLengths(str) {
    //get all word lengths
    const lengths = this.wordLengths(str);
    //initialise counts
    const counts = {
      short: 0,
      medium: 0,
      long: 0
    }
    //go through word lengths and update counts
    for (const len of lengths) {
      if (len <= 3) {
        counts['short'] += 1;
      } else if (len <= 5) {
        counts['medium'] += 1;
      } else {
        counts['long'] += 1;
      }
    }
    return counts;
  }
}
// Neal
function nealFunction(str) {
  // create an object that knows how to process the string
  const stringProcessor = new StringProcessor();
  // call its method to count lengths
  return stringProcessor.countWordLengths(str);
}

// Charlie
// ...your function goes here: charlieFunction

//Pseudocode:
//top level function to call everything in order and return response
//need somewhere to keep track of results
//need to isolate each word and count the length
//bonus to remove spaces that are identified as 'words'
//compares word length and adds to correct result property
//adds to the result object

//==================================

//top level function to call everything in order and return response
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
        long: 0,
    }
}

//need to isolate each word and count the length
const wordLength = (str) => {
    return str.split(' ')
        .filter(sanitiseSpaces)
        .map(word => word.length)
}

//adds to the result object
const editResult = (key, result) => {
    result[key]++
}

//bonus to remove spaces that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}

//compares word length and adds to correct result property
const incrementResult = (wordLength, result)=> {
    if(wordLength <= 3) { editResult('short' , result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}

// Miguel 
function mikeFunction(words) {
    words = words.split(' ')
    let output = {
        short: 0,
        medium: 0,
        long: 0
    }
    words.forEach(word => {
        if (word.length <= 3) {
            output.short++
        } else if (word.length < 6) {
            output.medium++
        } else {
            output.long++
        }
    })
    return output
}

// Rayna 
// ...your function goes here: raynaFunction
const getWordCountByLength = (words, minLength, maxLength) => {
  return words.filter(word => word.length >= minLength && word.length <= maxLength).length
}

const raynaFunction = (sentence) => {
  const words = sentence.split(' ')
  const shortCount = getWordCountByLength(words, 1, 3)
  const mediumCount = getWordCountByLength(words, 4, 5)
  const longCount = getWordCountByLength(words, 6, 9999)
  // return {
  //   short: shortCount,
  //   medium: mediumCount,
  //   long: longCount
  // }
  return {
    ...(shortCount && {short: shortCount}),
    ...(mediumCount && {medium: mediumCount}),
    ...(longCount && {long: longCount}),
  }
}

module.exports = {
  luciaFunction,
  nealFunction,
  charlieFunction,
  mikeFunction,
  raynaFunction,
}

