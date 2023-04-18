// Ash 
// ...your function goes here: ashFunction
const ashFunction = string => {
  const result = {}
  
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
// Neal
// ...your function goes here: nealFunction
class StringProcessor {
  constructor(str) {
    this.str = str;
  }

  wordLengths(str) {
    const words = str.split(' ');
    return words.map(word => word.length);
  }

  countWordLengths() {
    const counts = {}

    const lengths = this.wordLengths(this.str);

    for (let length of lengths) {
      if (length <= 3) {
        counts.short = counts.short ? ++counts.short : 1;
      } else if (length <= 5) {
        counts.medium = counts.medium ? ++counts.medium : 1;
      } else {
        counts.long = counts.long ? ++counts.long : 1;
      }
    }

    return counts;
  }
}

function nealFunction(str) {
  const stringProcessor = new StringProcessor(str);
  return stringProcessor.countWordLengths();
}

// Lucia
// ...your function goes here: luciaFunction
const getCategory = (word) =>
  word.length <= 3 ? `short` :
  word.length <= 5 ? `medium` : `long`

const luciaFunction = (sentence) => sentence
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
  ashFunction,
  nealFunction,
  luciaFunction,
}
