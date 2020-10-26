// GROSS all-in-one reduce. Mutation. So many ternaries. Barely maintainable. Unreadable. Ugh - Exercise 1
// const getWordLengths = (phrase) =>
//     phrase.split(' ')
//         .reduce((prev, current) => {
//                 current.length <= 3 ?
//                     prev.short++ :
//                     current.length <= 5 ?
//                         prev.medium++ :
//                         prev.long++
//                 return prev
//             },
//             {short: 0, medium: 0, long: 0});

// OBSCENE object spreading to avoid lots of if statements - Exercise 2
// const getWordLengths = (phrase) => {
//     let long = 0
//     let medium = 0
//     let short = 0
//     phrase.split(' ')
//         .forEach(v =>
//             v.length <= 3 ? short++ : v.length <= 5 ? medium++ : long++)
//     return {...(long ? {long} : {}), ...(medium ? {medium} : {}), ...(short ? {short} : {})}

// Removes the spreading, has the obscene number of imperative if statements - DISAPPROVE - Exercise 2
// const getWordLengths = (phrase) => {
//     let long = 0
//     let medium = 0
//     let short = 0
//     phrase.split(' ')
//         .forEach(v =>
//             v.length <= 3 ? short++ : v.length <= 5 ? medium++ : long++)
//     const accumulator = {}
//     if (short) accumulator['short'] = short
//     if (medium) accumulator['medium'] = medium
//     if (long) accumulator['long'] = long
//     return accumulator
// }

// :chefkiss: - Exercise 1
// const getWordLengths = phrase =>
//     phrase
//         .split(' ')
//         .map(word => word.length <= 3 ? 'short' : word.length <= 5 ? 'medium' : 'long')
//         .reduce((accumulator, category) => ({
//             ...accumulator,
//             [category]: accumulator[category] + 1
//         }), { short: 0, medium: 0, long: 0 })

// :chefkiss: - PERFECTION - but harder to read if you're not familiar with the syntax
const getWordLengths = (phrase) => phrase
    .replace(/[\.,\!\?]/g, '')
    .split(' ')
    .map(word => word.length <= 3 ? 'short' : word.length <= 5 ? 'medium' : 'long')
    .reduce((accumulator, category) => ({
            ...accumulator,
            [category]: (category in accumulator ? accumulator[category] + 1 : 1)
        }),
        {})

module.exports = getWordLengths
