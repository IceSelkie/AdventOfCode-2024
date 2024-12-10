eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/9/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/10/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
dirs4= "[0,1]/[1,0]/[0,-1]/[-1,0]".split("/").map(a=>a.Jp())
dirs8 = "[0,1]/[-1,1]/[-1,0]/[-1,-1]/[0,-1]/[1,-1]/[1,0]/[1,1]".split("/").map(a=>a.Jp())
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/10/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/10/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.grid()
g = i.grid().map(a=>a.map(Number))
i.gridl()
i.gridl().map(a=>[a[0],+a[1]])
g2 = i.gridl().map(a=>[a[0],+a[1]])
g2.filter(a=>a[1]==0).length
ex="89010123\n78121874\n87430965\n96549874\n45678903\n32019012\n01329801\n10456732"
eg = ex.grid().map(a=>a.map(Number))
eg2 = ex.gridl().map(a=>[a[0],+a[1]])
eg2.filter(a=>a[1]===0).filter(a=>range(1,10).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().map(a=>eg.get(a)==n)),[a]))
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().map(a=>eg.get(a)==n)),[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().map(a=>eg.get(a)==n)),[a])])[0]
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)==n)),[a])])[0]
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)==n)),[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)==n)),[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)==n)),[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{let ret=c.map(c=>dirs4.map(v=>vadd(v,c)).flat();console.log(ret);return ret.filter(a=>eg.get(a)==n))},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{let ret=c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)==n))},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>vadd(v,c)).flat().filter(a=>eg.get(a)===n))
  return ret;
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>vadd(v,c))).flat();
  console.log(ret,ret.filter(a=>eg.get(a)===n));
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{console.log({v,c})return vadd(v,c)})).flat();
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{console.log({v,c});return vadd(v,c)})).flat();
  console.log(ret,ret.filter(a=>eg.get(a)===n));
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  console.log(ret,ret.filter(a=>eg.get(a)===n));
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  console.log({ret,retf:ret.filter(a=>eg.get(a)===n)});
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg.get(a)]);
  console.log({ret});
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]][a[1]]);
  return ret.filter(a=>eg.get(a)===n)
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]][a[1]]]);
  retf = ret.filter(a=>a[1]).map(a=>a[0]);
  console.log({ret,retf});return retf;
eg
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]).map(a=>a[0]);
  console.log({ret,retf});return retf;
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]).map(a=>a[0]);
  console.log({ret,retf});return retf;
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===c).map(a=>a[0]);
  console.log({ret,retf});return retf;
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n).map(a=>a[0]);
  console.log({ret,retf});return retf;
},[a])])
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,2).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n);
  console.log({ret,retf});return retf;
},[a])])
_.flat()
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n);
  console.log({ret,retf});return retf;
},[a])])
_.flat()
eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>{
  console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n).map(a=>a.Js()).uniq().map(a=>a.Jp());
  console.log({ret,retf});return retf;
},[a])])
_.sum(a=>a[1].length)
time(()=>g2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>{
  // console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),g[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n).map(a=>a.Js()).uniq().map(a=>a.Jp());
  // console.log({ret,retf});
  return retf;
},[a])]).sum(a=>a[1].length));
time(()=>eg2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>{
  // console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),eg[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n)//.map(a=>a.Js()).uniq().map(a=>a.Jp());
  // console.log({ret,retf});
  return retf;
},[a])]).sum(a=>a[1].length));
time(()=>g2.filter(a=>a[1]===0).map(a=>[a,range(1,10).reduce((c,n)=>{
  // console.log(`Going from ${n-1} to ${n} with set ${c}.`);
  let ret=c.map(c=>dirs4.map(v=>{return vadd(v,c[0].Jp())})).flat();
  ret = ret.map(a=>[a.Js(),g[a[0]]?.[a[1]]]);
  retf = ret.filter(a=>a[1]===n)//.map(a=>a.Js()).uniq().map(a=>a.Jp());
  // console.log({ret,retf});
  return retf;
},[a])]).sum(a=>a[1].length));
part 2