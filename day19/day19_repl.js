eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/19/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
[possible,lines]=i.s`\n\n`
[possible,lines]=i.s`\n\n`; [possible,lines]=[possible.split(", "),lines.s`\n`]
RegExp("^("+possible.join("|")+")+$")
pr = RegExp("^("+possible.join("|")+")+$")
lines.map(a=>a.match(pr)).sum()
lines.map(a=>a.match(pr))
lines.map(a=>a.match(pr)??false)
lines.map(a=>!!a.match(pr)).sum()
part 1
lines.filter(a=>!!a.match(pr))
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){set.map(a=>a[0].length===0?[a]:patterns.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})()
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})()
possible="r, wr, b, g, bwu, rb, gb, br".split(", ")
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){console.log(set.ofe())set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){console.log(set.ofe());set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){console.log(set.OfE())set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];while(set.length>1){console.log(set.OfE());set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:null)).flat().filter(a=>a).groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])])};return set[0][1]})("brwrr")

/**** NODEJS REPL CRASHED ****/

eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/19/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
[possible,lines]=i.s`\n\n`; [possible,lines]=[possible.split(", "),lines.s`\n`];
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>a[0].length===0?[a]:possible.map(b=>a[0].startsWith(b)?[a[0].slice(b.length),a[1]]:false).filter(a=>a)).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>a[0].length===0?[a]:possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret})}}).filter(a=>a)).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret})}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}); console.log({reto}); return reto.filter(a=>a)}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}); console.log({reto,retof:reto.filter(a=>a)}); return reto.filter(a=>a)}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
possible="r, wr, b, g, bwu, rb, gb, br".split(", ")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("brwrr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("ubwu")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("gbbr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<20){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];console.log("match found:",{a,b,ret}); return ret}}).filter(a=>a); console.log({reto}); return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); console.log(set.OfE())};return set[0][1]})("rrbgbr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<=str.length){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];/*console.log("match found:",{a,b,ret});*/ return ret}}).filter(a=>a); /*console.log({reto});*/ return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); /*console.log(set.OfE())*/};return set[0][1]})("rrbgbr")
(patterns=(str)=>{set=[[str,1],["",0]];let i=0;while(set.length>1&&i++<=str.length){console.log(set.OfE());set =set.map(a=>{if(a[0].length===0)return[a];let reto=possible.map(b=>{if(a[0].startsWith(b)){let ret=[a[0].slice(b.length),a[1]];/*console.log("match found:",{a,b,ret});*/ return ret}}).filter(a=>a); /*console.log({reto});*/ return reto}).flat().groupBy(a=>a[0]).map(a=>[a[0],a[1].sum(a=>a[1])]); /*console.log(set.OfE())*/};return set[0][1]})("rrbgbr")
[possible,lines]=i.s`\n\n`; [possible,lines]=[possible.split(", "),lines.s`\n`];
lines.map(patterns).sum()
part 2