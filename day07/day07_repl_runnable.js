// Today's puzzle was an exercise in remembering which "a" "b" and "c" that i have in scope.

fs = require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = (await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/1/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))());
i = (fs.readFileSync("input.txt")+"").trim();
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"

// recurse = n => carteasianPow("+*", n)
recurseSimple = (i)=>{if (i==1) return [..."+*"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()};
recurse = memoize(recurseSimple);
part1 = i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).filter(a=>a[2].length).map(a=>a[0]).sum()
console.log(`Part 1: ${part1}`);

// recurse2 = n => carteasianPow("+*|", n)
recurseSimple2 = (i)=>{if (i==1) return [..."+*|"]; let lower=recurseSimple2(i-1);return lower.map(b=>["+"+b,"*"+b,"|"+b]).flat()};
recurse2 = memoize(recurseSimple2);
part2 = i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c],i,arr)=>{console.log(`${i+1} of ${arr.length}`); return[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]}).filter(a=>a[2].length).map(a=>a[0]).sum();
console.log(`Part 2: ${part2}`);

if (part1 !== 1430271835320n)
  console.error("PART 2 MISMATCH")
if (part2 !== 456565678667482n)
  console.error("PART 2 MISMATCH")