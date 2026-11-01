// an ugly Christmas sweater with a knitted tree whose lights blink on and off in turns, the star twinkling on top
export const frames=24,delay=110,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
const G=[[1,-1,0],[2,2,1],[4,0,2],[5,-2,1],[5,3,0],[7,1,0],[8,-3,2],[9,3,1],[10,-1,0],[11,2,2],[11,-4,1],[10,4,0],[6,0,1],[3,-1,0]]
const L=[['#ffe14a','#9c8a3a'],['#4fc3ff','#2e6488'],['#ff5f86','#8e3550']]
export default(c,t)=>{
  const st=Math.floor(t*6),on=g=>st%3==g
  const sw=()=>{c.beginPath();c.moveTo(98,30);c.lineTo(60,44);c.lineTo(18,172);c.lineTo(50,186);c.lineTo(68,104);c.lineTo(68,226);c.lineTo(188,226);c.lineTo(188,104);c.lineTo(206,186);c.lineTo(238,172);c.lineTo(196,44);c.lineTo(158,30);c.quadraticCurveTo(128,50,98,30);c.closePath()}
  // knitted v stitches in a cell
  const cell=(x,y,col,dk)=>{c.fillStyle=col;c.fillRect(x-4,y-4,8,8);c.beginPath();c.moveTo(x-3,y-3);c.lineTo(x,y+2);c.lineTo(x+3,y-3);c.lineWidth=1.8;c.strokeStyle=dk;c.stroke()}
  sw();c.fillStyle='#d63b3d';c.fill()
  c.save();c.clip()
  for(let y=28;y<230;y+=8)for(let x=12;x<246;x+=8){c.beginPath();c.moveTo(x-3,y-3);c.lineTo(x,y+2);c.lineTo(x+3,y-3);c.lineWidth=1.8;c.strokeStyle='#bf3035';c.stroke()}
  // ribbing: hem, cuffs, collar
  const rib=(pts)=>{c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.closePath();c.fillStyle='#2f9e5b';c.fill()}
  rib([[60,210],[196,210],[196,232],[60,232]])
  rib([[22,158],[56,170],[50,192],[10,178]]);rib([[234,158],[200,170],[206,192],[246,178]])
  c.strokeStyle='#23804a';c.lineWidth=3
  for(let x=72;x<188;x+=8){c.beginPath();c.moveTo(x,212);c.lineTo(x,228);c.stroke()}
  for(const m of[0,256])for(let a=.12;a<1;a+=.19){const X=x=>m?m-x:x;c.beginPath();c.moveTo(X(22+34*a),158+12*a);c.lineTo(X(10+40*a),178+14*a);c.stroke()}
  // zigzag band above the hem and on the sleeves
  const zig=(x0,y0,x1,y1,n)=>{c.beginPath();for(let k=0;k<=n;k++){const a=k/n,o=k%2?5:-5;c.lineTo(x0+(x1-x0)*a-o*(y1-y0)/Math.hypot(x1-x0,y1-y0),y0+(y1-y0)*a+o*(x1-x0)/Math.hypot(x1-x0,y1-y0))}c.lineWidth=5;c.strokeStyle='#fff4e6';c.stroke()}
  zig(68,200,188,200,15);zig(30,122,62,134,4);zig(226,122,194,134,4)
  // little knitted snowflakes
  for(const[x,y]of[[88,72],[172,90],[86,150],[170,160]])for(const[dx,dy]of[[0,0],[8,0],[-8,0],[0,8],[0,-8]])cell(x+dx,y+dy,'#fff4e6','#e6d6c4')
  c.restore()
  // the tree, row by row, with a trunk and a star
  const W=[1,3,5,3,5,7,5,7,9,7,9,11]
  W.forEach((w,r)=>{for(let k=-(w-1)/2;k<=(w-1)/2;k++)cell(128+k*8,88+r*8,'#2f9e5b','#23804a')})
  for(const r of[12,13])for(const k of[-1,0,1])cell(128+k*8,88+r*8,'#8a5a3b','#6e4630')
  const sb=st%2?'#ffe14a':'#fff3a0'
  for(const[dx,dy]of[[0,0],[8,0],[-8,0],[0,8],[0,-8]])cell(128+dx,72+dy,sb,'#d9b52e')
  // lights: knitted bulbs, one colour lit at a time with a glow
  for(const[r,k,g]of G){
    const x=128+k*8,y=88+r*8,[a,b]=L[g]
    if(on(g))for(const[r,al]of[[13,'55'],[9,'99']]){c.beginPath();c.arc(x,y,r,0,T);c.fillStyle=a+al;c.fill()}
    cell(x,y,on(g)?a:b,on(g)?'#ffffffaa':'#00000033')
    if(on(g)){c.beginPath();c.arc(x-1,y-1,2.2,0,T);c.fillStyle='#fff';c.fill()}
  }
  if(st%2==0){c.strokeStyle='#fff3a0';c.lineWidth=3;for(let j=0;j<4;j++){const a=j*T/4+T/8;c.beginPath();c.moveTo(128+C(a)*16,72+S(a)*16);c.lineTo(128+C(a)*24,72+S(a)*24);c.stroke()}}
  // collar and outline
  c.beginPath();c.moveTo(98,30);c.quadraticCurveTo(128,50,158,30);c.lineWidth=20;c.strokeStyle=K;c.stroke();c.lineWidth=11;c.strokeStyle='#2f9e5b';c.stroke()
  sw();c.lineWidth=6;c.strokeStyle=K;c.stroke()
}
