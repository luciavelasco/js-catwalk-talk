
// Ash
const ashFunction = (sentence) => {
    let result = {
        short: 0,
        medium: 0,
        long: 0
    }

    sentence.replace(/[^A-Za-z0-9 ]/g, "").split(' ').forEach(word => {
        if (word.length <= 3) {
            result.short++
        } else if (word.length <= 5) {
            result.medium++
        } else {
            result.long++
        }
    })

    //old skool rulez trololol
    for(const [key, value] of Object.entries(result)) {
        if (value === 0) {
            delete result[key]
        }
    }

    return result
}

// Lucia
const getLength = length =>
    length <= 3 ? 'short': length <=5 ? 'medium' : 'long'

const luciaFunction = sentence =>
    sentence.replace(/[\.!?,]/gi, '').split(' ')
        .map(v => getLength(v.length))
        .reduce((prev, category) => ({
            ...prev,
            [category]: category in prev ? prev[category] + 1 : 1
        }), { })

// Audrey
function isShort(word) {
    return word.length <= 3;
}

function isMedium(word) {
    return word.length === 4 || word.length === 5;
}

function isLong(word) {
    return word.length >= 6;
}

function filterWords(words, lengthFilter) {
    return words.filter(lengthFilter);
}

function audreyFunction(sentence) {
    const words = sentence.replace(/[!,.?]/gi, '').split(' ');

    const shortCount = filterWords(words, isShort).length;
    const mediumCount = filterWords(words, isMedium).length;
    const longCount = filterWords(words, isLong).length;

    return words.reduce((count, word) => {
        !!shortCount ? count.short = shortCount: false;
        !!mediumCount ? count.medium = mediumCount : false;
        !!longCount ? count.long = longCount : false;
        return count;
    }, {})
}

// Rayna
function raynaFunction(sentence) {
    sentence = sentence.replace(/[.!?,]/g, '');
    let wordsArray = sentence.split(' ');
    let shortCount = 0;
    let mediumCount = 0;
    let longCount = 0;

    wordsArray.forEach(word => {
        if(word.length < 4) {
            shortCount++;
        } else if(word.length < 6) {
            mediumCount++;
        } else {
            longCount++;
        }
    })

    let wordLengths = {};

    if(shortCount > 0) {
        wordLengths['short'] = shortCount;
    }

    if(mediumCount > 0) {
        wordLengths['medium'] = mediumCount;
    }

    if(longCount > 0) {
        wordLengths['long'] = longCount;
    }

    return wordLengths;
}

// Mike
function increment(output, key) {
    output[key] = ++output[key] || 1
    return output
}

function mikeFunction(words) {
    words = words.replace(/[!?,]/g, '').split(' ')
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
    ashFunction,
    luciaFunction,
    audreyFunction,
    raynaFunction,
    mikeFunction
}

 