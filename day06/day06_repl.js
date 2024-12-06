eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/6/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/6/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.s`\n`.map(a=>a.s(/(.)/g).filter(a=>a))
grid = i.s`\n`.map(a=>a.s(/(.)/g).filter(a=>a))
xi=grid.indexOf(grid.find(a=>a.find(b=>b==="^")))
grid[xi].indexOf("^")
yi=grid[xi].indexOf("^")
grid[xi][yi]="."
dirs4 = [[-1,0],[0,1],[1,0],[0,-1]];
curdir = 0;
x=xi; y=yi; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else break;} while (curdir || x!=xi || y!=yi);
been.size
part 1
locs = [...been]
run=(xi,yi,grid)=>{x=xi; y=yi; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir || x!=xi || y!=yi); returns "Loops"}
run=(xi,yi,grid)=>{x=xi; y=yi; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir || x!=xi || y!=yi); returns "Loops";}
run=(xi,yi,grid)=>{x=xi; y=yi; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir || x!=xi || y!=yi); return "Loops";}
locs.map(a=>grid[a.Jp()[0]][a.Jp()[1]]).uniq()
run=(xi,yi,grid)=>{x=xi; y=yi; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir%4 || x!=xi || y!=yi); return "Loops";}
run=(xi,yi,grid)=>{x=xi; y=yi; curdir=0; been=new Set(); do {been.add([x,y].Js());let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir%4 || x!=xi || y!=yi); return "Loops";}
run=(xi,yi,grid)=>{x=xi; y=yi; curdir=0; been=new Set(); do {let key=[x,y,curdir%4].Js(); if (been.has(key)) return "Loops"; been.add(key);let next=vadd([x,y],dirs4[curdir%4]); if (grid[next[0]]?.[next[1]]===".") [x,y]=next; else if (grid[next[0]]?.[next[1]]=="#") curdir++; else return "Exits"} while (curdir%4 || x!=xi || y!=yi); return "Loops";}
locs.forEach(a=>grid[a.Jp()[0]][a.Jp()[1]]=".");time(()=>locs.filter((loc,i)=>{console.log(`Starting loc ${i+1} of ${locs.length}`);let [mx,my]=loc.Jp(); grid[mx][my] = "#"; let ret = run(xi, yi, grid); grid[mx][my]="."; return ret=="Loops"}))
_.length
part 2