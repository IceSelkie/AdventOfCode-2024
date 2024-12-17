
function runProgram3(initialA,print=false){
  if (initialA%BigInt(1e6)===0n)console.log({initialA:Number(initialA)/1e6});
  let A=BigInt(initialA);
  let B=0;
  let i=0;
  let goal=[2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0].map(BigInt);
  while(A>0n) {
    B = (A%8n)^5n
    B ^= (A>>B)%8n
    B ^= 6n
    if (goal[i++]!==B) {if (i>7)console.log(i,"matching for",initialA,initialA.toString(2).padStart(30));return false;}
    if (print) console.log(B);
    A >>= 3n
  }
  console.log("Halting. i =",i,"of",goal.length);
  return i===goal.length;
}


let j=62217n
while(!runProgram3(j))
  j++;
console.log("DONE: "+j)

// runProgram3(61156655,true);






