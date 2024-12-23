eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/21/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/22/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/22/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.nums()
"*64, mix, prune; /32 mix prune; *2048 mix prune"
op=f=>a=>(f(a)^a)%16777216
step=t=>op(a=>a*2048)(op(a=>Math.floor(a/32))(op(a=>a*64)(t)))
step(123)
step(_)
range(2000).reduce(c=>step(c),1)
range(2000).reduce(c=>step(c),10)
step(1)
op=f=>a=>(f(a)^a)%16777216n
step=t=>op(a=>a*2048n)(op(a=>a/32n)(op(a=>a*64n)(t)))
range(2000).reduce(c=>step(c),10n)
i.nums().map(BigInt).map(a=>range(2000).reduce(c=>step(c),a))
_.sum()
part 1
step(123n)
i.nums().map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1])
[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n)])
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n)])
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>(a+10n).toString(36))])
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>(a+10n).toString(36)).join("")])
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>(a+10n).toString(36)).join("")])
encode=n=>(n+9n).toString(19)
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode).join("")])
encode=n=>(n+9n).toString(19)
[123].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")])
[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")])
_.map(a=>a[1].length)
cart(cart(range(19).map(BigInt).map(encode)).map(a=>a.join(""))).map(a=>a.join(""))
cart(cart(range(-9,10).map(BigInt).map(encode)).map(a=>a.join(""))).map(a=>a.join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map([vals,deltas]=>{let ind=deltas.indexOf(str);if(ind<0)return 0;return vals[ind+5]}) evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0;return vals[ind+5]}) evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0;return vals[ind+5]}); evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0;return vals[ind+5]%10n}); evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0;return vals[ind+4]%10n}); evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=[1,2,3,2024].map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0n;return vals[ind+4]%10n}).sum(); evaluate([-2,1,-1,3].map(BigInt).map(encode).join(""))
list=i.nums().map(BigInt).map(a=>range(2000).reduce(c=>{c[1].push(step(c[0]));return [c[1].last,c[1]]},[a,[a]])[1]).map(a=>[a,range(2000).map(i=>a[i+1]%10n-a[i]%10n).map(a=>encode(a)).join("")]); evaluate=(str)=>list.map(([vals,deltas])=>{let ind=deltas.indexOf(str);if(ind<0)return 0n;return vals[ind+4]%10n}).sum();
cart(cart(range(-9,10).map(BigInt).map(encode)).map(a=>a.join(""))).map(a=>a.join(""))
cart(cart(range(-9,10).map(BigInt).map(encode)).map(a=>a.join(""))).map(a=>a.join("")).map((a,i,arr)=>{if (i%(19*19)==0)console.log(i/19/19,`of`,arr.length/19/19);return evaluate(a)})
_.filter(a=>a>0n)
vals = _
vals.max(Number)