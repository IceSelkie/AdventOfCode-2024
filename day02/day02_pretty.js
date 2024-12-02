fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// range=(n=0)=>n>=1?[...new Array(n)].map((a,i)=>i):[];
// bipart=(arr,i)=>i===undefined?range(arr.length-1).map(i=>[arr[i],arr[i+1]]):(i>=0&&i<arr.length-1&&i!=null)?arr.slice(i,i+2):undefined;


const input = (fs.readFileSync("input.txt")+"").trim();
const test_input = "7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9";

const parsed_input = (
  input
  .split("\n") // lines
  .map(a=>a.nums()) // parse the numbers from each line
);
const parsed_tests = test_input.split("\n").map(a=>a.nums());

const part1 = (
  parsed_input
  .map((row)=>
    row
    .bipart() // array to pairs of adjacent elements; bipart([1 2 3]) -> [[1 2] [2 3]]
    .map(pair=>pair[0]-pair[1]) // convert pairs into the differences between those adjacent elements
  ) // each row is now a list of differences
  .map(arr=>
    arr
    // Starting with true, check each element. Values that are zero, different sign than the 0th element, or greater than 3 set to false.
    // This finds lists with: no chances, changes in different directions, and "big" changes, respectively.
    .reduce((cont,val,i)=> cont && arr[0]*val>0 && abs(val)<=3, true)
    // That line is the same as:
    // for (val of arr)
    //   if ( arr[0]*val <= 0 || abs(val)>3 )
    //     return false;
    // return true;
  )
  .count() // count how many of those returned true.
);
let part1_test = parsed_tests.map(a=>bipart(a).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).map(a=>a[1]).count()

console.log(`Part 1 Tests: ${part1_test} (should be 2)`);
console.log(`Part 1: ${part1}`);



sublists = (
  parsed_input
  .map(a=> // For each row
    range(a.length) // For each index in that row
    .map(i=>[...a.slice(0,i),...a.slice(i+1)]) // Create a new version of that row, but without the element at that index.
  )
); // This `sublists` has turned each row into a list of rows.
part2 = (
  sublists
  .map(row=> // For each row (row is a list of variants of that row, each with 1 element removed)
    row
    .find(variant=> // For each variant of that row (NOTE: THIS DOES NOT TEST THE UNMODIFED VERSION)
      variant
      .bipart().map(pair=>pair[0]-pair[1]) // As before, convert to the list of differences between subsequent elements
      .reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true) // And reduce to see if it matches the condition (same as before)
    ) // And since this is in a find loop, it returns the variant if it passes, or undefined if none match
  )
  .count() // count the variants that returned sucessfully
);

// And here is what it looked like before refactoring!
s2 = test_input.s`\n`.map(a=>a.nums()).map(a=>range(a.length).map(i=>[...a.slice(0,i),...a.slice(i+1)]));
part2_test = s2.map(a=>a.map(b=>bipart(b).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).find(a=>a[1])).count();

console.log(`Part 2 Tests: ${part2_test} (should be 4)`);
console.log(`Part 2: ${part2}`);



// Added when cleaning up code to verify that manual refactoring still produces the correct answer.
if (part1_test !== 2)
  console.error(`PART ONE EXAMPLE TEST CASE WRONG: SHOULD BE 2`);
if (part2_test !== 4)
  console.error(`PART TWO EXAMPLE TEST CASE WRONG: SHOULD BE 4`);
if (part1 !== 442)
  console.error(`PART ONE WRONG: SHOULD BE 442`);
if (part2 !== 493)
  console.error(`PART TWO WRONG: SHOULD BE 493`);
