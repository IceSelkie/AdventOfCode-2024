eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = (fs.readFileSync("input.txt")+"").trim();
ex = "###############\n#...#...#.....#\n#.#.#.#.#.###.#\n#S#...#.#.#...#\n#######.#.#.###\n#######.#.#...#\n#######.#.###.#\n###..E#...#...#\n###.#######.###\n#...###...#...#\n#.#####.#.###.#\n#.#...#.#.#...#\n#.#.#.#.#.#.###\n#...#...#...###\n###############";


temp=i; pos = temp.indexOf("E"); temp=temp.replaceAll(/[SE]/g,".");

lv=temp.indexOf("\n")+1;l=([x,y])=>x*lv+y;
lr=x=>[Math.floor(x/lv),x%lv];
d4=dirs4.map(l);
cdot=".".charCodeAt();inBounds=p=>temp[p]===".";
inBounds2=(p,d)=>Math.abs(vsub(lr(p),lr(p+d)).sum())<=1 && p+d>=0 && p+d<temp.length;

stepsToEnd=new Array(temp.length).fill(-1);
queue=[[pos,0]];
stepsToEnd[pos]=0;
while(queue.length) {
  let [p,d]=queue.splice(0,1)[0];
  d4.map(v=>p+v).filter(p=>inBounds(p)&&stepsToEnd[p]==-1).forEach(p=>queue.push([p,stepsToEnd[p]=d+1]));
}

found=[];
for (let p=0;p<temp.length;p++){
  if (!inBounds(p)) continue;
  d4.map(v=>p+v).filter(p=>!inBounds(p)).map(p1=>d4.map(v=>p1+v).filter(inBounds).forEach(p2=>{
    let diff=stepsToEnd[p]-stepsToEnd[p2]-2;
    if (diff>0) {
      if(!found[diff])found[diff]=[];
      found[diff].push(p1);
    }
  }))
};

console.log(`Part 1:`,[...found.entries()].filter(a=>a[1]).map(a=>[a[0],a[1].uniq().length]).filter(a=>a[0]>=100).sum(a=>a[1]));

floodFillFromStart=p=>{
  if (!inBounds(p)) return 0;
  let startingDist = stepsToEnd[p];
  let queue=[[p,0]];
  let been=new Set();
  let found=[];
  while (queue.length) {
    let [p,d]=queue.splice(0,1)[0];
    if (d===20) continue;
    d4.filter(v=>inBounds2(p,v)).map(v=>p+v).filter(p=>!been.has(p)).forEach(p=>{
      been.add(p);
      queue.push([p,d+1]);
      if (inBounds(p)) {
        let diff = startingDist-stepsToEnd[p]-d-1;
        if (diff>0) {
          if (!found[diff])
            found[diff]=0;
          found[diff]++;
        }
      }
    });
  }
  return found;
};

console.log(`Part 2:`,time(()=>range(temp.length).map(p=>{return floodFillFromStart(p)})
.filter(a=>a)
.map(a=>[...a].map(a=>a??0))
.sort((a,b)=>b.length-a.length)
.T
.map((a,i)=>[i,a.sum(a=>a?a:0)])
.filter(a=>a[0]>=100&&a[1])
.sum(a=>a[1])
));
