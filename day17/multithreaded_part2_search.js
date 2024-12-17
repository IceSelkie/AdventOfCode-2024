fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
input=fs.readFileSync("input.txt")+"";

runProgram2=(A,B,C,...prog)=>{
  const initialA=A;
  if (initialA%100000n===0n)console.log("START",Number(initialA)/1e6);
  let failed=false;
  combo=arg=>[0n,1n,2n,3n,A,B,C][arg]
  opAdv=(arg)=>A/=2n**combo(arg)
  opBxl=(arg)=>B^=arg
  opBst=(arg)=>B=combo(arg)%8n
  opJnz=(arg)=>{if(A!==0n)ptr=Number(arg)-2;}
  opBxc=(arg)=>B^=C
  opOut=(arg)=>{
    output.push(combo(arg)%8n);
    if (output.length>prog.length) failed=true;
    else if (output.last !== prog[output.length-1]) failed=true;
    else {
      if (output.length>=5)
        console.log({A_bin:initialA.toString(2).padStart(30),initialA,matching:output.length});
    }
  }
  opBdv=arg=>B=A/(2n**combo(arg))
  opCdv=arg=>C=A/(2n**combo(arg))
  ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];

  ptr=0;
  output=[];
  let stateHistory = new Set();
  // console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    // console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    // console.log({A,B,C,ptr,output});
    if (failed) return false;
    let state = [A,B,C,ptr]+"";
    if (stateHistory.has(state)) return false;
    stateHistory.add(state);
    if (stateHistory.size%100000===0)
      console.log({stateHistorySize:stateHistory.size/1e6})
  }
  console.log("HALT",initialA);
  if (prog.join()===output.join()) {
    console.log("Found!",initialA);
    return true;
  }
  return false;
}

time(()=>{for(let j=(+process.argv[2])*1e6; j<BigInt((+process.argv[2]+5)*1e6)&&!runProgram2(BigInt(j),...(input.nums().map(BigInt).slice(1))); j++);});
























