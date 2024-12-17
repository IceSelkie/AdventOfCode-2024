brute=(possible,keys)=>{
  possible.filter(([A,B])=>{
    let i=0;
    while (i<keys.length) {
      B = (A%8n)^5n
      B ^= (A>>B)%8n
      B ^= 6n
      if (keys[i]!==B) {return false;}
      A >>= 3n
      i++;
    }
    return A===0n;
  })
}
n8=[0n,1n,2n,3n,4n,5n,6n,7n];
n8.map(a=>n8.map(b=>a*8n+b)).flat().map((a,i,arr)=>arr.map(b=>[a,b])).flat()
brute(_,[0n])
brute=(possible,keys)=>{
  return possible.filter(([A,B])=>{
    let i=0;
    while (i<keys.length) {
      B = (A%8n)^5n
      B ^= (A>>B)%8n
      B ^= 6n
      if (keys[i]!==B) {return false;}
      A >>= 3n
      i++;
    }
    return A===0n;
  })
}
c63 = n8.map(a=>n8.map(b=>a*8n+b)).flat().map((a,i,arr)=>arr.map(b=>[a,b])).flat()
c64 = n8.map(a=>n8.map(b=>a*8n+b)).flat().map((a,i,arr)=>arr.map(b=>[a,b])).flat()
brute(c64,[0n])
c64 = n8.map(a=>n8.map(b=>a*8n+b)).flat().map((a,i,arr)=>arr.map(b=>[a*64n+b,0n])).flat()
brute(c64,[0n])
brute(c64,[3n,0n])
brute(c64,[3n])

run = ([A,B])=>{
  let i=0;
  while (i<keys.length) {
    B = (A%8n)^5n
    B ^= (A>>B)%8n
    B ^= 6n
    if (keys[i]!==B) {return false;}
    A >>= 3n
    i++;
  }
  return [A,B];
}
run = ([A,B],keys)=>{
  let i=0;
  while (i<keys.length) {
    B = (A%8n)^5n
    B ^= (A>>B)%8n
    B ^= 6n
    if (keys[i]!==B) {return null;}
    A >>= 3n
    i++;
  }
  return [A,B];
}
brute(c64,[3n]).map(a=>run(a,[3n]))
brute(c64,[3n,0n]).map(a=>run(a,[3n]))

n8=[0n,1n,2n,3n,4n,5n,6n,7n];

push=(possible=n8.map(B=>[0n,B]),key=0n)=>{
  console.log({a:possible});
  // A >>= 3n
  possible = possible.map(([A,B])=>n8.map(v=>[A*8n+v,B])).flat();
  console.log({b:possible});
  // assert B === key
  possible = possible.filter(([A,B])=>B===key);
  console.log({c:possible});
  // B ^= 6n
  possible = possible.map(([A,B])=>[A,B^6n]);
  console.log({d:possible});
  // B ^= (A>>B)%8n
  possible = possible.map(([A,B2])=>n8.filter(B=>(((A>>B)%8n)^B)===B2).map(B=>[A,B])).flat();
  console.log({e:possible});
  // B = (A%8n)^5n
  possible = possible.filter(([A,B])=>B===((A%8n)^5n));
  console.log({f:possible});
  // assert A > 0
  possible = possible.filter(([A,B])=>A>0n);
  console.log({g:possible});
  return possible
}
push()
push().map(a=>run(a,[0n]))
push()//.map(a=>run(a,[0n]))
brute(c64,[3n,0n]).map(a=>run(a,[3n]))
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
brute(c64,[3n,0n]).map(a=>run(a,[3n])).uniq()
brute(c64,[3n,0n]).map(a=>run(a,[3n]))

