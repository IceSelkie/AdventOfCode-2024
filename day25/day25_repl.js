eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/25/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/25/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.split("\n\n").map(a=>a.s`\n`)
i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>[...a].filter(a=>a==="#").length-1))
i
i.slice(0,200)
i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T)//.map(a=>[...a].filter(a=>a==="#").length-1))
i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>a.join("")))
i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).map(a=>a.join("")))
i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>a.join("")))
i2=i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>a.join("")))
[locks,keys]=[i2.filter(a=>a[0][0]==="#"),i2.filter(a=>a[0][0]===".")]
keys2=keys.map(a=>a.map(a=>[...a].filter(a=>a==="#").length).Js())
locks2=locks.map(a=>a.map(a=>[...a].filter(a=>a==="#").length-1).Js())
locks2.filter(a=>keys2.includes(a)).length
locks2=locks.map(a=>a.map(a=>[...a].filter(a=>a==="#").length-1))
keys2=keys.map(a=>a.map(a=>[...a].filter(a=>a==="#").length))
locks2.map(l=>keys2.map(k=>l.filter((lv,i)=>lv==k[i])))
locks2.map(l=>keys2.find(k=>vadd(k,l).filter(a=>a>5).length===0))
locks2.filter(l=>keys2.find(k=>vadd(k,l).filter(a=>a>5).length===0)).length
locks2.filter(l=>keys2.find(k=>vadd(k,l).filter(a=>a>6).length===0)).length
ex="#####\n.####\n.####\n.####\n.#.#.\n.#...\n.....\n\n#####\n##.##\n.#.##\n...##\n...#.\n...#.\n.....\n\n.....\n#....\n#....\n#...#\n#.#.#\n#.###\n#####\n\n.....\n.....\n#.#..\n###..\n###.#\n###.#\n#####\n\n.....\n.....\n.....\n#....\n#.#..\n#.#.#\n#####"
i2=ex.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>a.join(""))); [locks,keys]=[i2.filter(a=>a[0][0]==="#"),i2.filter(a=>a[0][0]===".")]; locks2=locks.map(a=>a.map(a=>[...a].filter(a=>a==="#").length-1)); keys2=keys.map(a=>a.map(a=>[...a].filter(a=>a==="#").length));
locks2
keys2
locks2.filter(l=>keys2.find(k=>vadd(k,l).filter(a=>a>6).length===0)).length
locks2.map(l=>keys2.filter(k=>vadd(k,l).filter(a=>a>6).length===0).length).sum()
i2=i.split("\n\n").map(a=>a.s`\n`.map(a=>[...a]).T.map(a=>a.join(""))); [locks,keys]=[i2.filter(a=>a[0][0]==="#"),i2.filter(a=>a[0][0]===".")]; locks2=locks.map(a=>a.map(a=>[...a].filter(a=>a==="#").length-1)); keys2=keys.map(a=>a.map(a=>[...a].filter(a=>a==="#").length));
locks2.map(l=>keys2.filter(k=>vadd(k,l).filter(a=>a>6).length===0).length).sum()