// Ash
// ...your function goes here: ashFunction
const ashFunction = str => {
    let result = {}

    str.split(' ').forEach(word => {
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
const getLength = length =>
  length <= 3 ? 'short' :
  length <= 5 ? 'medium' : 'long'

const luciaFunction = sentence =>
  sentence.split(' ')
  .map(word => getLength(word.length))
  .reduce(
    (accumulator, currentLength) => ({
      ...accumulator,
      [currentLength]: accumulator[currentLength] + 1 || 1
    }),
    {}
  )

// const thing = {short: 0, medium: 0, long: 0}
// const thing2 = { foo: 'bar', ...thing } // {short: 0, medium: 0, long: 0, foo: 'bar'}
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const allTheArrays = [...array1, ...array2] // [1, 2, 3, 4, 5, 6]


// Mike
const increment = (output, key) => {
  output[key] = ++output[key] || 1
  return output
}


const mikeFunction = (words) => {
  words = words.split(' ')
  let output = {}
  words.forEach(word => {
    if (word.length <= 3) {
      output = increment(output, 'short')
    } else if (word.length <= 5) {
      output = increment(output, 'medium')
    } else {
      output = increment(output, 'long')
    }
  })
  return output
}

// Neal 
// ...your function goes here: nealFunction
class StringProcessor {
  wordLengths(str) {
    const words = str.split(' ');
    return words.map(word => word.length);
  }
  countWordLengths(str) {
    // get all word lengths
    const lengths = this.wordLengths(str);
    // initialise counts
    const counts = {};
    // go through lengths and update counts
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
function nealFunction(str) {
  // create an object that knows how to process the str
  const stringProcessor = new StringProcessor();
  // call its method to count lengths
  return stringProcessor.countWordLengths(str);
}

module.exports = {
    ashFunction,
    luciaFunction,
    mikeFunction,
    nealFunction
}

