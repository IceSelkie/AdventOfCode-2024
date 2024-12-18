eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/18/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/18/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.split("\n").map(a=>a.split(",").map(Number))
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js())); range(s).forEach(i=>{gl.add([-1,i],[i,-1],[s+1,i],[i,s+1])});
gl
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{gl.add([-1,i],[i,-1],[s+1,i],[i,s+1])});
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}});}
gl
gl.has("[-1,3]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{gl.add([-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js())}); gl.has()
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{gl.add([-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js())}); gl.has("[5,-1]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{gl.add([-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js())}); gl.has("[-1,5]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{gl.add([-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js())}); gl.has("[5,-1]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g)))}); gl.has("[5,-1]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[5,-1]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[70,5]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[71,5]")
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[71,5]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
ex="5,4\n4,2\n4,5\n3,0\n2,1\n6,3\n2,4\n1,5\n0,6\n3,3\n2,6\n5,1\n1,2\n5,5\n2,5\n6,5\n1,4\n0,4\n6,4\n1,1\n6,1\n1,0\n0,5\n1,6\n2,0"
s=6;gl=new Set(ex.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[71,5]")
s=6;gl=new Set(ex.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
s=6;gl=new Set(ex.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,12)); range(s).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
been
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); console.log(forward);for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); console.log({next,forward});for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
vadd([1,0],[2,3,4])
todo
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,1).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); console.log({next,forward});for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); console.log({todo});if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[1]).map(i=>range(b[0]).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
disp=arr=>{arr=new Set(arr);return(range(-1,s+2).map(i=>range(-1,s+2).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
disp([...gl])
console.log(disp([...gl]))
s=6;gl=new Set(ex.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,12)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
console.log(disp([...gl]))
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[0]===s&&forward[1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
console.log(disp([...been]))
been.has("[6,6]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,12)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
part 1

console.log(disp([...gl])+"\n"+disp([...been]))
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;}}; been.add(key);if (todo.length%1000<=4)console.log(todo.length,todo.last[2])}
i.split("\n").length
()=>{todo=[[0,0,0]]; been=new Set();passed=false;done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;passed=true}}; been.add(key);}return passed;}
part2h=(s=6,input=ex,cutoff=12)=>{gl=new Set(input.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,cutoff)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]");todo=[[0,0,0]]; been=new Set();passed=false;done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;passed=true}}; been.add(key);}return passed;}
part2=(s=6,input=ex)=>range(input.s`\n`.length+1).find(cutoff=>part2h(s,input,cutoff))
part2()
part2=(s=6,input=ex)=>range(input.s`\n`.length+1).find(cutoff=>!part2h(s,input,cutoff))
part2()
part2=(s=6,input=ex.s`\n`)=>input[range(input.length+1).find(cutoff=>!part2h(s,input,cutoff))]
part2=(s=6,input=ex)=>input.s`\n`[range(input.s`\n`.length+1).find(cutoff=>!part2h(s,input,cutoff))]
part2()
exl=ex.s`\n`
exl[20]
part2=(s=6,input=ex)=>input.s`\n`[range(input.s`\n`.length+1).find(cutoff=>!part2h(s,input,cutoff))-1]; part2()
part2=(s=6,input=ex)=>input.s`\n`[range(1024,input.s`\n`.length+1).find(cutoff=>!part2h(s,input,cutoff))-1]; part2(70,i)
part 2