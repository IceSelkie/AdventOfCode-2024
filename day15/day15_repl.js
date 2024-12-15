eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/15/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/15/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
[room,attempts]=i.s('\n\n')
ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
[room,attempts]=ex.s('\n\n')
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n","")
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); gl=room.gridl()
g
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); start=room.gridl().find(a=>a[1]=="@")[0];
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); start=room.gridl().find(a=>a[1]=="@")[0].Jp();
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]="."
g
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]="."
draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
console.log(draw())
push=(dir)=>dirs4["".indexOf(dir)]
dirs4
push=(dir)=>dirs4[">v<^".indexOf(dir)]
push=(dir)=>{dir=dirs4[">v<^".indexOf(dir)]; let next=vadd(pos,dir); if (}
get=([x,y])=>g[x][y]
push=(dir)=>{dir=dirs4[">v<^".indexOf(dir)]; let next=vadd(pos,dir); if (get(next)==="."){pos=next; return;}if(get(next)==="#"){return;} let path=next; while(get(path)=="O"){path=vadd(path,dir);} if (get(path)==="."){g[path[0]][path[1]]="O"; g[next[0]][next[1]]="."; pos=next; return;} }
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";
[...attempts].forEach(dir=>{push(dir); console.log("\n"); draw();})
g
draw
[...attempts].forEach(dir=>{push(dir); console.log("\n\n"+draw());})
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
[room,attempts]=ex2.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     [...attempts].forEach(dir=>{push(dir); console.log("\n\n"+draw());})
[room,attempts]=ex2.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     [...attempts].forEach(dir=>{console.log(dir,"\n"+draw()+"\n");push(dir)})
[room,attempts]=ex2.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push(dir);console.log(dir,"\n"+draw()+"\n")})
[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push(dir);console.log(dir,"\n"+draw()+"\n")})
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"?100*x+y:0)).flat().sum()
score()
[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push(dir);console.log(dir,"\n"+draw()+"\n")}); score()
[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push(dir);/*console.log(dir,"\n"+draw()+"\n")*/}); score()
part 1
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"
[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":"..").join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");//[...attempts].forEach(dir=>{push(dir);/*console.log(dir,"\n"+draw()+"\n")*/}); score()
[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");//[...attempts].forEach(dir=>{push(dir);/*console.log(dir,"\n"+draw()+"\n")*/}); score()
[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");//[...attempts].forEach(dir=>{push(dir);/*console.log(dir,"\n"+draw()+"\n")*/}); score()
push2=(dir,apply=true)=>{dir=dirs4[">v<^".indexOf(dir)]; let next=vadd(pos,dir); if (get(next)==="."){pos=next; return true;}if(get(next)==="#"){return false;} let cells=select(next); }
[].
arr = []
arr.some(a=>a)
function select(pos){
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  // select here
  let here = select(from);
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);

  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel

  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(select).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }

  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }

  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()
[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":"..").join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");//[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score()
ex3
[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");//[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score()
function select(pos){
  console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  // select here
  let here = select(from);
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);

  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel

  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }

  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }

  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"
fs.writeFileSync("input.txt",i)
.save day15_temp.js

fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let here = select(from);
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();



fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let here = select(from);
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]").filter(([p,s],i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0][0]===further[0]&&o[0][1]===further[1]))return false;return true;});
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();


fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let here = select(from);
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel
  // if box, recurse
  let ufboxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let boxes = ufboxes.filter(([p,s],i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0][0]===further[0]&&o[0][1]===further[1]))return false;return true;});
  console.log({ufboxes:ufboxes.Js(),boxes:boxes.Js()});
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();




fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter(([p,s],i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0][0]===further[0]&&o[0][1]===further[1]))return false;return true;});
  console.log({ufhere,here}.Js());
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();





fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) // If every to-go-to-space is free
    return false; // cancel
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) return l;
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall)
    hereLambda();
  // Or just call
  else
    return hereLambda;
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();




fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = ()=>{
    lambdas.forEach(l=>l());
    blocking.forEach((np,sym)=>{let op=vsub(np,vdir);g[np[0]][np[1]]=g[op[0]][op[1]];g[op[0]][op[1]]=".";});
  }
  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    hereLambda();
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    return hereLambda;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();





fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach((np,sym)=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    hereLambda();
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    return hereLambda;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();


fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach((np,sym)=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    hereLambda();
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    return hereLambda;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();




fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    hereLambda();
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    return hereLambda;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();





fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];
  
  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    })
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    return ret;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();







fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    })
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();








fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  blocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    })
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();













fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")}); score();



















fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=ex3.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});
console.log(score());












fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=ex.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});
console.log(score());











fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  // console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    // console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    // console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      // console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    // console.log("Adding directive",{op,np,vdir});
    // console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    // console.log("Running modifications...");
    // console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    // console.log("Done with modifications...");
  }
  // Or just call
  else {
    // console.log("Returning lambda");
    // console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);/*console.log(dir,"\n"+draw()+"\n")*/});console.log(draw()+"\n");
console.log(score());















fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,topCall=true) {
  console.log({dir,vdir,from,topCall})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],false);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (topCall) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});console.log(draw()+"\n");
console.log(score());






















fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,callDepth=0) {
  console.log({dir,vdir,from,callDepth})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    let l=push2(dir,vdir,nexts[i],callDepth+1);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (callDepth===0) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});console.log(draw()+"\n");
console.log(score());























fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,callDepth=0) {
  console.log({dir,vdir,from,callDepth})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    if (callDepth>200) throw new Error("Too deep.");
    let l=push2(dir,vdir,nexts[i],callDepth+1);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (callDepth===0) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});console.log(draw()+"\n");
console.log(score());
























fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,callDepth=0) {
  console.log({dir,vdir,from,callDepth})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    if (callDepth>200) throw new Error("Too deep.");
    let l=push2(dir,vdir,nexts[i],callDepth+1);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (callDepth===0) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{
      g[x][y]=sym;
    });
    pos=vadd(pos,vdir);
    if (g.flat().join("").replaceAll("[]","").match(/[[\]]/)){
      console.log("Broken Box!\n"+draw());
      throw new Error("Mismatched Boxes!");
    }
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});console.log(draw()+"\n");
console.log(score());


















fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,callDepth=0) {
  console.log({dir,vdir,from,callDepth})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    console.log("Recursing...");
    if (callDepth>200) throw new Error("Too deep.");
    let l=push2(dir,vdir,nexts[i],callDepth+1);
    if (!l) {
      console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    console.log("Adding directive",{op,np,vdir});
    console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (callDepth===0) {
    console.log("Running modifications...");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{if (sym===".")g[x][y]=sym;});
    ret.forEach(([x,y,sym])=>{if (sym!==".")g[x][y]=sym;});
    pos=vadd(pos,vdir);
    if (g.flat().join("").replaceAll("[]","").match(/[[\]]/)){
      console.log("Broken Box!\n"+draw());
      throw new Error("Mismatched Boxes!");
    }
    console.log("Done with modifications...");
  }
  // Or just call
  else {
    console.log("Returning lambda");
    console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);console.log(dir,"\n"+draw()+"\n")});console.log(draw()+"\n");
console.log(score());





















fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i=fs.readFileSync("input.txt")+"";

ex = "##########\n#..O..O.O#\n#......O.#\n#.OO..O.O#\n#..O@..O.#\n#O#..O...#\n#O..O..O.#\n#.OO.O.OO#\n#....O...#\n##########\n\n<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^"
ex2="########\n#..O.O.#\n##@.O..#\n#...O..#\n#.#.O..#\n#...O..#\n#......#\n########\n\n<^^>>>vv<v>>v<<"
ex3 = "#######\n#...#.#\n#.....#\n#..OO@#\n#..O..#\n#.....#\n#######\n\n<vv<<^^<<^^"

