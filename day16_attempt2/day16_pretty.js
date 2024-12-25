eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
input = (fs.readFileSync("input.txt")+"").trim();
example = "###############\n#.......#....E#\n#.#.###.#.###.#\n#.....#.#...#.#\n#.###.#####.#.#\n#.#.#.......#.#\n#.#.#####.###.#\n#...........#.#\n###.#.#####.#.#\n#...#.....#.#.#\n#.#.#.###.#.#.#\n#.....#...#.#.#\n#.###.#.#.#.#.#\n#S..#.....#...#\n###############";

// change this line to run the different inputs.
work = input;
start = work.indexOf("S");
work = work.replaceAll("S",".");

rowSize = work.indexOf("\n")+1;
dirs4m = dirs4.map(a=>a[0]*rowSize+a[1]);

curScore = 0;
maxScore = 0;
done = Infinity;
queue = [[start]];
queueSize = 1;
been = new Map([[start,[0,[]]]]);
endTouched = [];

put=(score, pos)=>{ while (maxScore<score) queue[++maxScore]=[]; queue[score].push(pos); return ++queueSize};
pop=()=>{ while (!queue[curScore].length) curScore++; queueSize--; return queue[curScore].pop()};
get=p=>work[p%work.length];
moves=pos=>{
  let dir=Math.floor(pos/work.length);
  return (
    [
      [pos+dirs4m[(dir+3)%4]+3*work.length,1001],
      [pos+dirs4m[(dir+1)%4]+1*work.length,1001],
      [pos+dirs4m[dir]                    ,   1]
    ]
    .map(([newPos,cost])=>[newPos%(4*work.length),cost,get(newPos)])
    .filter(a=>".E".includes(a[2]))
  );
};

while (done>curScore && queueSize) {
  let here = pop();
  let dests = moves(here);
  console.log({curScore,here,dests});
  for (let i=0; i<dests.length; i++){
    let [newPos, cost] = dests[i];
    let newScore = curScore+cost;

    if (!been.has(newPos)) {
      been.set(newPos,[newScore,[]]);
      put(newScore, newPos);
    }
    let [oldScore, sources] = been.get(newPos);

    if (oldScore<newScore) continue;
    if (oldScore==newScore) sources.push(here);
    if (oldScore>newScore) {
      queue[oldScore] = queue[oldScore].filter(a=>a!==newPos);
      queue[newScore].push(newPos);
      been.set(newPos, [newScore,[here]]);
    }
  }

  if (get(here)==="E") {
    done = curScore+1;
    endTouched.push(here);
  }
};

draw=(arr=[...been.keys()])=>{let beenSet = arr.map(a=>a%work.length).set();console.log([...work].map((a,i)=>beenSet.has(i)?"O":a).join(""))};

console.log(`Part 1:`,done-1);

for (let i=0; i<endTouched.length; i++)
  endTouched.push(...been.get(endTouched[i])[1]);

console.log(`Part 2:`,endTouched.map(a=>a%work.length).uniq().length);
