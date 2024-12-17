
// assert A > 0
// B = (A%8n)^5n
// B ^= (A>>B)%8n
// B ^= 6n
// assert B === 3n
// A >>= 3n

// while(A>0n):
//   B = (A%8n)^5n    // B in [0,8]
//   B ^= (A>>B)%8n
//   B ^= 6n
//   if (goal[i++]!==B) {if (i>7)console.log(i,"matching for",initialA,initialA.toString(2).padStart(30));return false;}
//   if (print) console.log(B);
//   A >>= 3n

// 2,4, B = A%8
// 1,5, B ^= 5
// 7,5, C = A/B**2
// 4,3, B ^= C
// 1,6, B ^= 6
// 0,3, A = A/8
// 5,5, print(B%8)
// 3,0, while (A) {}

n8=[0n,1n,2n,3n,4n,5n,6n,7n];

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

// 2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0

// console.log(push());
console.log(push(push(),3n));
// console.log(push(push(push(),3n),5n));





brute=(possible,keys,done=(A,B)=>A===0n)=>{
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


goal=[2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0].map(BigInt);
time(()=>goal.slice().reverse().reduce((c,n)=>push(c,n),undefined).map(a=>a[0]+"").uniq().min())


