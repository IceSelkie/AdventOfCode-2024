fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/2/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = (fs.readFileSync("input.txt")+"").trim();
i2 = "7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9"
i2.s`\n`.map(a=>a.nums()).map(a=>bipart(a).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).map(a=>a[1]).count()
part1 = i.s`\n`.map(a=>a.nums()).map(a=>bipart(a).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).map(a=>a[1]).count()
console.log(`Part 1: ${part1}`);

s2 = i2.s`\n`.map(a=>a.nums()).map(a=>range(a.length).map(i=>[...a.slice(0,i),...a.slice(i+1)])) // .filter(a=>a.map(a=>bipart(a).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c+((arr[0]*n<=0)||(Math.abs(n)>3))),0)]).map(a=>a[1]))
s = i.s`\n`.map(a=>a.nums()).map(a=>range(a.length).map(i=>[...a.slice(0,i),...a.slice(i+1)])) // .filter(a=>a.map(a=>bipart(a).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c+((arr[0]*n<=0)||(Math.abs(n)>3))),0)]).map(a=>a[1]))
s2.map(a=>a.map(b=>bipart(b).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).find(a=>a[1])).count()
part2 = s.map(a=>a.map(b=>bipart(b).map(a=>a[0]-a[1])).map(a=>[a,a.reduce(((c,n,i,arr)=>c&&(arr[0]*n>0)&&(Math.abs(n)<=3)),true)]).find(a=>a[1])).count()
console.log(`Part 2: ${part2}`);
