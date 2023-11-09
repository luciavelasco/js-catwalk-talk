/** 
Note: skip to bottom for a breakdown of `array.map(getCategory)` VS `array.map((word) => getCategory(word))`
*/

// Mike's Solution
// mikeFunction goes here...
const increment = (output, key) => {
    output[key] = ++output[key] || 1
    return output
}

const mikeFunction = (words) => {
    words = words.split(' ')
    let output = {}
    words.forEach(word => {
        if (word.length < 4) {
            output = increment(output, 'short')
        } else if (word.length < 6) {
            output = increment(output, 'medium')
        } else {
            output = increment(output, 'long')
        }
    })
    return output
}

// Matt's Solution
// mattFunction goes here...

function mattFunction(words) {
  const wordArray = words.split(' ')
  const safeInc = (obj, key) =>
    obj[key] ? obj[key]++ : obj[key] = 1

  return wordArray.reduce(
    (acc, word) => {
      const wordLength = word.length

      if (wordLength < 4) {
        safeInc(acc, 'short')
      } else if (wordLength < 6) {
        safeInc(acc, 'medium')
      } else {
        safeInc(acc, 'long')
      }
      
      return acc
    },
    {}
  )
}

// Lucia's Solution
// luciaFunction goes here...
const getCategory = word =>
  word.length <= 3 ? `short` :
  word.length <= 5 ? `medium` :
  `long`

const luciaFunction = sentence =>
  sentence
  .split(` `) // ["Hi", "world"]
  .map(getCategory) // ["short", "medium"]
  .reduce(
    (accumulator, category) => ({
      ...accumulator,
      [category]: accumulator[category] + 1 || 1
    }),
    { }
  ) // { short: 1, medium: 1 }

module.exports = {
  mikeFunction,
  mattFunction,
  luciaFunction
}

/*
 `.map(getCategory)` VS `.map((word) => getCategory(word))`

 When you use a variable, imagine you are copying and
  pasting the value of the variable,
  even if that variable is a function.


[].map((word) => getCategory(word)))
// same as
[].map(function(word) {

  return function(word) {
    return word.length <= 3 ? `short` :
    word.length <= 5 ? `medium` :
    `long`
  }(word) // inner function is called in here
  
})

// VS

[].map(getCategory)
// same as
[].map(function(word) {
    return word.length <= 3 ? `short` :
    word.length <= 5 ? `medium` :
    `long`
  })
*/
