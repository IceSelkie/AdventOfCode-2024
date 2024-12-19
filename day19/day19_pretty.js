fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/19/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
const input = (fs.readFileSync("input.txt")+"").trim();

const [i1,i2]=input.split("\n\n");
const possible = i1.split(", ");
const lines = i2.split("\n");

const pr = RegExp("^("+possible.join("|")+")+$");
console.log("Part 1:", lines.map(a=>!!a.match(pr)).sum());

function patterns(str) {
  // Working set
  // have empty string in there, so length is >1 so while loop continues running.
  let workingSet = [[str,1],["",0]];
  // Max steps to prevent infinite loop (which can apparently crash my repl/kernel?!)
  let maxSteps=str.length;

  // While there is still string to consume (and we've not hit maxSteps)
  while (workingSet.length>1 && maxSteps--) {
    // Move forward 1 step, by consuming a matching string off the front
    // of each possible path, then consolidate
    workingSet=(
      workingSet.map(([tailStr, qtyPaths])=>{
        // Base case (no string left to match)
        if (tailStr.length===0)
          return [[tailStr,qtyPaths]]; // return our [["",0]], wrapped in an array for the .flat later

        // Then check each each allowed component:
        return (possible.map(prefix=>{
          // If we have a match at the front
          if (tailStr.startsWith(prefix))
            // slice it off, and record how many paths get here
            return [tailStr.slice(prefix.length),qtyPaths];
        })
        .filter(a=>a)) // remove the ones that have no valid prefixes left
      })
      .flat() // this is why base case needed extra wrapping of [].
      // Then we want to group by the remaining unique tails
      .groupBy(([str,qty])=>str)
      // and sum the paths to get to each (to reduce computation)
      .map(([tailStr, list])=>[tailStr,list.sum(([str,qty])=>qty)])
      // This should leave us with an array like [[str,qty],["",qty]]
      // but each string is shorter than before.
    );
  };

  // Loop has completed, so either we have [["", qty]]
  if (workingSet.length === 1)
    return workingSet[0][1];
  else
    // Or...
    throw new Error("Loop didnt complete as expected");
}

console.log("Part 2:",lines.map(patterns).sum());
