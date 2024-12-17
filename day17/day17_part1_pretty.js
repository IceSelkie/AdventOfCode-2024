fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
input=fs.readFileSync("input.txt")+"";
runProgram=(A,B,C,...prog)=>{
  combo=arg=>[0n,1n,2n,3n,A,B,C][arg]
  opAdv=(arg)=>A/=2n**combo(arg)
  opBxl=(arg)=>B^=arg
  opBst=(arg)=>B=combo(arg)%8n
  opJnz=(arg)=>{if(A!==0n)ptr=Number(arg)-2;}
  opBxc=(arg)=>B^=C
  opOut=(arg)=>output.push(combo(arg)%8n)
  opBdv=arg=>B=A/(2n**combo(arg))
  opCdv=arg=>C=A/(2n**combo(arg))
  ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];

  ptr=0;
  output=[];
  console.log({A:A.toString(),B:B.toString(),C:C.toString(),ptr,output:output.map(a=>a.toString())}.Js());
  while (prog[ptr]!==undefined) {
    console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
  console.log({A:A.toString(),B:B.toString(),C:C.toString(),ptr,output:output.map(a=>a.toString())}.Js());
  }
  console.log("HALT");
  return output.join();
}

console.log(`Part 1:`,runProgram(...(input.nums().map(BigInt))));