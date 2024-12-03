fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
const input = (fs.readFileSync("input.txt")+"").trim();

const part1 = (
  [... // Expansion operator
    input
    .matchAll(/mul\((\d+),(\d+)\)/g) // Find all "mul(123,456)" and save the "123" and "456" to match groups 1 and 2
  ] // Expands this into an array (so we can use .map())
  .map(a=>a[1]*a[2]) // Take group 1 and group 2, and multiply. Since that is undefined for strings, JS typecases both to numbers.
  .sum() // Then sum those products.
);
console.log(`Part 1: ${part1}`);

const part2 = (
  [...
    [...
      input
      .matchAll(/mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g) // Same as before, but dont capture the numbers. Also find do() and don't().
    ] // Expansion operator
    .map(a=>a[0]) // Extract the matched section of text, gives back the whole "mul(123,456)" without the junk between.
    .join(";") // Combine it all back into a single string
    .split(/don.*?do\(\)/g) // In this string, find "don" to the next instance of "do()", and delete everything between them.
    .join("") // That split the text around those `don't()` and `do()`s. Combine them together again.
    .matchAll(/mul\((\d+),(\d+)\)/g) // Now parse this as we did in part 1.
  ] // Expansion operator
  .map(a=>a[1]*a[2]) // multiply matched groups
  .sum() // and sum the products
);
console.log(`Part 2: ${part2}`);

// Tests were not ran before submission.

if (part1 !== 174103751)
  console.error(`PART ONE WRONG: SHOULD BE 174103751`);
if (part2 !== 100411201)
  console.error(`PART TWO WRONG: SHOULD BE 100411201`);
