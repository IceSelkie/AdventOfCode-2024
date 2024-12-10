fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/10/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
input = (fs.readFileSync("input.txt")+"").trim();

grid = input.split("\n").map(line=>[...line].map(char=>+char));
gridList = grid.map((line,i)=>line.map((val,j)=>[JSON.stringify([i,j]),val])).flat();

get=([x,y])=>grid[x]?.[y];
dirs4= "[0,1]/[1,0]/[0,-1]/[-1,0]".split("/").map(a=>a.Jp())

part1 = input =>
gridList.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((starting,nextHeight)=>(
  starting.map(pos=>dirs4.map(step=>{return vadd(step,JSON.parse(pos[0]))})).flat()
  .map(nextPos=>[JSON.stringify(nextPos),get(nextPos)])
  .filter(([location,height])=>height===nextHeight)
  // comment for part 2
  .map(a=>JSON.stringify(a)).uniq().map(a=>JSON.parse(a))
),[a])]).sum(a=>a[1].length);
console.log(`Part 1: ${part1(input)}`);

part2 = input =>
gridList.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((starting,nextHeight)=>(
  starting.map(pos=>dirs4.map(step=>{return vadd(step,JSON.parse(pos[0]))})).flat()
  .map(nextPos=>[JSON.stringify(nextPos),get(nextPos)])
  .filter(([location,height])=>height===nextHeight)
  // uncomment for part 1
  // .map(a=>JSON.stringify(a)).uniq().map(a=>JSON.parse(a))
),[a])]).sum(a=>a[1].length);
console.log(`Part 2: ${part2(input)}`);
