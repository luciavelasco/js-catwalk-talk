

// Neal
// ...your function goes here: nealFunction
const SHORT_LENGTH = 3;
const MEDIUM_LENGTH = 5;
const SHORT_KEY = 'short';
const MEDIUM_KEY = 'medium';
const LONG_KEY = 'long';
const CHARS_TO_IGNORE = /[.!?,]/g;

const nealFunction = (sentence) => {
    let count = {};

    let sentenceCleaned = sentence.replace(CHARS_TO_IGNORE, '');

    let words = sentenceCleaned.split(' ');

    words.forEach((word) => {
        if (word.length <= SHORT_LENGTH) {
            SHORT_KEY in count ? count[SHORT_KEY]++ : count[SHORT_KEY] = 1;
        } else if (word.length <= MEDIUM_LENGTH) {
            MEDIUM_KEY in count ? count[MEDIUM_KEY]++ : count[MEDIUM_KEY] = 1;
        } else {
            LONG_KEY in count ? count[LONG_KEY]++ : count[LONG_KEY] = 1;
        }
    });

    return count;
}

// Lucia
// ...your function goes here: luciaFunction
const getWordCategories = length =>
    length <= 3 ? 'short' :
        length <= 5 ? 'medium' : 'long'

const luciaFunction = sentence => sentence
    .replace(/[\.,\!\?]/g, '')
    .split(' ')
    .map(word => getWordCategories(word.length))
    .reduce(
        (accumulator, category) => ({
            ...accumulator,
            [category]: accumulator[category] + 1 || 1
        }),
        {}
    )

// Mike
// ...your function goes here: mikeFunction
function increment(output, key) {
    output[key] = ++output[key] || 1
    return output
}

function mikeFunction(words) {
    words = words.replace(/[!?,.]/g, '').split(' ')
    let output = {}
    words.forEach(word => {
        if (word.length <= 3) {
            output = increment(output, 'short')
        } else if (word.length < 6) {
            output = increment(output, 'medium')
        } else {
            output = increment(output, 'long')
        }
    })
    return output
}

module.exports = {
    nealFunction,
    luciaFunction,
    mikeFunction
}
