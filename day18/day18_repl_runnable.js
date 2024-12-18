fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
// i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/18/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = (fs.readFileSync("input.txt")+"").trim();

disp=arr=>{arr=new Set(arr);return(range(-1,s+2).map(i=>range(-1,s+2).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
s=70;gl=new Set(i.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,1024)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]")
// console.log(disp([...gl]))
todo=[[0,0,0]]; been=new Set();done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("Part 1:",next[2]+1);done=true;}}; been.add(key);}

part2h=(s=6,input=ex,cutoff=12)=>{gl=new Set(input.split("\n").map(a=>a.split(",").map(Number).Js()).slice(0,cutoff)); range(-1,s+2).forEach(i=>{[[-1,i].Js(),[i,-1].Js(),[s+1,i].Js(),[i,s+1].Js()].forEach(g=>gl.add(g))}); gl.has("[-1,5]");todo=[[0,0,0]]; been=new Set();passed=false;done=false;while (todo.length>0&&!done){let next=todo.min(a=>a[2]); todo.splice(todo.indexOf(next),1); let key=next.slice(0,2).Js(); if (been.has(key)) continue; let forward=dirs4.map(v=>vadd(v,next)).filter(a=>!gl.has(a.Js())); for(let i=0;i<forward.length;i++){todo.push([...forward[i],next[2]+1]); if (forward[i][0]===s&&forward[i][1]===s) {console.log("out in",next[2]+1);done=true;passed=true}}; been.add(key);}return passed;}
part2=(s=6,input=ex)=>input.s`\n`[range(1024,input.s`\n`.length+1).find(cutoff=>!part2h(s,input,cutoff))-1];
console.log(`Part 2:`,part2(70,i));
