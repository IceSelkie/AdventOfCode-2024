fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
const input = (fs.readFileSync("input.txt")+"").trim();

let part1 = (
  input // "123   456\n789   012\n"
  .split("\n") // split into lines
  .map(a=>a.split(/ +/g)) // split each line by spaces
  .transpose() // [[3,4],[1,2],[5,6]] -> [[3,1,5], [4,2,6]] (we are working in columns now)
  .map(a=>a.sort()) // sort the columns. Since they are strings and all the same length, the normal .sort() (lexicographical sort) gives the same result.
  .transpose() // convert back from columns to rows
  .map(([a,b])=>Math.abs(a-b)) // Find the row difference
  .sum() // Sum this whole thing
);
console.log(`Part 1: ${part1}`);

let [left,right] = (
  input // "123   456\n789   012\n"
  .split("\n") // split into lines
  .map(a=>a.split(/ +/g)) // split each line by spaces
  .transpose() // [[3,4],[1,2],[5,6]] -> [[3,1,5], [4,2,6]] (we are working in columns now)
  .map(a=>a.sort()) // sort the columns. Since they are strings and all the same length, the normal .sort() (lexicographical sort) gives the same result.
);
let part2 = (
  left // Take the left column
  .map(a=>( // For each value "a"
    right // Search the right list
    .filter(b=>b==a) // for all values that match (this returns a list of those values)
    .length // and count how many match (.length on the returned list of matching values)
    * Number(a) // And multiply that by that value
  ))
  .sum() // And sum those values.
);
console.log(`Part 2: ${part2}`);

// Tests were not ran for actual submission.

// Added when cleaning up code to verify that manual refactoring still produces the correct answer.
if (part1 !== 2742123)
  console.error(`PART ONE WRONG: SHOULD BE 2742123`);
if (part2 !== 21328497)
  console.error(`PART TWO WRONG: SHOULD BE 21328497`);
