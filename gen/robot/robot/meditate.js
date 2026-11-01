// lavender robot sitting cross-legged in a lotus pose with eyes closed, levitating and gently bobbing above cyan ripple rings as hex nuts, a bolt, a gear, a washer and a battery orbit around it and its chest core glows with each breath
export const frames=30,delay=75,rim=3
const P=Math.PI,{sin,cos}=Math
const L='#d3cdf5',S='#a89fe0',J='#7a70b8'
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const limb=(c,p,w)=>{c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle='#111';c.lineWidth=w+7;c.stroke();c.strokeStyle=L;c.lineWidth=w;c.stroke();c.strokeStyle='#111'}
const hex=(c,r)=>{c.beginPath();for(let k=0;k<6;k++)c.lineTo(r*cos(k*P/3),r*sin(k*P/3));c.closePath()}
const parts=[
  c=>{hex(c,11);c.fillStyle='#c9d2dc';c.fill();c.stroke();c.beginPath();c.arc(0,0,4.5,0,2*P);c.fillStyle='#5d6873';c.fill();c.lineWidth=3;c.stroke()},
  c=>{rr(c,-4,-2,8,22,2);c.fillStyle='#b4bec9';c.fill();c.stroke();c.lineWidth=1.5;for(let y=3;y<19;y+=4){c.beginPath();c.moveTo(-4,y);c.lineTo(4,y+2);c.stroke()}
    c.lineWidth=4;rr(c,-9,-10,18,9,2);c.fillStyle='#d6dde5';c.fill();c.stroke()},
  c=>{c.beginPath();for(let k=0;k<32;k++){const a=k*P/16,r=k%4<2?14:10;c.lineTo(r*cos(a+P/32),r*sin(a+P/32))}c.closePath();c.fillStyle='#ecbd52';c.fill();c.stroke()
    c.beginPath();c.arc(0,0,4,0,2*P);c.fillStyle='#8d6a1c';c.fill();c.lineWidth=3;c.stroke()},
  c=>{c.beginPath();c.arc(0,0,11,0,2*P);c.arc(0,0,5,0,2*P,true);c.fillStyle='#d6dde5';c.fill('evenodd');c.stroke();c.lineWidth=3;c.beginPath();c.arc(0,0,5,0,2*P);c.stroke()},
  c=>{rr(c,-7,-13,14,26,3);c.fillStyle='#5fcf86';c.fill();c.stroke();c.fillStyle='#111';c.fillRect(-7,5,14,8);rr(c,-3,-17,6,4,1);c.fillStyle='#e0a35a';c.fill();c.lineWidth=3;c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(-3,-5);c.lineTo(3,-5);c.moveTo(0,-8);c.lineTo(0,-2);c.stroke()},
]
export default(c,t)=>{
  const b=-7*sin(2*P*t),br=.5+.5*sin(2*P*t-P/2)
  // levitation rings
  for(const o of[0,.5]){const u=(t+o)%1,rx=26+70*u,ry=rx*.17,w=4*sin(P*u)
    if(w>.6){c.beginPath();c.ellipse(128,234,rx,ry,0,0,2*P);c.strokeStyle='#5fd3f5';c.lineWidth=w;c.stroke();c.strokeStyle='#111'}}
  const orb=[...Array(5)].map((_,j)=>{const a=2*P*(t+j/5)+.4,x=103*cos(a),y=30*sin(a);return{j,a,x:128+x*cos(-.14)-y*sin(-.14),y:148+b*.5+x*sin(-.14)+y*cos(-.14),f:sin(a)>0}})
  const op=f=>orb.filter(o=>o.f==f).sort((p,q)=>p.y-q.y).forEach(o=>{
    c.save();c.translate(o.x,o.y);c.scale(...Array(2).fill(1.05+.2*sin(o.a)));c.rotate(o.a*1.5+o.j);c.lineWidth=4.5;parts[o.j](c);c.restore()})
  op(false)
  c.save();c.translate(0,b)
  const sh=-2*br
  // lap / thighs
  c.lineWidth=7;c.beginPath();c.ellipse(128,190,62,16,0,0,2*P);c.fillStyle=S;c.fill();c.stroke()
  // torso
  c.beginPath();c.moveTo(94,120+sh);c.lineTo(162,120+sh);c.quadraticCurveTo(166,120+sh,163,128);c.lineTo(152,180);c.lineTo(104,180);c.lineTo(93,128);c.quadraticCurveTo(90,120+sh,94,120+sh);c.closePath()
  c.fillStyle=L;c.fill();c.save();c.clip();c.fillStyle=S;c.fillRect(146,110,30,80);c.fillStyle='#eeeaff';c.fillRect(100,124+sh,40,4);c.restore();c.stroke()
  rr(c,104,172,48,12,5);c.fillStyle=J;c.fill();c.lineWidth=5;c.stroke()
  // chest core
  const g=9+3.5*br
  c.beginPath();c.arc(128,146,17,0,2*P);c.fillStyle='#3a3366';c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#ffb43d';c.beginPath();c.arc(128,146,g,0,2*P);c.fill()
  c.fillStyle='#ffe28a';c.beginPath();c.arc(128,146,g*.62,0,2*P);c.fill()
  c.fillStyle='#fff8dc';c.beginPath();c.arc(126,144,g*.28,0,2*P);c.fill()
  c.strokeStyle='#ffc94d';c.lineWidth=2.5
  for(let k=0;k<8;k++){const a=k*P/4,r1=20+br*2,r2=r1+3+br*4;c.beginPath();c.moveTo(128+r1*cos(a),146+r1*sin(a));c.lineTo(128+r2*cos(a),146+r2*sin(a));c.stroke()}
  c.strokeStyle='#111'
  // crossed shins with feet
  for(const s of[1,-1]){
    const kx=128-s*62,fx=128+s*34,ky=s>0?194:200,fy=s>0?184:194
    limb(c,[[kx,ky],[fx,fy]],15)
    c.save();c.translate(fx+s*6,fy-5);c.rotate(s*-.5);rr(c,-9,-13,18,24,8);c.fillStyle=J;c.fill();c.lineWidth=6;c.stroke()
    c.fillStyle='#5a5196';c.fillRect(-4,-8,8,3);c.fillRect(-4,-2,8,3);c.restore()
  }
  for(const s of[-1,1]){c.beginPath();c.arc(128+s*62,197,10,0,2*P);c.fillStyle=J;c.fill();c.lineWidth=6;c.stroke()}
  // arms resting on knees, mudra hands
  for(const s of[-1,1]){
    limb(c,[[128+s*36,126+sh],[128+s*52,160+sh*.5],[128+s*60,186]],12)
    c.beginPath();c.arc(128+s*36,126+sh,10,0,2*P);c.fillStyle=J;c.fill();c.lineWidth=6;c.stroke()
    c.beginPath();c.arc(128+s*61,186,9,0,2*P);c.fillStyle=L;c.fill();c.lineWidth=5.5;c.stroke()
    c.beginPath();c.arc(128+s*61,182,3.5,0,2*P);c.lineWidth=2.5;c.stroke()
  }
  // neck and head
  rr(c,118,106+sh,20,14,4);c.fillStyle=J;c.fill();c.lineWidth=5;c.stroke()
  const hy=sh*.6
  c.lineWidth=5;c.beginPath();c.moveTo(128,62+hy);c.lineTo(128,48+hy);c.stroke()
  c.beginPath();c.arc(128,44+hy,6+br*1.5,0,2*P);c.fillStyle='#ffc94d';c.fill();c.stroke()
  for(const s of[-1,1]){rr(c,128+s*36-6,78+hy,12,22,5);c.fillStyle=J;c.fill();c.stroke()}
  c.lineWidth=7;rr(c,94,60+hy,68,52,24);c.fillStyle=L;c.fill()
  c.save();c.clip();c.fillStyle=S;c.fillRect(148,50+hy,20,70);c.fillStyle='#eeeaff';c.fillRect(106,66+hy,26,4);c.restore();c.stroke()
  rr(c,102,76+hy,52,24,12);c.fillStyle='#2a2550';c.fill();c.lineWidth=4.5;c.stroke()
  c.strokeStyle='#9ff3ff';c.lineWidth=3.5
  for(const s of[-1,1]){c.beginPath();c.arc(128+s*12,86+hy,5.5,.15*P,.85*P);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.arc(128,92+hy,3.5,.2*P,.8*P);c.stroke()
  c.restore()
  op(true)
}
