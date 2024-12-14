eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/14/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
i.split("\n").map(a=>a.nums())
i.split("\n").map(a=>a.nums()).map(([x,y,vx,vy])=>[[x,y],[vx,vy]])
b=[101,]step = ([x,y,vx,vy])=>[x+vx,y+vy]
b=[101,103];step = ([x,y,vx,vy])=>[(x+vx)%b[0],(y+vy)%b[1]]
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a))
i.split("\n").map(a=>a.nums()).map(a=>step(a))
b=[101,103];step = ([x,y,vx,vy])=>[(x+vx)%b[0],(y+vy)%b[1],vx,vy]
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a))
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null])
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null].Js())
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a)
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true)
i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).prod(a=>a.length)
ex="p=0,4 v=3,-3\np=6,3 v=-1,-3\np=10,3 v=-1,2\np=2,0 v=2,-1\np=0,0 v=1,3\np=3,0 v=-2,-2\np=7,6 v=-1,-3\np=3,0 v=-1,-2\np=9,3 v=2,3\np=7,3 v=-1,2\np=2,4 v=2,-3\np=9,5 v=-3,-3"
b
b=[101,103];i.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).prod(a=>a.length)
b=[11,7];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).prod(a=>a.length)
b=[11,7];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
dgrid
b=[11,7];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2?true:a[0]>b[0]/2?false:null,a[1]<b[1]/2?true:a[1]>b[1]/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b[0]/2
b=[11,7];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2-.5?true:a[0]>b[0]/2-.5?false:null,a[1]<b[1]/2-.5?true:a[1]>b[1]/2-.5?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[11,7];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<b[0]/2-.5?true:a[0]>b[0]/2-.5?false:null,a[1]<b[1]/2-.5?true:a[1]>b[1]/2-.5?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<b[0]/2-.5?true:a[0]>b[0]/2-.5?false:null,a[1]<b[1]/2-.5?true:a[1]>b[1]/2-.5?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<b[0]/2-.5?true:a[0]>b[0]/2-.5?false:null,a[1]<b[1]/2-.5?true:a[1]>b[1]/2-.5?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
(b[0]-1)/2
b=[7,11];ex.split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
ex
ex.s`\n`.length
b=[7,11];ex.slice(10,11).split("\n").map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").slice(10,11).map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").slice(10,11)//.map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").slice(10,11).map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
step = ([x,y,vx,vy])=>{console.log([x,y]);return [(x+vx)%b[0],(y+vy)%b[1],vx,vy]}
b=[7,11];ex.split("\n").slice(10,11).map(a=>a.nums()).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[7,11];ex.split("\n").slice(10,11).map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
step = ([x,y,vx,vy])=>{console.log([x,y]);return [(x+vx+b[0])%b[0],(y+vy+b[1])%b[1],vx,vy]}
b=[7,11];ex.split("\n").slice(10,11).map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[11,7];ex.split("\n").slice(10,11).map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
step = ([x,y,vx,vy])=>{/*console.log([x,y]);*/return [(x+vx+b[0])%b[0],(y+vy+b[1])%b[1],vx,vy]}
b=[11,7];ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]])//.map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[11,7];ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length)
b=[11,7];ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
b=[101,103];i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(step,a)).map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
part 1


disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()))'console.log(range(b[0]).map(i=>range(b[1]).map(j=>arr.has([i,j].Js())?"*":".").join("")).join("\n"))}
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));console.log(range(b[0]).map(i=>range(b[1]).map(j=>arr.has([i,j].Js())?"*":".").join("")).join("\n"))}
b=[11,7];seen=new Set();ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(a=>{let res=step(a); let str=disp(res);if(!set.has(str))set.add(str);console.log(str+"\n");},a))//.map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
b=[11,7];seen=new Set();ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(100).reduce(a=>{let res=step(a); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},a))//.map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[0]).map(i=>range(b[1]).map(j=>arr.has([i,j].Js())?"*":".").join("")).join("\n"))}
disp=arr=>{console.log({arr});arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[0]).map(i=>range(b[1]).map(j=>arr.has([i,j].Js())?"*":".").join("")).join("\n"))}
b=[11,7];seen=new Set();ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1])).map(a=>range(3).reduce(a=>{let res=step(a); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},a))//.map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(a=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},a))//.map(a=>[a[0],a[1]]).map(a=>[a[0]<(b[0]-1)/2?true:a[0]>(b[0]-1)/2?false:null,a[1]<(b[1]-1)/2?true:a[1]>(b[1]-1)/2?false:null]).filter(a=>a[0]!==null&&a[1]!==null).map(a=>a.Js()).groupBy(a=>a,true).map(a=>a.length).prod()
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(a=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},a)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(a=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},data)
disp=arr=>{console.log({arr});arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[1]).map(i=>range(b[0]).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));console.log({arr});return(range(b[1]).map(i=>range(b[0]).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(a=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(str+"\n")}return res},data)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(a=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(a,"\n"+str+"\n")}return res},data)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce(i=>{let res=data.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}return res},data)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce((a,i)=>{let res=a.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}return res},data)
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[1]).map(i=>range(b[0]).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(3).reduce((a,i)=>{let res=a.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}return res},data)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));range(50).reduce((a,i)=>{let res=a.map(step); let str=disp(res);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}return res},data)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}})
runStep(0)
runStep(1)
runStep(3)
runStep(4)
b=[11,7];seen=new Set();data=ex.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")};}); let h=0;setInterval(()=>runStep(++h),500)
clearInterval(_)
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),500)
clearInterval(_)
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),200)
clearInterval(_)
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),100)
clearInterval(_)
setInterval(()=>runStep(++h),150)
clearInterval(_)
setInterval(()=>runStep(++h),150)
clearInterval(_)
setInterval(()=>runStep(++h),150)
clearInterval(_)
h
range(872061-600).forEach(a=>{if (a%1000)console.log(h);data=data.map(step);h++})
h


/* NODEJS CRASHED */


eval(fs.readFileSync("/Users/iceselkie/bin/utils2.js")+"");
i = await (() => new Promise((resolve, reject) => require('https').get({ hostname: 'adventofcode.com', path: '/2024/day/14/input', headers: { 'User-Agent': 'Human/1.0; NodeJS-Repl/v20.10.0; Darwin/15.2', 'Connection': 'keep-alive', 'Cookie': `session=${process.env.SESSION}`, 'Priority': 'u=0, i', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' } }, res => { let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data.trim())); }).on('error', reject)))();
disp=arr=>{arr=new Set(arr.map(a=>[a[0],a[1]].Js()));return(range(b[1]).map(i=>range(b[0]).map(j=>arr.has([j,i].Js())?"*":".").join("")).join("\n"))}
step = ([x,y,vx,vy])=>{/*console.log([x,y]);*/return [(x+vx+b[0])%b[0],(y+vy+b[1])%b[1],vx,vy]}
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),100)
clearInterval(_)
range(872061-600).forEach(a=>{data=data.map(step);h++; if (a%1000==0)console.log(h)})
setInterval(()=>runStep(++h),100)
clearInterval(_)
setInterval(()=>runStep(++h),100)
clearInterval(_)
setInterval(()=>runStep(++h),100)
clearInterval(_)
511-342
jumpToStep=goal=>{while(++h<goal){data=data.map(step);h++; if (h%1000==0)console.log(h)};}
jumpToStep=goal=>{while(++h<goal){data=data.map(step);h++; if (h%1000==0)console.log(h)};disp(data)}
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),100)
clearInterval(_)
jumpToStep(7400)
jumpToStep=goal=>{while(h<goal){data=data.map(step);h++; if (h%1000==0)console.log(h)};disp(data)}
b=[101,103];seen=new Set();data=i.split("\n").map(a=>[...a.matchAll(/(-?[0-9]+)/g)].map(a=>+a[1]));runStep=((i)=>{data=data.map(step); let str=disp(data);if(!seen.has(str)){seen.add(str);console.log(i,"\n"+str+"\n")}else{runStep(++h)};}); h=0;setInterval(()=>runStep(++h),100)
clearInterval(_)
jumpToStep(7400)
setInterval(()=>runStep(++h),100)
clearInterval(_)
part 2 was 7412