draw=()=>g.map((row,i)=>row.map((c,j)=>i==pos[0]&&j==pos[1]?"@":c).join("")).join("\n")
get=([x,y])=>g[x][y]
score=()=>g.map((row,x)=>row.map((c,y)=>c==="O"||c==="["?100*x+y:0)).flat().sum()

function select(pos){
  // console.log({select:{pos}})
  let sym=get(pos);
  if (sym==="[")
    return [pos,vadd(pos,dirs4[0])];
  if (sym==="]")
    return [pos,vadd(pos,dirs4[2])];
  return [pos];
}
function push2(dir,vdir=dirs4[">v<^".indexOf(dir)],from=pos,callDepth=0) {
  // console.log({dir,vdir,from,callDepth})
  // select here
  let ufhere = select(from);
  let here = ufhere.filter((p,i,arr)=>{let further=vadd(p,vdir);if(arr.find(o=>o[0]===further[0]&&o[1]===further[1]))return false;return true;});
  let blocking = here.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  // console.log({ufhere,here,blocking}.Js());
  // if wall, cancel
  if (blocking.some(([p,sym])=>sym==="#")) { // If every to-go-to-space is free
    // console.log("Base case: Wall");
    return false; // cancel
  }
  // if box, recurse
  let boxes = blocking.filter(a=>a[1]==="["||a[1]==="]");
  let lambdas = [];
  let nexts = boxes.map(([p,sym])=>select(p)).flat().map(a=>a.Js()).uniq().map(a=>a.Jp());
  for (let i=0; i<nexts.length; i++) {
    // console.log("Recursing...");
    if (callDepth>200) throw new Error("Too deep.");
    let l=push2(dir,vdir,nexts[i],callDepth+1);
    if (!l) {
      // console.log("From below: returning",{l});
      return l;
    }
    else lambdas.push(l);
  }
  lambdas=lambdas.flat();
  // if all can move forward, move forward (pass lambda up, or call)
  let hereLambda = [];
  let ufblocking = ufhere.map(p => vadd(p,vdir)).map(np=>[np,get(np)]);
  ufblocking.forEach(([np,sym])=>{
    let op=vsub(np,vdir);
    // console.log("Adding directive",{op,np,vdir});
    // console.log({gop:get(op),gnp:get(np)});
    hereLambda.push([np[0],np[1],get(op)]);
    hereLambda.push([op[0],op[1],"."]);
  });

  let ret=[...lambdas,...hereLambda];

  // pass lambda up
  if (callDepth===0) {
    // console.log("Running modifications...");
    // console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    ret.forEach(([x,y,sym])=>{if (sym===".")g[x][y]=sym;});
    ret.forEach(([x,y,sym])=>{if (sym!==".")g[x][y]=sym;});
    pos=vadd(pos,vdir);
    if (g.flat().join("").replaceAll("[]","").match(/[[\]]/)){
      // console.log("Broken Box!\n"+draw());
      throw new Error("Mismatched Boxes!");
    }
    // console.log("Done with modifications...");
  }
  // Or just call
  else {
    // console.log("Returning lambda");
    // console.log(`[\n  ${ret.map(a=>a.Js()).join(",\n  ")}\n]`);
    return ret;
  }
}



[room,attempts]=i.s('\n\n'); attempts=attempts.replaceAll("\n",""); room=[...room].map(a=>a==="#"?"##":a==="O"?"[]":a==="@"?"@.":a==="."?"..":a).join("");g=room.grid(); pos=room.gridl().find(a=>a[1]=="@")[0].Jp();g[pos[0]][pos[1]]=".";     console.log(draw()+"\n");[...attempts].forEach(dir=>{push2(dir);/*console.log(dir,"\n"+draw()+"\n")*/});console.log(draw()+"\n");
console.log(score());

