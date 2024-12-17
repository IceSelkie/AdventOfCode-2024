eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/17/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/17/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
opAdv=(arg)=>BigInt(A)/(2n**BigInt(arg))
[A,B,C,...program]=i.nums()
opAdv=(arg)=>A=BigInt(A)/(2n**BigInt(arg))
opBxl=(arg)=>B^=arg
opAdv=(arg)=>A/=2n**arg
opBst=(arg)=>B=arg%8n
opJnz=(arg)=>{if(A!==0n)ptr=arg-2;}
[A,B,C,...program]=i.nums().map(BigInt);ptr=0;
opBxc=(arg)=>B^=C
opOut=(arg)=>output.push(combo(arg%8n))
[A,B,C,...program]=i.nums().map(BigInt);ptr=0;output=[];
opAdv=(arg)=>A/=2n**combo(arg)
opBst=(arg)=>B=combo(arg)%8n
combo=arg=>[0,1,2,3,A,B,C][arg]
combo=arg=>[0n,1n,2n,3n,A,B,C][arg]
opBdv=arg=>B=A/(2**combo(arg))
opCdv=arg=>C=A/(2**combo(arg))
ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];
opAdv=(arg)=>A/=2n**combo(arg)
opBxl=(arg)=>B^=arg
opBst=(arg)=>B=combo(arg)%8n
opJnz=(arg)=>{if(A!==0n)ptr=Number(arg)-2;}
opBxc=(arg)=>B^=C
opOut=(arg)=>output.push(combo(arg%8n))
opBdv=arg=>B=A/(2n**combo(arg))
opCdv=arg=>C=A/(2n**combo(arg))

ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];
C=9n;ops[2](6n)
[A,B,C]
A=10n
ops[5](0n)
ops[5](1n)
ops[5](4n)
output
opOut=(arg)=>output.push(combo(arg)%8n)
runProgram=(A,B,C,...prog)=>{
  ptr=0;
  output=[];
  while (prog[ptr]!==undefined) {
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
  }
  return output.join()
}
ex="Register A: 729\nRegister B: 0\nRegister C: 0\n\nProgram: 0,1,5,4,3,0"
runProgram(...ex.nums().map(BigInt))
exs1="0 0 9 2 6"
runProgram(...exs1.nums().map(BigInt))
runProgram=(A,B,C,...prog)=>{
  ptr=0;
  output=[];
  console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    console.log({A,B,C,ptr,output});
  }
  return output.join();
}
runProgram(...exs1.nums().map(BigInt))
runProgram=(A,B,C,...prog)=>{
  ptr=0;
  output=[];
  console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    console.log({A,B,C,ptr,output});
  }
  console.log("HALT");
  return output.join();
}
runProgram(...exs1.nums().map(BigInt))
delete A
delete B
delete C

runProgram=(A,B,C,...prog)=>{
  opAdv=(arg)=>A/=2n**combo(arg)
  opBxl=(arg)=>B^=arg
  opBst=(arg)=>B=combo(arg)%8n
  opJnz=(arg)=>{if(A!==0n)ptr=Number(arg)-2;}
  opBxc=(arg)=>B^=C
  opOut=(arg)=>output.push(combo(arg%8n))
  opBdv=arg=>B=A/(2n**combo(arg))
  opCdv=arg=>C=A/(2n**combo(arg))
  ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];

  ptr=0;
  output=[];
  console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    console.log({A,B,C,ptr,output});
  }
  console.log("HALT");
  return output.join();
}
runProgram=(A,B,C,...prog)=>{
  combo=arg=>[0n,1n,2n,3n,A,B,C][arg]
  opAdv=(arg)=>A/=2n**combo(arg)
  opBxl=(arg)=>B^=arg
  opBst=(arg)=>B=combo(arg)%8n
  opJnz=(arg)=>{if(A!==0n)ptr=Number(arg)-2;}
  opBxc=(arg)=>B^=C
  opOut=(arg)=>output.push(combo(arg%8n))
  opBdv=arg=>B=A/(2n**combo(arg))
  opCdv=arg=>C=A/(2n**combo(arg))
  ops=[opAdv,opBxl,opBst,opJnz,opBxc,opOut,opBdv,opCdv];

  ptr=0;
  output=[];
  console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    console.log({A,B,C,ptr,output});
  }
  console.log("HALT");
  return output.join();
}

runProgram(...exs1.nums().map(BigInt))
exs2="10 0 0 5 0 5 1 5 4"
runProgram(...exs2.nums().map(BigInt))
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
  console.log({A,B,C,ptr,output});
  while (prog[ptr]!==undefined) {
    console.log(`Running op`,prog[ptr],`with arg`,prog[ptr+1]);
    ops[prog[ptr]](prog[ptr+1]);
    ptr+=2;
    console.log({A,B,C,ptr,output});
  }
  console.log("HALT");
  return output.join();
}
runProgram(...exs2.nums().map(BigInt))
runProgram(..."2024 0 0 0 1 5 4 3 0".nums().map(BigInt))
runProgram(...ex.nums().map(BigInt))
runProgram(...i.nums().map(BigInt))
part 1