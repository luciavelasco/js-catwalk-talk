# JavaScript Catwalk

Add code to `index.js` until the exported function satisfies the instructions below, and passes all the tests (run `npm run test` to test!).

Go through the exercises with your peers. Compare your solutions at the end of each exercise, and talk about why you wrote your solution the way you did. Then, refactor your solution for the next exercise and repeat the conversation!

### Instructions

##### Exercise 1

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

##### Exercise 2

If there are no words in a category, the return object does not include that category.

```typescript
let count = getWordLengths("Hello") // { medium: 1 }
```

##### Exercise 3

Ignore fullstops, exclamation marks, question marks and commas when you count the length of a word.

```typescript
let count = getWordLengths("Hello!") // { medium: 1 }
```

##### Notes

These exercises are designed to include flow operators such as a loop and an if statement, as well as juggling between different types of values - your solution might include strings, numbers, objects, and arrays.

What syntax you use for these operations will depend on which version of JavaScript you're used to, or perhaps what other frameworks and languages you have learned in the past or use frequently - or even whether you are used to procedural, functional, or object oriented programming! However, if your solution doesn't include these, that's okay! What informed your solution? Is there a better way to solve this problem?