push=(possible=n8.map(B=>[0n,B]),key=0n)=>{
  console.log({a:possible});
  // A >>= 3n
  possible = possible.map(([A,B])=>n8.map(v=>[A*8n+v,B])).flat();
  console.log({b:possible});
  // assert B === key
  possible = possible.filter(([A,B])=>B===key);
  console.log({c:possible});
  // B ^= 6n
  possible = possible.map(([A,B])=>[A,B^6n]);
  console.log({d:possible});
  // B ^= (A>>B)%8n
  possible = possible.map(([A,B2])=>n8.filter(B=>(((A>>B)%8n)^B)===B2).map(B=>[A,B])).flat();
  console.log({e:possible});
  // B = (A%8n)^5n
  possible = possible.filter(([A,B])=>B===((A%8n)^5n));
  possible = possible.map(([A,B])=>A.toString()).uniq().map(A=>n8.map(B=>[A,B])).flat();
  console.log({f:possible});
  // assert A > 0
  possible = possible.filter(([A,B])=>A>0n);
  console.log({g:possible});
  return possible
}

push()//.map(a=>run(a,[0n]))

push=(possible=n8.map(B=>[0n,B]),key=0n)=>{
  console.log({a:possible});
  // A >>= 3n
  possible = possible.map(([A,B])=>n8.map(v=>[A*8n+v,B])).flat();
  console.log({b:possible});
  // assert B === key
  possible = possible.filter(([A,B])=>B===key);
  console.log({c:possible});
  // B ^= 6n
  possible = possible.map(([A,B])=>[A,B^6n]);
  console.log({d:possible});
  // B ^= (A>>B)%8n
  possible = possible.map(([A,B2])=>n8.filter(B=>(((A>>B)%8n)^B)===B2).map(B=>[A,B])).flat();
  console.log({e:possible});
  // B = (A%8n)^5n
  possible = possible.filter(([A,B])=>B===((A%8n)^5n));
  possible = possible.map(([A,B])=>A.toString()).uniq().map(A=>n8.map(B=>[BigInt(A),B])).flat();
  console.log({f:possible});
  // assert A > 0
  possible = possible.filter(([A,B])=>A>0n);
  console.log({g:possible});
  return possible
}
push().map(a=>run(a,[0n]))
push()//.map(a=>run(a,[0n]))
push(push(),3n)//.map(a=>run(a,[0n]))

push=(possible=n8.map(B=>[0n,B]),key=0n)=>{
  // console.log({a:possible});
  // A >>= 3n
  possible = possible.map(([A,B])=>n8.map(v=>[A*8n+v,B])).flat();
  // console.log({b:possible});
  // assert B === key
  possible = possible.filter(([A,B])=>B===key);
  // console.log({c:possible});
  // B ^= 6n
  possible = possible.map(([A,B])=>[A,B^6n]);
  // console.log({d:possible});
  // B ^= (A>>B)%8n
  possible = possible.map(([A,B2])=>n8.filter(B=>(((A>>B)%8n)^B)===B2).map(B=>[A,B])).flat();
  // console.log({e:possible});
  // B = (A%8n)^5n
  possible = possible.filter(([A,B])=>B===((A%8n)^5n));
  possible = possible.map(([A,B])=>A.toString()).uniq().map(A=>n8.map(B=>[BigInt(A),B])).flat();
  // console.log({f:possible});
  // assert A > 0
  possible = possible.filter(([A,B])=>A>0n);
  // console.log({g:possible});
  return possible
}

goal=[2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0].map(BigInt).reverse();
goal=[2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0].map(BigInt)
goal.reverse()
goal
goal.map(a=>).reverse()
goal.slice().reverse()
goal.slice().reverse()
goal
goal=[2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0].map(BigInt)
goal.slice().reverse().reduce((c,n)=>push(c,n),undefined)
goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0])
goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq()
goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq().min()
time(()=>goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq().min())
time(()=>goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq().min())
105734774294938/1e6
time(()=>"2,4,1,1,7,5,1,4,0,3,4,5,5,5,3,0".nums().map(BigInt).slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq().min())