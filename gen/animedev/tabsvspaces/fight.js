// a slate-haired girl with two low braids in a gamer jersey holding up a Tab key to block a giant angry spacebar slamming down on her, sparks on each hit
const P=Math.PI,O='#2b1d2e'
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
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
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=16,delay=70,rim=4
const H='#6f86a8',Hd='#4b5f80',Hl='#b3c4dd',S='#fbe4d8',J='#26262f',W='#f4f5f9'
export default(c,t,i)=>{
  const f=i%8,hit=f<2,sy=[42,41,38,35,31,28,26,32][f],dy=hit?[6,3][f]:0,q=f?0:5
  // girl: torso in a black and white gamer jersey, two low braids
  c.save();c.translate(0,dy)
  c.save();c.beginPath();c.moveTo(94,196);c.bezierCurveTo(70,202,62,218,60,236);c.lineTo(196,236);c.bezierCurveTo(194,218,186,202,162,196);c.closePath();fs(c,J);c.clip()
  for(const s of[-1,1]){c.beginPath();c.moveTo(128+s*12,196);c.lineTo(128+s*58,236);c.lineWidth=9;c.strokeStyle=W;c.stroke()}
  rr(c,58,226,140,4,0);fs(c,W,0);c.restore()
  pg(c,116,197,128,214,140,197);fs(c,W,3)
  // head
  c.save();c.translate(128,160);c.scale(.8,.8)
  hd(c,S)
  face(c,hit?{ex:'shut',m:'grit',mo:1.1,br:-1,bc:Hd}:{e:['#9a5a00','#ffd34a'],ly:-3,pp:.85,tl:3,m:'grit',mo:1.1,br:-1,bc:Hd})
  c.beginPath();c.moveTo(-52,30);c.bezierCurveTo(-60,-46,-30,-70,2,-70);c.bezierCurveTo(34,-70,60,-46,52,30)
  qs(c,[52,30,48,0,40,-8,34,4,24,-14,14,-2,4,-20,-8,-4,-18,-18,-30,-2,-38,-10,-46,6,-52,30],.2);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-2,-68);c.quadraticCurveTo(-6,-44,4,-22);c.lineWidth=2.4;c.strokeStyle=Hd;c.stroke()
  c.beginPath();c.arc(0,-26,42,P*1.24,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  // arms raised, elbows out
  const ky=Math.max(sy+28-q,62)
  for(const s of[-1,1]){const hy=ky+28-dy;c.beginPath();c.moveTo(128+s*38,206);c.lineTo(128+s*62,166);c.lineTo(128+s*36,hy);st(c,14,J);c.beginPath();c.moveTo(128+s*(62-26*.62),166+(hy-166)*.62);c.lineTo(128+s*(62-26*.8),166+(hy-166)*.8);c.lineWidth=14;c.strokeStyle=W;c.stroke();el(c,128+s*36,ky+26-dy,9,8.5);fs(c,S,3.2)}
  for(const s of[-1,1])for(let k=0;k<4;k++){const x=128+s*(40+k*1.6),y=184+k*12;el(c,x,y,8.5-k*.6,8);fs(c,H,2.8);c.beginPath();c.moveTo(x-6,y-3);c.quadraticCurveTo(x,y+3,x+6,y-3);c.lineWidth=1.8;c.strokeStyle=Hd;c.stroke()}
  for(const s of[-1,1]){el(c,128+s*45,228,5,4);fs(c,W,2.6);c.beginPath();c.moveTo(128+s*42,231);c.lineTo(128+s*45,240);c.lineTo(128+s*49,231);fs(c,H,2.4)}
  c.restore()
  // Tab key held overhead
  rr(c,90,ky,76,52,10);fs(c,'#2d8c6a');rr(c,95,ky+2,66,40,8);fs(c,'#58e0a4',3)
  tx(c,'Tab ⇥',128,ky+22,21,'#fff',0,'DejaVu Sans')
  // giant spacebar with an angry face, stubby arms pushing down
  rr(c,14-q/2,sy-18+q,228+q,46-q,14);fs(c,'#9aa2b8');rr(c,20-q/2,sy-16+q,216+q,35-q,11);fs(c,'#f1f3f9',3)
  for(const k of[-1,1]){const x=128+k*24;el(c,x,sy-1,9,8);fs(c,'#fff',2.6);el(c,x-k*2,sy,4,4.4);fs(c,O,0)
    c.beginPath();c.moveTo(x-11,sy-10+k*4);c.lineTo(x+11,sy-10-k*4);c.lineWidth=3.6;c.strokeStyle=O;c.stroke()}
  c.beginPath();c.moveTo(118,sy+12);c.quadraticCurveTo(128,sy+7,138,sy+12);c.lineWidth=3;c.stroke()
  tx(c,'space',202,sy,15,'#a9b0c4',0,'DejaVu Sans')
  // impact sparks and sweat
  if(hit){const z=f?.75:1.1;for(const s of[-1,1]){for(let k=0;k<3;k++){const a=s*(.9+k*.45);c.beginPath();c.moveTo(128+Math.sin(a)*48*z,ky+6-Math.cos(a)*14*z);c.lineTo(128+Math.sin(a)*66*z,ky+6-Math.cos(a)*26*z);st(c,3.5,'#ffe14d',2.5)}spark(c,128+s*70*z,ky+20,9*z,s<0?'#ffe14d':'#fff')}}
  drop(c,178,138+(i%4)*2,1)
}
