eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/11/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/11/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.nums()
code = i.nums();
split=a=>{let as=a+"";let l=as.length/2; return [as.slice(0,l),as.slice(l)]}
split("15")
split("1515")
code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat()
split=a=>{let as=a+"";let l=as.length/2; return [+as.slice(0,l),+as.slice(l)]}
code.map(a=>a===0?1:(a+"").length%2==0?split(a):a*2024).flat()
blink=(code=>code.map().flat())
range(25).reduce((c,n)=>blink(c),code).length
range(25).reduce((c,n)=>{console.log(n);return blink(c)},code).length


step = a=>a===0?[1]:(a+"").length%2==0?split(a):[a*2024];
stepm = memoize(step);
blink=code=>code.map(a=>stepm(a)).flat()

memd = new Map();
blinkn=(c,steps)=>{
  let key = [c,steps].Js();
  if (memd.has(key)) return memd.get(key);
  let ret = blink()
}