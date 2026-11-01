// a girl with curly puffs coding next to a little AI robot buddy, a green check pops up and they high-five
const P=Math.PI,O='#2b1d2e'
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.3)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
export const frames=20,delay=80,rim=4
const H='#2e1c16',Hl='#6b4433',S='#8a5434',Sd='#6e3f25',J='#76dcb0',Jd='#46b388',R='#f3f6ff',Rb='#78c4ff',G='#3fd27a'
export default(c,t,i)=>{
  const T=t*2*P,ty=i<8,ok=i>=8,e=x=>x<0?0:x>1?1:x*x*(3-2*x)
  // high five amount: 0 typing .. 1 hands meeting
  const h=i<10?0:i<12?e((i-9)/2.5):i<16?1:e((19-i)/3.5),hit=i>=12&&i<15,tap=k=>ty?Math.max(0,Math.sin(T*5+k))*5:0
  // laptop lid (behind the hands while typing)
  const lap=()=>{rr(c,100,160,80,62,7);fs(c,'#cdd3e4');el(c,140,190,9);fs(c,'#ff8fb1',2.5);rr(c,92,220,96,9,4);fs(c,'#a3abc2',3)}
  // girl back hair puffs
  c.save();c.translate(82,98);c.scale(.9,.9)
  for(const f of[-1,1]){el(c,f*44,-56,26,24);fs(c,H);for(let k=0;k<6;k++){c.beginPath();c.arc(f*44+Math.cos(k)*14,-56+Math.sin(k*1.3)*12,5,0,P*1.3);c.lineWidth=2;c.strokeStyle=Hl;c.stroke()}}
  c.restore()
  // girl torso
  c.beginPath();c.moveTo(66,140);c.bezierCurveTo(42,146,32,168,30,200);c.quadraticCurveTo(28,232,40,236);c.lineTo(118,236);c.quadraticCurveTo(130,232,130,200);c.bezierCurveTo(128,168,118,146,96,140);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(70,142);c.lineTo(81,196);c.lineTo(92,142);fs(c,'#fff',3)
  for(const y of[176,196,216]){el(c,78+(y-176)*.04,y,2.4);fs(c,'#fff',2)}
  // robot body + antenna (behind the lid)
  const rx=198,ry=106+Math.sin(T*2)*2.5,joy=ok&&i<18
  rr(c,rx-10,ry+16,20,16,4);fs(c,'#cfd8ee',3);el(c,rx,ry+50,27,25);fs(c,R);spark(c,rx,ry+52,9,Rb,2)
  // typing arms go behind the lid
  if(h<.05){
    c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(122,194,130,206-tap(0));st(c,15,J)
    c.beginPath();c.moveTo(176,156);c.quadraticCurveTo(160,186,150,204-tap(P));st(c,8,'#cfd8ee')
  }
  lap()
  if(ty)for(const[x,k]of[[124,0],[154,P]])if(tap(k)<1){c.lineWidth=2.6;c.strokeStyle=O;for(const a of[-.5,0,.5]){c.beginPath();c.moveTo(x+12*Math.sin(a),156-12*Math.cos(a));c.lineTo(x+18*Math.sin(a),156-18*Math.cos(a));c.stroke()}}
  // girl head
  c.save();c.translate(82,98);c.scale(.9,.9);c.rotate(ok?.08:.12)
  hd(c,S)
  face(c,{e:['#8a4300','#ffc24a'],ex:joy&&i>9?'happy':0,lx:ok?3:4,ly:ok?-2:4,m:joy?'grin':'cat',mo:1,br:ok?.4:-.1,bc:H,bl:.6})
  c.beginPath();c.moveTo(-50,8);c.bezierCurveTo(-56,-46,-30,-66,0,-66);c.bezierCurveTo(30,-66,56,-46,50,8)
  qs(c,[50,8,46,-12,40,-2,34,-20,24,-10,16,-24,4,-14,-6,-26,-16,-12,-26,-22,-36,-6,-44,-16,-50,8],.3);c.closePath();fs(c,H)
  for(let k=0;k<7;k++){c.beginPath();c.arc(-36+k*12,-44+Math.abs(k-3)*4,5,P*.2,P*1.4);c.lineWidth=2;c.strokeStyle=Hl;c.stroke()}
  for(const f of[-1,1]){el(c,f*26,-60,9,6,f*-.6);fs(c,'#ffcf3f',3);el(c,f*45,30,4.5);c.lineWidth=2.6;c.strokeStyle='#f2b81c';c.stroke()}
  c.restore()
  // robot head: screen face
  rr(c,rx-34,ry-30,68,54,18);fs(c,R);rr(c,rx-26,ry-22,52,38,12);fs(c,'#22304f',2.6)
  for(const f of[-1,1]){el(c,rx+f*36,ry-3,5,9);fs(c,Rb,2.6)}
  c.beginPath();c.moveTo(rx,ry-30);c.lineTo(rx+4,ry-44);c.lineWidth=3;c.strokeStyle=O;c.stroke();el(c,rx+4,ry-47,5.5);fs(c,ok?G:i%2?'#ffd34d':'#ff9f43',2.5)
  c.lineWidth=3.4;c.strokeStyle='#7ff3ff'
  for(const f of[-1,1]){
    c.beginPath()
    if(joy){c.moveTo(rx+f*12-7,ry+1);c.lineTo(rx+f*12,ry-7);c.lineTo(rx+f*12+7,ry+1)}
    else{const q=ty?(i%4)-1.5:0;c.moveTo(rx+f*12+q,ry-8);c.lineTo(rx+f*12+q,ry+2)}
    c.stroke()
  }
  if(joy){c.beginPath();c.arc(rx,ry+6,6,.15*P,.85*P);c.stroke()}
  // green check popping out of the laptop
  const k=i<8?0:i<10?e((i-7)/2.5):i<11?1:e((13-i)/2)
  if(k>0){c.save();c.translate(140,142-k*20);c.scale(k,k);el(c,0,0,22);fs(c,G,4);c.beginPath();c.moveTo(-10,1);c.lineTo(-3,8);c.lineTo(11,-8);c.lineWidth=6;c.strokeStyle='#fff';c.stroke();c.restore()}
  // high five arms
  const palm=(x,y,a,f,m)=>{c.save();c.translate(x,y);c.rotate(a);el(c,-m*9,4,4,6.5,-m*.6);fs(c,f,3);el(c,0,0,9.5,11.5);fs(c,f,3.2);c.restore()}
  if(h>=.05){
    const gx=136-8*(1-h),gy=178-90*h,bx=150+8*(1-h),by=178-90*h
    c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(134,160-16*h,gx-4,gy+10);st(c,15,J);palm(gx-1,gy,.3,S,1)
    c.beginPath();c.moveTo(178,152);c.quadraticCurveTo(160,150-16*h,bx+4,by+10);st(c,8,'#cfd8ee');palm(bx+2,by,-.3,Rb,-1)
    if(hit){const z=[1.2,1,.75][i-12];for(let a=0;a<7;a++){const u=-P*.95+a*P/6*.95;c.beginPath();c.moveTo(143+Math.cos(u)*22*z,84+Math.sin(u)*22*z);c.lineTo(143+Math.cos(u)*34*z,84+Math.sin(u)*34*z);st(c,3.5,'#ffe14d',2.5)}spark(c,120,52,9*z,'#ffe14d');spark(c,170,46,7*z,'#ff8fb1')}
  }
}
