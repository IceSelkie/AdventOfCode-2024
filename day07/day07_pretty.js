// Today's puzzle was an excersize in remembering which "a" "b" and "c" that i have in scope.

fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = (await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/1/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))());
input = (fs.readFileSync("input.txt")+"").trim();
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"

// We want to take an input of 3 and convert it into the list of possible operations of "+" and "*" with 3 choices.
// Recursive function: base case 1 just returns "+" and "*", otherwise, prepends each to each string from the recursive call.
recurseSimple = (i)=>{if (i==1) return [..."+*"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()};
// Memoize will make this much faster, as we avoid a lot of string ops. (at the cost of comparing inputs)
recurse = memoize(recurseSimple);
// Now on to solving the actual question:
part1 = (
  input
  // "190: 10 19\n3267: 81 40 27"
  .split("\n")
  // list of "3267: 81 40 27"
  .map(a=>a.split(": "))
  // list of ["3267","81 40 27"]
  .map(([a,b])=>[Number(a),b.nums()])
  // list of [3267, [81,40,27]]
  .map(([a,b])=> 
    [
      BigInt(a),
      // 3267 -> 3267n
      b.map(b=>BigInt(b)),
      // [81,40,27] -> [81n,40n,27n]
      recurse(b.length-1) // And lets add that ["++","+*","*+","**"] from the recursive function added above
    ]
  )
  // list is now of [3267n, [81n,40n,27n], ["++","+*","*+","**"]]

  // Now we can do our work!
  .map(([a,b,c])=>[
    a,b, // pass the {a:3267n, b:[81n,40n,27n]} through unchanged
    c.filter(c=>(
      // c is now an instance of the options (eg "+*")
      // {a:3267n, b:[81n,40n,27n], c:"+*"}
      b.reduce((cont,next,i)=>
        (
          c[i-1]==="+" // If the corrosponding operation in the c:"+*" is "+"
          ? cont+next // do addition
          : cont*next // else (it must be "*") do multiplication
        )
      )
      ===a // Check the result of the reduce against the goal "a"
    )) // If this matches (this set of operations gives the goal), keep it (using the filter)
  ])
  .filter(a=>a[2].length) // check if any from that row passed
  .map(a=>a[0]) // if they did, take the goal number
  .sum() // and sum it all
);
console.log(`Part 1: ${part1}`);



// Part 2 is literally the same, but instead of 2^(b-1) its now 3^(b-1) with the added "|"
// Instead of a "+"?+:*, we now use a double ternary "+"?+:"*"?*:| where concat is done with stringify-concat-parse.
// A print statement was added in the loop that does the work to track progress (so I know it isnt taking too long on a single row)
// Future optimizations I can make:
//   1)  I dont need to filter or count how many ways work, just find if any work. As soon as I find one, I can return the goal number.
//   2)  If the reduce exceeds the goal, we can break. All operations strictly increase the value without decreasing.
//   3)  As such, we could also break out of all other loops with the same starting sequence of operations. This would be easier with a DFS.

// recurse2 = n => carteasianPow("+*|", n)
recurseSimple2 = (i)=>{if (i==1) return [..."+*|"]; let lower=recurseSimple2(i-1);return lower.map(b=>["+"+b,"*"+b,"|"+b]).flat()};
recurse2 = memoize(recurseSimple2);
part2 = input.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c],i,arr)=>{console.log(`${i+1} of ${arr.length}`); return[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]}).filter(a=>a[2].length).map(a=>a[0]).sum();
console.log(`Part 2: ${part2}`);

// Added when cleaning up code to verify that manual refactoring still produces the correct answer.
if (part1 !== 1430271835320n)
  console.error(`PART ONE WRONG: SHOULD BE 1430271835320n`);
if (part2 !== 456565678667482n)
  console.error(`PART TWO WRONG: SHOULD BE 456565678667482n`);
