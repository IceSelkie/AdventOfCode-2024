eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.s`\n`
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.s`\n`.map(a=>a.split(": ").map(([a,b])=>[Number(a),b.nums()]))
i.s`\n`.map(a=>a.split(": ").map(([a,b])=>[Number(a),b.nums()])).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1)))[0]
i.s`\n`.map(a=>a.split(": ").map(([a,b])=>[Number(a),b.nums()])).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1)))[1]
i.s`\n`.map(a=>a.split(": ").map(([a,b])=>[Number(a),b.nums()]))[0]
i.s`\n`.map(a=>a.split(": ").map(([a,b])=>[Number(a),b]))
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b])
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1)))[1]
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i%(1<<j))))[1]
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))[1]
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))[1]
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))[1]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]);.map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]);//.map(([a,b])=>range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j))))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]);.map(([a,b])=>[a,b,range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j)))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2).filter(i=>range(b.length-1).map(j=>i&(1<<j)))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2)])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2).map(i=>range(b.length-1).map(j=>i&(1<<j)))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2).map(i=>range(b.length-1).map(j=>i&(1<<j)))])[0]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2).map(i=>range(b.length-1).map(j=>i&(1<<j)))])[1]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length)**2).map(i=>range(b.length-1).map(j=>i&(1<<j)))])[0]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,range((b.length-1)**2).map(i=>range(b.length-1).map(j=>i&(1<<j)))])[0]
recurse = (i)=>{if (i==1) return [..."+*"]; let lower=recurse(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()}
recurse(3)
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)])[0]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)])[1]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[b,[...c,""]].T.join("")))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[a,b,[b,[...c,""]].T.map(a=>a.join("")).join(""))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[a,b,[b,[...c,""]].T.map(a=>a.join("")).join("")]))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[a,b,[b,[...c,""]].T.map(a=>a.join("")).join("")]))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>eval(str)))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>eval(str)===a))
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>[str,eval(str)])])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>[str,eval(str)])])[0]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>[str,eval(str)]).map(([s,e])=>[s,e,e==a])])[0]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>[b,[...c,""]].T.map(a=>a.join("")).join("")).map(str=>[str,eval(str)]).map(([s,e])=>[s,e,e==a])])[1]
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,b.reduce((cont,next,i)=>console.log(cont,next,i))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,b.reduce((cont,next,i)=>console.log(cont,next,c[i]))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>console.log(cont,next,c[i])))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>console.log(cont,next,c[i-1])))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)])))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))])))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)))])))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)))]))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)))])])])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)))]))]])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next)))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a)])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()]).map(a=>a.last)
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()]).map(a=>a.last).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()]).map(a=>a.last).sum()
memoize
console.log(memoize)
recurse = memoize((i)=>{if (i==1) return [..."+*"]; let lower=recurse(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()})
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()]).map(a=>a.?last).sum()



/* REPL CLEARED AND RESET */



eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"
recurse = memoize((i)=>{if (i==1) return [..."+*"]; let lower=recurse(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()})
recurse(3)
recurseSimple = (i)=>{if (i==1) return [..."+*"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()};
recurse = memoize(recurseSimple);
recurse(3)
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"
recurseSimple = (i)=>{if (i==1) return [..."+*"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()};
recurse = memoize(recurseSimple);
recurse(3)



/* utils2.js's memoize function fixed. */

/* REPL CLEARED AND RESET */



eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/7/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
ex = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20"
recurseSimple = (i)=>{if (i==1) return [..."+*"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b]).flat()};
recurse = memoize(recurseSimple);
recurse(3)
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b,recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>eval(cont+c[i-1]+next))==a).count()]).map(a=>a.last).sum()

i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(a=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next))===BigInt(a)).count()]).map(a=>a.last).sum()
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a)).count()]).map(a=>a.last).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a)).count()]).map(a=>a.last).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a))])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a)).count()])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a))])
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a))]).slice(0,5)
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).slice(0,5)
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).filter(a=>a[2].length).slice(0,5)
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).filter(a=>a[2].length>1).slice(0,5)
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[a,b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.map(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===BigInt(a)).count()]).map(a=>a[0]).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).map(a=>a[0])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).filter(a=>a[2].length).map(a=>a[0]).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:cont*next)===a)]).filter(a=>a[2].length).map(a=>a[0]).sum()
part 1

recurseSimple2 = (i)=>{if (i==1) return [..."+*|"]; let lower=recurseSimple(i-1);return lower.map(b=>["+"+b,"*"+b,"|"+b]).flat()};
recurse2 = memoize(recurseSimple2);
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)])
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]).filter(a=>a[2].length)
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]).filter(a=>a[2].length).map(a=>a[0]).sum()
recurse2(3)
recurseSimple2 = (i)=>{if (i==1) return [..."+*|"]; let lower=recurseSimple2(i-1);return lower.map(b=>["+"+b,"*"+b,"|"+b]).flat()};
recurse2 = memoize(recurseSimple2);
recurse2(3)
ex.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c])=>[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]).filter(a=>a[2].length).map(a=>a[0]).sum()
i.s`\n`.map(a=>a.split(": ")).map(([a,b])=>[Number(a),b.nums()]).map(([a,b])=>[BigInt(a),b.map(b=>BigInt(b)),recurse2(b.length-1)]).map(([a,b,c],i,arr)=>{console.log(`${i+1} of ${arr.length}`); return[a,b,c.filter(c=>b.reduce((cont,next,i)=>c[i-1]==="+"?cont+next:c[i-1]==="*"?cont*next:BigInt(cont+""+next))===a)]}).filter(a=>a[2].length).map(a=>a[0]).sum()