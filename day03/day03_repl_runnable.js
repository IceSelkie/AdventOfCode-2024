fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/2/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = (fs.readFileSync("input.txt")+"").trim();

part1 = [...i.matchAll(/mul\((\d+),(\d+)\)/g)].map(a=>a[1]*a[2]).sum();
console.log(`Part 1: ${part1}`);

part2 = [...[...i.matchAll(/mul\((\d+),(\d+)\)|do\(\)|don\'t\(\)/g)].map(a=>a[0]).join(";").split(/don.*?do\(\)/g).join("").matchAll(/mul\((\d+),(\d+)\)/g)].map(a=>a[1]*a[2]).sum()
console.log(`Part 2: ${part2}`);
