# JavaScript Catwalk

Add code to `index.js` until your exported functions satisfy the instructions below, and pass all the tests (run `npm run test` to test).

Go through the exercises with your peers. Compare your solutions at the end of each exercise, and talk about why you wrote your solution the way you did. Then, refactor your solution (or write a new function) for the next exercise and repeat the conversation!

## Instructions

### Exercise 1

Our function, which I have called `getWordLengths`, takes a string and returns an object. It returns the number of short words (three letters or less), medium words (four or five letters) and long words (six letters or more).

```typescript

let count = getWordLengths("What a great day for an enormous picnic in my garden!")
/*
  {
  short: 6,
  medium: 2,
  long: 3
  }
 */

```

### Exercise 2

If there are no words in a category, the return object does not include that category.

```typescript
let count = getWordLengths("Hello") // { medium: 1 }
```

### Exercise 3

Ignore fullstops, exclamation marks, question marks and commas when you count the length of a word.

```typescript
let count = getWordLengths("Hello!") // { medium: 1 }
```

## About This Activity

These exercises are very short, but they can be implemented in a lot of different ways. The have been designed to include flow operators such as loops and if statements, and to juggle between multiple types of values - your solution might include strings, numbers, objects, arrays and booleans. However, if your solution doesn't include all of these values and operations, that's okay!

What syntax you use for these operations will depend on which version of JavaScript you're used to, or perhaps what frameworks and languages you have learned in the past or use frequently - or even whether you are used to procedural, functional, or object oriented programming!

What informed __your__ solution? Is there a better way to solve this problem?
