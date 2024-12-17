
fs=require("fs");
eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
input = fs.readFileSync("input.txt");

split=a=>{let as=a+"";let l=as.length/2; return [+as.slice(0,l),+as.slice(l)]}
step = a=>a===0?[1]:(a+"").length%2==0?split(a):[a*2024];
stepm = memoize(step);
blink=code=>code.map(a=>stepm(a)).flat()

memd = new Map();
blinkn=(c,steps)=>{
  let l = [[[c,1]]];

  if (memd.has(c))
    l = memd.get(c);

  while (!l[steps]) {
    let prev = l.last;
    console.log({prev});
    let stepped = prev.map(([v,mul])=>stepm(v).map(newV=>[newV,mul]));
    console.log({stepped});
    let next = stepped.flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]);
    console.log({next});
    l.push(next);
  }

  return l[steps];
}
[125,17].map(a=>blinkn(a,25))
_.map(a=>a.map(b=>b[1]).sum()).sum()
stepm(0)
stepm(1)
stepm(2024)
stepm(20)
stepm(24)
blink([125,17])
blink(blink([125,17]))
groupBy([1,1,2],a=>a,a=>a+2)
groupBy([1,1,2],a=>a,true)
(blink2 = marr=>marr.map(a=>[stepm(a[0]),a[1]]))([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])))([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]]).flat()))([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat())([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat().groupBy(a=>a[0],true))([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat().groupBy(a=>a[0],true).map(a=>[a[0][0],a.sum(a=>a[1])]))([[125,1],[17,1]])
(blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat().groupBy(a=>a[0],true).map(a=>[a[0][0],a.sum(a=>a[1])]))([[125,1],[17,1]])
blink2([[125,1],[17,1]])
blink2(_)
blink2(_)
blink2(_)
blink2(_)
blink2(_)
range(25).reduce(a=>blink2(a),[[125,1],[17,1]])
range(25).reduce(a=>blink2(a),[[125,1],[17,1]]).sum(a=>a[1])
range(75).reduce(a=>blink2(a),[[125,1],[17,1]]).sum(a=>a[1])
(input+"").nums()
(input+"").nums().map(a=>[a,1])
range(75).reduce(a=>blink2(a),(input+"").nums().map(a=>[a,1])).sum(a=>a[1])
range(75).reduce(a=>blink2(a),(input+"").nums().map(a=>[a,1])).length