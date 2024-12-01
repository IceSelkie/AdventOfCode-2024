fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = (await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/1/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))());
i = (fs.readFileSync("input.txt")+"").trim();
part1 = i.split("\n").map(a=>a.split(/ +/g)).T.map(a=>a.map(Number).sort((a,b)=>Number(a)-Number(b))).T.map(a=>Math.abs(a[0]-a[1])).sum();
console.log(`Part 1: ${part1}`);
[l,r] = i.split("\n").map(a=>a.split(/ +/g)).T.map(a=>a.map(Number).sort((a,b)=>Number(a)-Number(b)));
part2 = l.map(a=>r.filter(b=>b==a).length*a).sum();
console.log(`Part 2: ${part2}`);
