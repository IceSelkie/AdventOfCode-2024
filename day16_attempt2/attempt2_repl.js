eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
input = (fs.readFileSync("input.txt")+"").trim()

  '###.#.#.#.###.###.#.#.#######.###.#
start = input.indexOf("S");
i = input.replaceAll("S","");
example = "###############\n#.......#....E#\n#.#.###.#.###.#\n#.....#.#...#.#\n#.###.#####.#.#\n#.#.#.......#.#\n#.#.#####.###.#\n#...........#.#\n###.#.#####.#.#\n#...#.....#.#.#\n#.#.#.###.#.#.#\n#.....#...#.#.#\n#.###.#.#.#.#.#\n#S..#.....#...#\n###############";
work = example;
start = work.indexOf("S");
work = work.replaceAll("S","");
dirs4
work = example; start = work.indexOf("S"); work = work.replaceAll("S","");  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4[(dir+3)%4]+3*work.length,1001],       [pos+dirs4[(dir+1)%4]+1*work.length,1001],       [pos+dirs4[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); }  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos))       been.set(newPos,[newScore,[]]);     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } }  console.log(`Part 1:`,done-1); 
work = example; start = work.indexOf("S"); work = work.replaceAll("S","");  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4[(dir+3)%4]+3*work.length,1001],       [pos+dirs4[(dir+1)%4]+1*work.length,1001],       [pos+dirs4[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos))       been.set(newPos,[newScore,[]]);     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } }  console.log(`Part 1:`,done-1); 
been
queue
work = example; start = work.indexOf("S"); work = work.replaceAll("S","");  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4[(dir+3)%4]+3*work.length,1001],       [pos+dirs4[(dir+1)%4]+1*work.length,1001],       [pos+dirs4[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos))       been.set(newPos,[newScore,[]]);     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) { sources.push(here); if (sources.length===1) put(newScore, oldScore); }     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } }  console.log(`Part 1:`,done-1);

queue
been
work = example; start = work.indexOf("S"); work = work.replaceAll("S","");  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4[(dir+3)%4]+3*work.length,1001],       [pos+dirs4[(dir+1)%4]+1*work.length,1001],       [pos+dirs4[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } }  console.log(`Part 1:`,done-1);
work[209
work[209]
work = example; start = work.indexOf("S"); work = work.replaceAll("S","");  rowSize = work.indexOf("\n")+1; dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4m[(dir+3)%4]+3*work.length,1001],       [pos+dirs4m[(dir+1)%4]+1*work.length,1001],       [pos+dirs4m[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } }  console.log(`Part 1:`,done-1);

