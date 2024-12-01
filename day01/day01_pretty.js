fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
const input = (fs.readFileSync("input.txt")+"").trim();

part1 = input.split("\n").map(a=>a.split(/ +/g)).T.map(a=>a.sort()).T.map(([a,b])=>Math.abs(a-b)).sum();
console.log(`Part 1: ${part1}`);

[left,right] = input.split("\n").map(a=>a.split(/ +/g)).T.map(a=>a.sort());
part2 = left.map(a=>right.filter(b=>b==a).length*Number(a)).sum();
console.log(`Part 2: ${part2}`);

if (part1 !== 2742123)
  console.error(`PART ONE WRONG: SHOULD BE 2742123`);
if (part2 !== 21328497)
  console.error(`PART TWO WRONG: SHOULD BE 21328497`);
