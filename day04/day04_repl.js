eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/4/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/4/input', headers: { 'User-Agent': '', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.s`\n`
i.s`\n`.map(a=>[...a.matchAll(/XMAS|SAMX/g)].length)
i.s`\n`.map(a=>[...a.matchAll(/XMAS|SAMX/g)].length).sum()
i.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(a=>[...a.matchAll(/XMAS|SAMX/g)].length).sum()
397+448
ex = fs.readFileSync("ex.txt")+""
ex.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(a=>[...a.matchAll(/XMAS|SAMX/g)].length).sum()
ex.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(a=>[...a.matchAll(/XMAS/g)].length).sum()
ex.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(a=>[...a.matchAll(/SAMX/g)].length).sum()
matches = a=>[...a.matchAll(/XMAS/g)].length+[...a.matchAll(/SAMX/g)].length
i.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(matches).sum()
i.s`\n`.map(matches).sum()
_+463
ex.s`\n`.map(matches).sum()
ex.s`\n`.map(a=>[...a]).T.map(a=>a.join("")).map(matches).sum()
ex+ex.reverse()
ex+"\n"+ex.reverse()
[ex,ex.split("\n").map(a=>[...a]).T.map(a=>a.join(""))].map(a=>a+"\n"+a.reverse())
[ex,ex.split("\n").map(a=>[...a]).T.map(a=>a.join("")).join("\n")].map(a=>a+"\n"+a.reverse())
[ex,ex.split("\n").map(a=>[...a]).T.map(a=>a.join("")).join("\n")].map(a=>a+"\n"+a.reverse()).join("\n")
[...[ex,ex.split("\n").map(a=>[...a]).T.map(a=>a.join("")).join("\n")].map(a=>a+"\n"+a.reverse()).join("\n").matchAll("XMAS")].length
exgrid = ex.split("\n").map(a=>[...a]);
exsize = (exgrid[0].length+exgrid.length)
range(exsize).map(a=>range(exsize).map(b=>[a,a-b]))
range(exsize).map(a=>range(exsize).map(b=>[-exsize+a+b,a-b]))
range(exsize).map(a=>range(exsize).map(b=>[-exsize+a+b,a-b])).flat()
range(exsize).map(a=>range(exsize).map(b=>[-exsize+a+b,a-b])).flat().filter(a=>a[0]>=0&&a[1]>=0&&a[0]<exsize&&a[1]<exsize)
range(exsize).map(a=>range(exsize).map(b=>[a-b,a+b])).flat().filter(a=>a[0]>=0&&a[1]>=0&&a[0]<exsize&&a[1]<exsize)
range(exsize).map(a=>range(exsize).map(b=>[a-b,a+b])).flat().filter(a=>a[0]>=0&&a[1]>=0&&a[0]<exsize&&a[1]<exsize).sort()
range(exsize).map(a=>range(exsize).map(b=>[a-b,a+b])).flat().filter(a=>a[0]>=0&&a[1]>=0)
range(exsize).map(a=>range(exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=0&&a[1]>=0)
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=0&&a[1]>=0)
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=0&&a[1]>=0).map(a=>ex[a[0]][a[1]]??"\n").filter(a=>a).join("")
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=0&&a[1]>=0).map(a=>ex[a[0]][a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1)
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>ex[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>ex[a[0]]?.[a[1]]).filter(a=>a).join("").replaceAll(/\n+/g,"\n")
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>exgrid[a[0]]?.[a[1]]).filter(a=>a).join("").replaceAll(/\n+/g,"\n")
range(2*exsize).map(a=>range(2*exsize).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>exgrid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")
(ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(ex)
(ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(i)
orders = (ex=>[ex,ex.split("\n").map(a=>[...a]).T.map(a=>a.join("")).join("\n")].map(a=>a+"\n"+a.reverse()).join("\n"))
allorders=i=>(ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(i)
allorders(ex)
allorders=i=>orders(ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(i)
allorders=i=>orders((ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(i))
allorders(ex)
allorders=i=>orders(i)+"\n"+(ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")})(i)
diags=ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>grid[a[0]]?.[a[1]]??"\n").filter(a=>a).join("").replaceAll(/\n+/g,"\n")}
diags(ex)
diags=ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>[grid[a[0]]?.[a[1]]??"\n",grid[size-a[0]]?.[a[1]]??"\n"]).T.map(a=>a.filter(a=>a).join("").replaceAll(/\n+/g,"\n"))}
diags(ex)
diags=ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>[grid[a[0]]?.[a[1]]??"\n",grid[size-a[0]]?.[a[1]]??"\n"]).T.map(a=>a.filter(a=>a).join("").replaceAll(/\n+/g,"\n")).map(a=>[a,a.reverse()]).flat()}
diags(ex)
diags=ex=>{let grid=ex.split("\n");let size=Math.max(grid.length,grid[0].length);return range(4*size).map(a=>range(4*size).map(b=>[a-b,b])).flat().filter(a=>a[0]>=-1&&a[1]>=-1).map(a=>[grid[a[0]]?.[a[1]]??"\n",grid[size-a[0]]?.[a[1]]??"\n"]).T.map(a=>a.filter(a=>a).join("").replaceAll(/\n+/g,"\n")).map(a=>[a,a.reverse()]).flat().join("\n")}
orders(ex)
orders(ex).length
part1=input=>[...[orders(input),diags(input)].flat().join("\n").matchAll("XMAS")].length
part1(ex)
part1(i)
part 1
kernel=(grid,x,y)=>{if (grid[x]?.[y]!="A")return false; corners=[grid[x-1][y-1],grid[x-1][y+1],grid[x+1][y-1],grid[x+1][y+1]]; if (corners.find(a=>!"MS".includes(a))) return false; if(corners.filter(a=>a=="M").length!=2)return false; return corners[0]!=corners[3]}
part2=input=>{let grid=input.split("\n"); range(grid.length).map(i=>range(grid[i].length).map(j=>kernel(grid,i,j)))}
kernel=(grid,x,y)=>{if (grid[x]?.[y]!="A")return false; corners=[grid[x-1]?.[y-1],grid[x-1]?.[y+1],grid[x+1]?.[y-1],grid[x+1]?.[y+1]]; if (corners.find(a=>!"MS".includes(a))) return false; if(corners.filter(a=>a=="M").length!=2)return false; return corners[0]!=corners[3]}
part2(ex)
part2=input=>{let grid=input.split("\n"); return range(grid.length).map(i=>range(grid[i].length).map(j=>kernel(grid,i,j)));}
part2(ex)
part2(ex).flat().sum()
part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n")
console.log(part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n"))
kernel=(grid,x,y)=>{if (grid[x]?.[y]!="A")return false; corners=[grid[x-1]?.[y-1],grid[x-1]?.[y+1],grid[x+1]?.[y-1],grid[x+1]?.[y+1]]; if (corners.find(a=>!a||!"MS".includes(a))) return false; if(corners.filter(a=>a=="M").length!=2)return false; return corners[0]!=corners[3]}
console.log(part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n"))
part2=input=>{let grid=input.split("\n"); return range(1,grid.length-1).map(i=>range(1,grid[i].length-1).map(j=>kernel(grid,i,j)));}
console.log(part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n"))
console.log(part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n"))
console.log(part2(ex).map(a=>a.map(b=>b?"A":".").join("")).join("\n")) ; part2(ex).flat().sum()
console.log(part2(i).map(a=>a.map(b=>b?"A":".").join("")).join("\n")) ; part2(i).flat().sum()