draw=()=>{
  let beenSet = [...been.keys()].map(a=>a%work.length).set()
  console.log([...work].map((a,i)=>beenSet.has(i)?"*":a).join(""));
}
draw()
draw=()=>{let beenSet = [...been.keys()].map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?".":a==="."?" ":a).join(""));}
draw()
draw=(been)=>{let beenSet = [...been.keys()].map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?".":a==="."?" ":a).join(""));}
draw(new Map())
work = example; start = work.indexOf("S"); work = work.replaceAll("S","."); rowSize = work.indexOf("\n")+1; dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]); curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endPos = []; put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4m[(dir+3)%4]+3*work.length,1001],       [pos+dirs4m[(dir+1)%4]+1*work.length,1001],       [pos+dirs4m[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); }; while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({curScore,here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;     if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);     if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }   if (get(here)==="E") {     done = curScore+1;     endPos.push(here);   } } draw=(been)=>{let beenSet = [...been.keys()].map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?".":a==="."?" ":a).join(""));} console.log(`Part 1:`,done-1); 
work = example;start = work.indexOf("S");work = work.replaceAll("S",".");rowSize = work.indexOf("\n")+1;dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);curScore = 0;maxScore = 0;done = Infinity;queue = [[start]];queueSize = 1;been = new Map([[start,[0,[]]]]);endPos = [];put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize};pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()};get=p=>work[p%work.length];moves=pos=>{  let dir=Math.floor(pos/work.length);  return (    [      [pos+dirs4m[(dir+3)%4]+3*work.length,1001],      [pos+dirs4m[(dir+1)%4]+1*work.length,1001],      [pos+dirs4m[dir]                    ,   1]    ]    .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])    .filter(a=>".E".includes(a[2]))  );};while (done>curScore && queueSize) {  let here = pop();  let dests = moves(here);  console.log({curScore,here,dests});  for (let i=0; i<dests.length; i++){    let [newPos, cost] = dests[i];    let newScore = curScore+cost;    if (!been.has(newPos)) {      been.set(newPos,[newScore,[]]);      put(newScore, newPos);    }    let [oldScore, sources] = been.get(newPos);    if (oldScore<newScore) continue;    if (oldScore==newScore) sources.push(here);    if (oldScore>newScore) {      queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);      queue[newScore].push(newPos);      been.set(newPos, [newScore,[here]]);    }  }  if (get(here)==="E") {    done = curScore+1;    endPos.push(here);  }};draw=(been)=>{let beenSet = [...been.keys()].map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?".":a==="."?" ":a).join(""))};console.log(`Part 1:`,done-1);
been.get(endPos)
endPos
draw(been)
endPos
get(endPos)
[...been.keys()].includes(746)
been.get(746)
[].push(1,2)
[].push()
work = example; start = work.indexOf("S"); work = work.replaceAll("S",".");  rowSize = work.indexOf("\n")+1; dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endTouched = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4m[(dir+3)%4]+3*work.length,1001],       [pos+dirs4m[(dir+1)%4]+1*work.length,1001],       [pos+dirs4m[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({curScore,here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endTouched.push(here);   } };  draw=(arr=[...been.keys()])=>{let beenSet = arr.map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?".":a==="."?" ":a).join(""))};  console.log(`Part 1:`,done-1);  for (let i=0; i<endTouched.length; i++)   endTouched.push(...been.get(endTouched[i])[1]);  console.log(`Part 2:`,endTouched.length); 
draw(endTouched)
endTouched.uniq().length
endTouched.uniq().Js()
endTouched.uniq().length
draw=(arr=[...been.keys()])=>{let beenSet = arr.map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?"O":a).join(""))};
draw(endTouched)
endTouched.uniq().length
endTouched.map(a=>a%work.length).uniq().length
work = example; start = work.indexOf("S"); work = work.replaceAll("S",".");  rowSize = work.indexOf("\n")+1; dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endTouched = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4m[(dir+3)%4]+3*work.length,1001],       [pos+dirs4m[(dir+1)%4]+1*work.length,1001],       [pos+dirs4m[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({curScore,here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endTouched.push(here);   } };  draw=(arr=[...been.keys()])=>{let beenSet = arr.map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?"O":a).join(""))};  console.log(`Part 1:`,done-1);  for (let i=0; i<endTouched.length; i++)   endTouched.push(...been.get(endTouched[i])[1]);  console.log(`Part 2:`,endTouched.map(a=>a%work.length).uniq().length); 
work = input; start = work.indexOf("S"); work = work.replaceAll("S",".");  rowSize = work.indexOf("\n")+1; dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);  curScore = 0; maxScore = 0; done = Infinity; queue = [[start]]; queueSize = 1; been = new Map([[start,[0,[]]]]); endTouched = [];  put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize}; pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()}; get=p=>work[p%work.length]; moves=pos=>{   let dir=Math.floor(pos/work.length);   return (     [       [pos+dirs4m[(dir+3)%4]+3*work.length,1001],       [pos+dirs4m[(dir+1)%4]+1*work.length,1001],       [pos+dirs4m[dir]                    ,   1]     ]     .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])     .filter(a=>".E".includes(a[2]))   ); };  while (done>curScore && queueSize) {   let here = pop();   let dests = moves(here);   console.log({curScore,here,dests});   for (let i=0; i<dests.length; i++){     let [newPos, cost] = dests[i];     let newScore = curScore+cost;      if (!been.has(newPos)) {       been.set(newPos,[newScore,[]]);       put(newScore, newPos);     }     let [oldScore, sources] = been.get(newPos);      if (oldScore<newScore) continue;     if (oldScore==newScore) sources.push(here);     if (oldScore>newScore) {       queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);       queue[newScore].push(newPos);       been.set(newPos, [newScore,[here]]);     }   }    if (get(here)==="E") {     done = curScore+1;     endTouched.push(here);   } };  draw=(arr=[...been.keys()])=>{let beenSet = arr.map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?"O":a).join(""))};  console.log(`Part 1:`,done-1);  for (let i=0; i<endTouched.length; i++)   endTouched.push(...been.get(endTouched[i])[1]);  console.log(`Part 2:`,endTouched.map(a=>a%work.length).uniq().length); 