eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/24/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
[init,ops]=i.s`\n\n`
init.s`\n`.map(a=>a.split(": "))
init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]}`)
init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]};`).join()
init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]};`).join("")
init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]};`).join("")
defined = init.s`\n`.map(a=>a.split(": ")[0])
ops.s`\n`.map(a=>a)
ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[3],a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]])
ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]])
ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]])
ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]);
defined = init.s`\n`.map(a=>a.split(": ")[0]);
defined = init.s`\n`.map(a=>a.split(": ")[0]); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]);
str = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]};`).join()
str = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]};`).join(""); defined = init.s`\n`.map(a=>a.split(": ")[0]); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]);
str = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]}`); defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}
eval(str.join(";"))
[...defined].filter(a=>a.startsWith("z")).sort().map(a=>eval(a))
_.join("")
BigInt("0b"+_)
str = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]}`); defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; eval(str.join(";")); BigInt("0b"+([...defined].filter(a=>a.startsWith("z")).sort().map(a=>eval(a)).reverse().join("")))
str
str = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]}`).sort(); defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; eval(str.join(";")); BigInt("0b"+([...defined].filter(a=>a.startsWith("z")).sort().map(a=>eval(a)).reverse().join("")))
str
part 1
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>`${a[0]}=${a[1]}`).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; eval([...str1,...str2].join(";"));
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>a[0]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; run=()=>{eval([...str1,...str2].join(";"));return [...defined].sort().map(a=>[a,eval(a)])}
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>a[0]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; run=(str1)=>{eval([...str1,...str2].join(";"));return [...defined].sort().map(a=>[a,eval(a)])}
run(str1.map(a=>a+"=0"))
run(str1.map(a=>a+"=0")).filter(a=>a[1]===0)
run(str1.map(a=>a+"=0")).filter(a=>a[1]===1)
str1.map(a=>run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1))

str1.map(a=>run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0]))
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])])
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([in,out])=>out.includes("z"+in.slice(1)))
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>out.includes("z"+i.slice(1)))
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1)))
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1)))
_.map(a=>a[1]).flat().groupBy(a=>a).map(a=>[a[0],a[1].length])
str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1)))
errorSize=()=>str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0")).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1))).length
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>a[0]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; run=(str1=str1,str2=str2)=>{eval([...str1,...str2].join(";"));return [...defined].sort().map(a=>[a,eval(a)])}

errorSize=(str2)=>str1.map(a=>[a,run(str1.map(b=>a===b?b+"=1":b+"=0"),str2).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1))).length
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>a[0]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; run=(strA=str1,strB=str2)=>{eval([...strA,...strB].join(";"));return [...defined].sort().map(a=>[a,eval(a)])}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>a[0]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row.join(""));ops2.splice(ops2.indexOf(row),1)})}; run=(strA=str1,strB=str2)=>{eval([...strA,...strB].join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0])}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})}; run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0])}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})}; run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort()}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})}; run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)}; run()
[...defined].filter(a=>"xyz".includes(a[0]))
[...defined].filter(a=>"xyz".includes(a[0])).slice(100)
range([...defined].filter(a=>"xyz".includes(a[0])).max(a=>+a.slice(1),true)).map(a=>(a+"").padStart(2,"0"))
testCases = range([...defined].filter(a=>"xyz".includes(a[0])).max(a=>+a.slice(1),true)).map(a=>(a+"").padStart(2,"0"))
str1.map(a=>[a[0],run(str1.map(b=>a[0]===b[0]?[b[0]+"=1"]:[b[0]+"=0"]),str2).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1))).length
str1.map(a=>[a[0],run(str1.map(b=>a[0]===b[0]?[b[0]+"=1"]:[b[0]+"=0"]),str2).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1)))
str1
str2
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(ops2) run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [...defined].sort().map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map(a=>BigInt("0b"+a.join(""))),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join(""))]),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join(""))]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run()
str1.map(a=>[a[0],run(str1.map(b=>a[0]===b[0]?[b[0]+"=1"]:[b[0]+"=0"]),str2).filter(a=>a[1]===1).map(a=>a[0])]).filter(([i,out])=>!out.includes("z"+i.slice(1)))
run()
run(str1.map(a=>[a[0]+"=0"]))
run(str1.map(a=>[a[0]+"=1"]))
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run()
str1
run(str1.map(a=>[a[0]+"=1"]),str2)
run(str1.map(a=>[a[0]+"=1"]))
run()
run()
run(str1.map(a=>[a[0]+"=1"]))
maxVal=0x1fffffffffff
run2=(x,y)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"]))
run2(1)
run2(0)
run2(2)
run2(3)
run2=(x,y)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"]))
run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"]))
run2(3,5)
time(()=>run2(3,5))
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2()]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {ops2.filter(a=>defined.has(a[2])&&defined.has(a[4])).forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
range(45).map(BigInt).map(a=>run2(a))
range(45).map(BigInt).map(a=>run2(2n**a))
range(45).map(BigInt).map(a=>[2n**a,run2(2n**a)]).filter(a=>a[0]!=BigInt("0x"+a[1][0].z))
range(45).map(BigInt).map(a=>[a,run2(2n**a)]).filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z))
range(45).map(BigInt).map(a=>[a,run2(2n**a)]).filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).flat()
range(45).map(BigInt).map(a=>[a,run2(2n**a)]).filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
range(45).map(BigInt).map(a=>[[a,run2(2n**a)],[a,run2(0,2n**a)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
range(45).map(BigInt).map(a=>[[a,run2(2n**a)],[a,run2(0,2n**a)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1]).flat().filter(a=>!"xy".includes(a[0]))
problems = range(45).map(BigInt).map(a=>[[a,run2(2n**a)],[a,run2(0,2n**a)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1]).flat().filter(a=>!"xy".includes(a[0]))
cart(problems)
problems2=cart(problems).filter(a=>a[0]!==a[1])
swap=([a,b])=>str2
str2[0]
swap=(arr)=>str2.map(a=>arr.includes(a[0])?[arr[!arr.indexOf(a[0])],...a.slice(1)]:a.slice())
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1]).flat().filter(a=>!"xy".includes(a[0]))
swap=(arr)=>dag(str1,str2.map(a=>arr.includes(a[0])?[arr[!arr.indexOf(a[0])],...a.slice(1)]:a.slice())(
swap=(arr)=>dag(str1,str2.map(a=>arr.includes(a[0])?[arr[!arr.indexOf(a[0])],...a.slice(1)]:a.slice()))
str2
swap=(arr)=>redag(str1,str2.map(a=>arr.includes(a[0])?[arr[!arr.indexOf(a[0])],...a.slice(1)]:a.slice()))
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {let toAdd=ops2.filter(a=>defined.has(a[2])&&defined.has(a[4]));if(toAdd.length===0)return null;toAdd.forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"])); [run(),run2(1,2)]
swap(["trq","z04"])
problems2.map(swap)
problems2.map(swap).filter(a=>a)
problems2.map(swap).filter(a=>a).length
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {let toAdd=ops2.filter(a=>defined.has(a[2])&&defined.has(a[4]));if(toAdd.length===0)return null;toAdd.forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0,str3=str2)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"]),str3); [run(),run2(1,2)]
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1]).flat().filter(a=>!"xy".includes(a[0]))
problems2.map(swap).filter(a=>a).map(a=>a.Js(null,2))
fs.writeFileSync("inspect.json",problems2.map(swap).filter(a=>a).Js(null,2))
swap=(arr)=>redag(str1,str2.map(a=>arr.includes(a[0])?[arr[+!arr.indexOf(a[0])],...a.slice(1)]:a.slice()))
badness(problems2.map(swap).filter(a=>a)[3])
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1].filter(a=>!"xy".includes(a[0]))
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1].filter(a=>!"xy".includes(a[0])))
badness(problems2.map(swap).filter(a=>a)[3])
problems2.map(swap).filter(a=>a).map(a=>badness(a).length)
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)],[2n*a,run2(2n**a,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1].filter(a=>!"xy".includes(a[0])))
badness(str2)
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)],[a+1n,run2(2n**a,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1].filter(a=>!"xy".includes(a[0])))
badness(str2)
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)],[a+1n,run2(2n**a,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness(str2)
[[1,0],[0,1],[1,1],[3,1],[1,3]]
badness(swap(["z31","z32"]))
badness(swap(["mfq","fqm"]))
badness(swap(["mfq","csf"]))
badness(swap(["z32","z31"]))
badness(swap([]))
badness(swap(["rrs","rvc"])) //nsm
str2 = swap(["rrs","rvc"]);
badness(swap([]))
badness(swap(["njq","vcg"]))//tnm
str2 = swap(["njq","vcg"]);
badness(swap([]))
badness(swap(["z09","wpr"]))//tcs rkf
str2 = swap(["z09","wpr"]);
badness(swap([]))
str2 = swap(["z09","wpr"]);
badness(swap([]))
badness(swap(["z09","tcs"]))//tcs rkf
str2 = swap(["z09","tcs"]);
badness(swap(["z09","tcs"]))//tcs rkf
badness(swap([]))
badness(swap(["bfp","z20"]))
badness(swap(["z20","jgb"]))
"rrs rvc njq vcg z09 tcs z20 jgb".split(" ").sort().join()
str1 = init.s`\n`.map(a=>a.split(": ")).map(a=>[a[0],"=",a[1]]).sort(); str2=[]; defined = init.s`\n`.map(a=>a.split(": ")[0]).set(); ops2=ops.s`\n`.map(a=>a.split(" ")).map(a=>[a[4],"=",a[0],a[1]==="OR"?"|":a[1]==="AND"?"&":a[1]==="XOR"?"^":a[1],a[2]]); redag=(str1,ops2)=>{let str2=[];defined=str1.map(a=>a[0]).set();while (ops2.length) {let toAdd=ops2.filter(a=>defined.has(a[2])&&defined.has(a[4]));if(toAdd.length===0)return null;toAdd.forEach(row=>{defined.add(row[0]);str2.push(row);ops2.splice(ops2.indexOf(row),1)})};return str2}; str2=redag(str1,ops2); run=(strA=str1,strB=str2)=>{eval([...strA,...strB].map(a=>a.join("")).join(";"));return [[..."xyz"].map(a=>[...defined].filter(b=>b.startsWith(a)).sort().reverse().map(a=>eval(a))).map((a,i)=>["xyz"[i],BigInt("0b"+a.join("")).toString(16)]).OfE(),[...defined].map(a=>[a,eval(a)]).filter(a=>a[1]).map(a=>a[0]).sort((a,b)=>a.startsWith("z")^b.startsWith("z")?(a>b?-1:1):a>b?1:-1)]}; run2=(x=0,y=0,str3=str2)=>run(str1.map(a=>[a[0][0]==="x"&&BigInt(x)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0][0]==="y"&&BigInt(y)&(2n**BigInt(a[0].slice(1)))?a[0]+"=1":a[0]+"=0"]),str3); [run(),run2(1,2)]
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)],[a+1n,run2(2n**a,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
[[1,0],[0,1],[1,1],[3,1],[1,3]]
[[1,0],[0,1],[1,1],[3,1],[1,3]].map(test=>run2(test[0],test[1]))
badness =(swpd)=> range(45).map(BigInt).map(a=>[[a,run2(2n**a,0,swpd)],[a,run2(0,2n**a,swpd)],[a+1n,run2(2n**a,2n**a,swpd)]]).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
[[1,0],[0,1],[1,1],[3,1],[1,3]]
badness =(swpd)=> range(45).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(test=>[[a,test],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(test=>[[a,test],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,test],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,test],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0][0])!=BigInt("0x"+a[0][1][0].z)).map(a=>a[1][1])
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,test],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0][0])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness(swap([]))
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,[...test,test[0]+test[1]]],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0][0][0]*a[0][1][2])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,[...test,test[0]+test[1]]],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0][0]*a[0][1][2])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1])
badness(swap([]))
badness(swap([])).sort()
badness =(swpd)=> range(44).map(BigInt).map(a=>[[1,0],[0,1],[1,1],[3,1],[1,3]].map(a=>a.map(BigInt)).map(test=>[[a,[...test,test[0]+test[1]]],run2(test[0]*(2n**a),test[1]*(2n**a),swpd)])).flat().filter(a=>(2n**a[0][0]*a[0][1][2])!=BigInt("0x"+a[1][0].z)).map(a=>a[1][1]).sort()
badness(swap([]))
badness(swap(["rrs","rvc"]))
str2 = swap(["rrs","rvc"]);
badness(swap([]))
badness(swap(["njq","vcg"]))
badness(swap([]))
badness(swap(["njq","vcg"])).slice(-5)
badness(swap(["njq","vcg"])).slice(-10)
badness(swap(["njq","vcg"]))
badness(swap(["njq","vcg"]))
badness(swap([]))
badness(swap([])).slice(-11)
badness(swap([])).slice(-10)
badness(swap([])).slice(-10).filter(a=>!a.includes("njq"))
badness(swap(["njq","tnm"]))
badness(swap([])).slice(-10).filter(a=>!a.includes("njq"))
badness(swap(["njq","vcg"]))
badness(swap(["njq","z23"]))
badness(swap(["njq","z25"]))
badness(swap([])).slice(-10).filter(a=>!a.includes("njq"))
badness(swap(["njq","cnp"])).filter(a=>a.includes("z24")||a.includes("z25"))
badness(swap([])).slice(-10).filter(a=>!a.includes("njq"))
_.flat().uniq().sort().join()
"cnp,hrk,jnh,kkp,knh,smg,tnm,vcg,vvb,z24,z25".s`,`.map(a=>{try{return badness(swap(["njq",a])).filter(a=>a.includes("z24")||a.includes("z25"))}catch(e){return null}})
"cnp,hrk,jnh,kkp,knh,smg,tnm,vcg,vvb,z24,z25".s`,`.map(a=>{try{return badness(swap(["njq",a])).filter(a=>a.includes("z24")||a.includes("z25")).length}catch(e){return null}})
badness(swap([])).slice(-10)
_.flat().uniq().sort().join()
cart("cnp,hrk,jnh,kkp,knh,njq,qgb,smg,tnm,vcg,vvb,z24,z25".s`,`).filter(([a,b])=>a>b).map(([a,b])=>{try{return badness(swap([a,b])).filter(a=>a.includes("z24")||a.includes("z25")).length}catch(e){return null}})
cart("cnp,hrk,jnh,kkp,knh,njq,qgb,smg,tnm,vcg,vvb,z24,z25".s`,`).filter(([a,b])=>a>b).map(([a,b])=>{try{return [[a,b],badness(swap([a,b])).filter(a=>a.includes("z24")||a.includes("z25")).length]}catch(e){return null}}).filter(a=>a).filter(a=>a[1]===0)
badness(swap(["vcg","z24"]))
str2 = swap(["z24","vcg"]);
badness(swap([]))
(findSwap=(syma,symb)=>badness(swap([])).filter(a=>a.includes(syma)||a.includes(symb)).flat().uniq().sort().filter(a=>!"xy".includes(a[0])))("z21","z20")
(findSwap=(syma,symb)=>cart(badness(swap([])).filter(a=>a.includes(syma)||a.includes(symb)).flat().uniq().sort().filter(a=>!"xy".includes(a[0]))).filter(([a,b])=>a>b))("z21","z20")
(findSwap=(syma,symb)=>cart(badness(swap([])).filter(a=>a.includes(syma)||a.includes(symb)).flat().uniq().sort().filter(a=>!"xy".includes(a[0]))).filter(([a,b])=>a>b).map(([a,b])=>{try{return [[a,b],badness(swap([a,b])).filter(a=>a.includes("z24")||a.includes("z25")).length]}catch(e){return null}}).filter(a=>a).filter(a=>a[1]===0))("z21","z20")
(findSwap=(syma,symb)=>cart(badness(swap([])).filter(a=>a.includes(syma)||a.includes(symb)).flat().uniq().sort().filter(a=>!"xy".includes(a[0]))).filter(([a,b])=>a>b).map(([a,b])=>{try{return [[a,b],badness(swap([a,b])).filter(a=>a.includes(syma)||a.includes(symb)).length]}catch(e){return null}}).filter(a=>a).filter(a=>a[1]===0))("z21","z20")
str2 = swap(["z20","jgb"]);
badness(swap([]))
(findSwap=(syma,symb)=>cart(badness(swap([])).filter(a=>a.includes(syma)||a.includes(symb)).flat().uniq().sort().filter(a=>!"xy".includes(a[0]))).filter(([a,b])=>a>b).map(([a,b])=>{try{return [[a,b],badness(swap([a,b])).filter(a=>a.includes(syma)||a.includes(symb)).length]}catch(e){return null}}).filter(a=>a).filter(a=>a[1]===0))("z09","z10")
"z09 rkf z20 jgb z24 vcg rrs rvc".s` `.sort().join()