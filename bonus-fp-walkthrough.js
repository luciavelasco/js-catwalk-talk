// Lucia's Solution
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

// Ash's Solution 
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

// BONUS
// Refactoring Ash's solution to Lucia's solution, a.k.a. Answering "How does your brain do that, Lucia?!"
// Stage 1:
// I think "Hm, there's some duplication there. The only thing that's changing is the key
// for the result. We could put that into a helper function."

const increment = (object, key) =>
  object[key] = object[key] + 1 || 1

const ashFunctionRefactor1 = string => {
  const result = {}
  
  string.split(' ').forEach(word => {
    if (word.length <= 3) {
      increment(result, `short`)
    } else if (word.length <= 5) {
      increment(result, `medium`)
    } else {
      increment(result, `long`)
    }
  })

  return result
}

// Stage 2
// I think "That was pointless, I still have all this duplication, even though the only thing changing is the short/medium/long and the length."
// "Wait, if the length only changes the short/medium/long, that's the only thing I have to wrap in an if statement, NOT the call to increment."
// "If all I'm setting is a single string, I can use a ternary instead!"

const ashFunctionRefactor2 = string => {
  const result = {}
  
  string.split(' ').forEach(word => {
    increment(result,
              word.length <= 3 ? `short` :
              word.length <= 5 ? `medium` :
              `long`
             )
  })

  return result
}

// Stage 3:
// I think "Huh. Didn't I already have a helper function for that?"

const ashFunctionRefactor3 = string => {
  const result = {}
  
  string.split(' ').forEach(word => {
    increment(result, getCategory(word))
  })

  return result
}

// Beyond stage 3:
// I'm mutating the result object, which I want to avoid (because it's not glaringly obvious that
// line 98 is changing the result unless it has an = sign).
// I'd probably reach for reduce (to turn an array into an object, without mutation), and end up with this:
const ashFunctionRefactor4 = string => {
  return string.split(' ').reduce(
    (result, word) => {
      increment(result, getCategory(word))
      return result
    },
    {}
  )
}
// After that, I might want to avoid mutating even that result, so I'd use the spread operator and set
// the key dynamically... which would end up looking almost exactly like luciaFunction!
const incrementRefactor = (object, key) => {
  return {
    ...object,
    [key]: object[key] + 1 || 1
  }
}

module.exports = {
  ashFunction,
  luciaFunction,
  ashFunctionRefactor1,
  ashFunctionRefactor2,
  ashFunctionRefactor3,
  ashFunctionRefactor4
}
