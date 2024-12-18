fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/18/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
const i = (fs.readFileSync("input.txt")+"").trim();
const ex="5,4\n4,2\n4,5\n3,0\n2,1\n6,3\n2,4\n1,5\n0,6\n3,3\n2,6\n5,1\n1,2\n5,5\n2,5\n6,5\n1,4\n0,4\n6,4\n1,1\n6,1\n1,0\n0,5\n1,6\n2,0";

function part1(s=6,input=ex,cutoff=12) {
  gl=new Set(input.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,cutoff));
  range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))});
  
  // queue for daikstras/bfs
  todo=[[0,0,0]]; // start is at (0,0), with distance 0.
  // hashset to avoid repeatedly visiting the same place
  been=new Set();
  // Distance to look for
  curdist = 0;
  // Loop until done or all paths have been exhausted.
  while (todo.length>0) {
    // Find the next object in the queue (least distance)
    let next=todo.findLast(a=>a[2]===curdist);
    if (!next) { curdist++; continue; }
    // And remove it from the queue
    todo.splice(todo.lastIndexOf(next),1);

    // Ensure that we're not repeating locations...
    let key=next.slice(0,2).Js();
    if (been.has(key)) continue;
    been.add(key);

    // The next locations to explore are each of the four directions from here
    // Take here ("next") and add each direction vector "v" to it
    // If the destination is in a wall ("corrupted cell"), skip it.
    let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js()));
    // Now loop through and add it to the queue.
    // Loop is used instead of a forEach so that we can return the whole function from inside.
    for(let i=0;i<forward.length;i++) {
      // Add to the queue with one more step added
      todo.push([...forward[i],next[2]+1]);
      // If exit found,
      if (forward[i][0]===s&&forward[i][1]===s)
        // Return the number of steps to reach here.
        return next[2]+1;
    }
  }
  // No exit found.
  return -1;
}

console.log("Part 1:",part1(70,i,1024));

function part2(s=6, input=ex, startingOffset=12) {
  const lines = input.split("\n");
  let found = false;
  for (let i=startingOffset; !found&&i<lines.length+1; i++) {
    // if cant exit
    if (part1(s,input,i)===-1)
      // we've found our index
      found = i;
  }
  // Get the corrosponding last byte to be added.
  return lines[found-1];
}
console.log(`Part 2:`,part2(70,i,1024));
