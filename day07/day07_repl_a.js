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