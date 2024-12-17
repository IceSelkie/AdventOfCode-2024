> eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
> i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/11/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
> i.nums()
> code = i.nums();
> code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024)
> split=a=>{let as=a+"";let l=as.length/2; return [as.slice(0,l),as.slice(l)]}
> split("15")
> split("151")
> split("1515")
> code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat()
> split=a=>{let as=a+"";let l=as.length/2; return [+as.slice(0,l),+as.slice(l)]}
> code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat()
> blink=(code=>code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat())
> range(25).reduce((c,n)=>blink(c),code).length
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> range(75).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> .save day11_repl.js
> eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
> i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/11/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
> code = i.nums();
> split=a=>{let as=a+"";let l=as.length/2; return [+as.slice(0,l),+as.slice(l)]}
> blink=(code=>code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat())
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code)
> blink=code=>code.map(a=>stepm(a)).length
> step = a=>a===0?1:(a+"").length%2==0?split(a):a*2024;
> stepm = memoize(step);
> blink=code=>code.map(a=>stepm(a)).length
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> blink=code=>code.map(a=>stepm(a).flat())
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> stepm(123)
> stepm(1235)
> blink=code=>code.map(a=>stepm(a)).flat()
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> range(75).reduce((c,n)=>{console.log(n);return blink(c)},code).length
> range(25).reduce((c,n)=>{console.log(n);return blink(c)},code)
> _.uniq().length
> blinkn=(c,steps)=>{
>   let l = [[c,1]];
>   if (memd.has(c))
>     let l = memd.get(c);
>   while (!l[steps]) {
>     let prev = l.last;
>     let stepped = prev.map(([v,mul])=>step(v).map(newV=>[newV,mul]));
>     let next = stepped.flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]);
>     l.push(next);
>   }
>   return l[steps];
> }
> blinkn=(c,steps)=>{
>   let l = [[c,1]];
>   if (memd.has(c))
>     l = memd.get(c);
>   while (!l[steps]) {
>     let prev = l.last;
>     let stepped = prev.map(([v,mul])=>step(v).map(newV=>[newV,mul]));
>     let next = stepped.flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]);
>     l.push(next);
>   }
>   return l[steps];
> }
> blinkn(0,3)
> blinkn(0,3)memd = new Map();
> memd = new Map();
> blinkn(0,3)
> fs.writeFileSync("input.txt",i)
> fs=require("fs");
> eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
> input = fs.readFileSync("input.txt");
> split=a=>{let as=a+"";let l=as.length/2; return [+as.slice(0,l),+as.slice(l)]}
> step = a=>a===0?[1]:(a+"").length%2==0?split(a):[a*2024];
> stepm = memoize(step);
> blink=code=>code.map(a=>stepm(a)).flat()
> memd = new Map();
> blinkn=(c,steps)=>{
>   let l = [[[c,1]]];
>   if (memd.has(c))
>     l = memd.get(c);
>   while (!l[steps]) {
>     let prev = l.last;
>     console.log({prev});
>     let stepped = prev.map(([v,mul])=>stepm(v).map(newV=>[newV,mul]));
>     console.log({stepped});
>     let next = stepped.flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]);
>     console.log({next});
>     l.push(next);
>   }
>   return l[steps];
> }
> [125,17].map(a=>blinkn(a,25))
> _.map(a=>a.map(b=>b[1]).sum()).sum()
> stepm(0)
> stepm(1)
> stepm(2024)
> stepm(20)
> stepm(24)
> blink([125,17])
> blink(blink([125,17]))
> groupBy([1,1,2],a=>a,a=>a+2)
> groupBy([1,1,2],a=>a,true)
> (blink2 = marr=>marr.map(a=>[blink(a[0]),a[1]]))([125,17])
> (blink2 = marr=>marr.map(a=>[blink(a[0]),a[1]]))([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>[stepm(a[0]),a[1]]))([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])))([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]]).flat()))([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat())([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat().groupBy(a=>a[0],true))([[125,1],[17,1]])
> (blink2 = marr=>marr.map(a=>stepm(a[0]).map(b=>[b,a[1]])).flat().groupBy(a=>a[0],true).map(a=>[a[0][0],a.sum(a=>a[1])]))([[125,1],[17,1]])
> blink2([[125,1],[17,1]])
> blink2(_)
> blink2(_)
> blink2(_)
> blink2(_)
> blink2(_)
> range(25).reduce(a=>blink2(a),[[125,1],[17,1]])
> range(25).reduce(a=>blink2(a),[[125,1],[17,1]]).sum(a=>a[1])
> range(75).reduce(a=>blink2(a),[[125,1],[17,1]]).sum(a=>a[1])
> (input+"").nums()
> (input+"").nums().map(a=>[a,1])
> range(75).reduce(a=>blink2(a),(input+"").nums().map(a=>[a,1])).sum(a=>a[1])
> range(75).reduce(a=>blink2(a),(input+"").nums().map(a=>[a,1])).length
> .save part3