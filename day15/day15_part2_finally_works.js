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
