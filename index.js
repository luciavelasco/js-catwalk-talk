// Mike's Solution
// mikeFunction() goes here...

const mikeFunction = (words) => {

  const incrementKey = (output, key) => {
    output[key] = ++output[key] || 1
    return output
  }
  
  words = words.split(' ')
  let output = {}
  words.forEach(word => {
    if (word.length <= 3) {
      output = incrementKey(output, 'short')
    } else if (word.length <= 5) {
      output = incrementKey(output, 'medium')
    } else {
      output = incrementKey(output, 'long')
    }
  })
  return output
}

// Robbie's Solution
// robbieFunction() goes here...
const robbieFunction = sentence => {
  const lengths = sentence
    .split(" ")
    .map(word => word.length);

  const short = lengths.filter(
    length => length <= 3
  ).length;

  const medium = lengths.filter(
    length => length > 3 && length < 6
  ).length;

  const long = lengths.filter(
    length => length >= 6
  ).length;

  const fullResults = { short, medium, long };
  const keyValuePairs = Object.entries(fullResults);
  // [ [`short`, 0], [`medium`, 1], [`long`, 5] ]
  const relevantResults = Object.fromEntries(
    keyValuePairs.filter(([k, v]) => { return v > 0; })
  );
  return relevantResults
}
// Lucia's Solution
// luciaFunction() goes here...

const getCategories = word =>
  word.length <= 3 ? `short` :
    word.length <= 5 ? `medium` :
      `long`

const luciaFunction = sentence =>
  sentence
    .split(` `)
    .map(getCategories)
    .reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category]: (accumulator[category] || 0) + 1
      }),
      {}
    )

module.exports = {
  mikeFunction,
  robbieFunction,
  luciaFunction
}
