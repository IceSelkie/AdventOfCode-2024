eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/23/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i
i.s`\n`.map(a=>a.s`-`)
names = i.s`\n`.map(a=>a.s`-`).flat().uniq()
names = i.s`\n`.map(a=>a.s`-`).map(a=>[[...a],[a[1],a[0]]]).flat()
names = i.s`\n`.map(a=>a.s`-`).map(a=>[[...a],[a[1],a[0]]]).flat().map(a=>a.join("-"))
edges = new Set(i.s`\n`.map(a=>a.s`-`).map(a=>[[...a],[a[1],a[0]]]).flat().map(a=>a.join("-")))
names = i.s`\n`.map(a=>a.s`-`).map(a=>[[...a],[a[1],a[0]]]).flat()
names = i.s`\n`.map(a=>a.s`-`).flat().uniq()
i.s`\n`.map(a=>a.s`-`)
i.s`\n`.map(a=>a.s`-`).map(a=>names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`)))
i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))])
i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat()
i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq()
i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().sort().map(a=>a.includes('"t'))
i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().sort().filter(a=>a.includes('"t'))
threes = i.s`\n`.map(a=>a.s`-`).map(a=>[a,names.filter(b=>edges.has(`${b}-${a[0]}`)&&edges.has(`${b}-${a[1]}`))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().sort().filter(a=>a.includes('"t')).map(a=>a.Jp())
threenames = threes.flat().sort().uniq()
threes.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))])
threes.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq()
fours = threes.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq()
fours = threes.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
fives = fours.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
sixes = fives.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
seven = sixes.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
seven.map(a=>a.sort().Js()).uniq().map(a=>a.Jp())
eight= seven.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
nine=eight.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
ten=nine.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
el=ten.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
tw=el.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
th=tw.map(t=>[t,names.filter(b=>!t.find(a=>!edges.has(`${a}-${b}`)))]).map(([a,b])=>b.map(b=>[b,...a].sort().Js())).flat().uniq().map(a=>a.Jp())
_[0].join()