// Mike's Solution
const increment = (output, key) => {
    output[key] = ++output[key] || 1
    // output[key] = (output.hasOwnProperty(key) ? output[key]++ : 1)
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


// Cat's Solution
// catFunction goes here...
function catFunction(words) {
  let splitWords = words.split(' ')
  let wordsLessThree = splitWords.filter((word) => word.length <= 3)
  let wordsThreeToFive = splitWords.filter((word) => word.length > 3 && word.length <= 5)
  let wordsMoreFive = splitWords.filter((word) => word.length > 5)

  let output = {}

  if (wordsLessThree.length > 0) {
    output.short = wordsLessThree.length
  }
  if (wordsThreeToFive.length > 0) {
    output.medium = wordsThreeToFive.length
  }
  if (wordsMoreFive.length > 0) {
    output.long = wordsMoreFive.length
  }
  
  return output;
}

// Lucia's Solution
// luciaFunction goes here...
const getCategory = word =>
  word.length <= 3 ? `short` :
  word.length <= 5 ? `medium` :
  `long`

const luciaFunction = sentence =>
  sentence
    .split(` `)
    .map(getCategory)
    .reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category]: accumulator[category] + 1 || 1
      }),
      { }
    )


module.exports = {
  mikeFunction,
  catFunction,
  luciaFunction
}

