// Cat's Solution
// catFunction goes here...
/**
const array = [1, 2, 3] -> 1, [2, 3]
-> 2, [3]
-> 3, []
const [first, ...rest] = array // first == 1, rest == [2, 3]
const first = array[0]
const rest = 
 */
// { short } = {}.short || 0 // 0
// { short } = { short: 1 }.short // 1

// [[1,2,3], [4,5,6]]

function catFunction(input) {
  function process([first, ...rest], output) {
    first = first.replace(/\W/gmi, '')

    if (first.length === 0 ) {
       // space intentionally left blank
    } else if (first.length < 4) {
      output.short = (output.short + 1) || 1
    } else if (first.length < 6) {
      output.medium = (output.medium || 0) + 1
    } else {
      output.long = (output.long || 0) + 1
    }

    if (rest.length === 0) {
      return output
    } else {
      return process(rest, output)
    }
  }
  let words = input.split(' ')
  return process(words, {})
}

/**
 let vs const
 
 */

// mattFunction("What a great day for an enormous picnic in my garden")
// mattFunction("What a great day for an enormous picnic in my garden", 2, 6, 1000)

// Matt's Solution
// mattFunction goes here...
const mattFunction = (str, short=0, medium=0, long=0, count=0) => {
  const updateCount = () => {
    count < 4 ? short++ : count < 6 ? medium++ : long++
    count = 0
  }
  
  const char = str.charAt(0)

  if (char) {
    char === ' ' && updateCount()
    char.match(/[a-z]/i) && count++
    return mattFunction(str.substring(1), short, medium, long, count)
  }
  else {
    updateCount()
    return {...short && {short}, ...medium && {medium}, ...long && {long}}
  }
}

// Lucia's Solution
// luciaFunction goes here...
const getCategory = word =>
  word.length <= 3 ? `short` :
  word.length <= 5 ? `medium` : `long`
// [`short`, `short`, `medium`]

/*
const array = [1, 2, 3]
const addOne = (number) => { return number + 1 }
array.map((currentNumber) => { //stuff here })

array.map((number) => { return number + 1 })
const result = array.map(addOne)
// result == [2, 3, 4]

// addOne(1) // 2
// addOne(2) // 3
// addOne(3) // 4

// [2, 3, 4]

*/

const luciaFunction = sentence =>
  sentence // string
    .replaceAll(/[\.\,\?\!]/g, ``)
    .split(` `) // array
    .map(getCategory) // array
    .reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category]: accumulator[category] + 1 || 1
      }),
      { }
    ) // object

module.exports = {
  catFunction,
  mattFunction,
  luciaFunction
}

