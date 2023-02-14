/*
    Reduce will loop through every item in an array.
    It takes a callback, and a starting value.
    In each iteration (for each value in the array), your callback takes
      - the value returned from the previous iteration, OR your starting value
      - the current value from the array
    In the example below, it loops through each number, with a starting value of 0
    (the starting value is set in line 17), and adds the current number to the runningTotal.
    I have commented in the callback values for each loop.

    const total = [1, 2, 3, 4].reduce(
      // 0, 1 => 0 + 1 = 1
      // 1, 2 => 1 + 2 = 3
      // 3, 3 => 3 + 3 = 6
      // 6, 4 => 6 + 4 = 10
      (runningTotal, number) => { return runningTotal + number },
      0
    ) // 10
  
*/

// Neal
class StringProcessor {
  wordLengths(str) {
    const words = str.split(' ');
    return words.map(word => word.length);
  }

  countWordLengths(str) {
    const lengths = this.wordLengths(str);
    const counts = {
      short: 0,
      medium: 0,
      long: 0
    }
    for (let len of lengths) {
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

// create an object that knows how to process the string
// call its method to count lengths
function nealFunction(str) {
  const stringProcessor = new StringProcessor();
  return stringProcessor.countWordLengths(str);
}

// Rayna 
// ...your function goes here: raynaFunction
const raynaFunction = (sentence) => {
  const words = sentence.split(' ')
  const longCount = words.reduce((countSoFar, currentWord) => 
    currentWord.length > 5 ? countSoFar + 1 : countSoFar
  , 0)
  
  const mediumCount = words.reduce((countSoFar, currentWord) => 
    (currentWord.length < 6 && currentWord.length > 3) ? 
    countSoFar + 1 : 
    countSoFar 
    , 0)
  
  const shortCount = words.reduce((countSoFar, currentWord) => 
    currentWord.length < 4 ? countSoFar + 1 : countSoFar
  , 0)
  
  return {
    short: shortCount,
    medium: mediumCount,
    long: longCount
  }
}

// Lucia
// ...your function goes here: luciaFunction
const getCategory = word =>
  word.length <= 3 ? `short` :
  word.length <= 5 ? `medium` : `long`

const luciaFunction = sentence =>
  sentence
  .split(` `)
  .map(getCategory)
  .reduce(
    (accumulator, value) => ({
      ...accumulator,
      [value]: accumulator[value] + 1
    }),
    { short: 0, medium: 0, long: 0}
  )



module.exports = {
  luciaFunction,
  nealFunction,
  raynaFunction,
}
