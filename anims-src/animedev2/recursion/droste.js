// a girl with long wavy brown hair, a red headband and a cozy red cardigan holds up a framed picture of herself holding a picture of herself, and the view zooms into it forever
// tags: calm, anime, coding, frame, zoom, infinite
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,hypot,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lr=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-11,y+3);c.lineTo(x+11,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(op>.5){c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br||0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+(q.by||0));c.quadraticCurveTo(f*20,-15-br+(q.by||0),f*28,-12+3*br+(q.by||0));c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(o.mx||0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='D'){c.moveTo(-8,-3);c.quadraticCurveTo(0,-5,8,-3);c.quadraticCurveTo(7,12,0,12);c.quadraticCurveTo(-7,12,-8,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,11,6,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='tiny'){c.moveTo(-2.5,0);c.lineTo(2.5,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const limb=(c,p,w,f)=>{c.beginPath();c.moveTo(p[0],p[1]);if(p.length==4)c.lineTo(p[2],p[3]);else c.quadraticCurveTo(p[2],p[3],p[4],p[5]);st(c,w,f)}
// droste loop: T maps the whole picture into the frame she holds, the view zooms by T^-t about T's fixed point, so t=1 lands exactly on the next copy
export const frames=24,delay=85,rim=4
const H='#5a3424',Hd='#3e2218',Hl='#9a6a4a',S='#e0b086',EY=['#2f5a14','#a8d860'],J='#d9434f',Jd='#a82c3a',K=.42,OX=128-128*K,OY=180-128*K,FX=OX/(1-K),FY=OY/(1-K)
const frame=c=>{
  c.beginPath();c.roundRect(8,8,240,240,18);c.roundRect(22,22,212,212,6);c.fillStyle='#f0bf4a';c.fill('evenodd')
  c.beginPath();c.roundRect(14,14,228,228,12);c.lineWidth=2.5;c.strokeStyle='#c8902a';c.stroke()
  c.beginPath();c.roundRect(8,8,240,240,18);c.roundRect(22,22,212,212,6);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  for(const x of[15,241])for(const y of[15,241]){el(c,x,y,4.5);fs(c,'#ffe28a',2.5)}}
const scene=(c,d,t)=>{
  const b=sin(t*2*P)*2
  c.save();c.beginPath();c.rect(22,22,212,212);c.clip()
  c.fillStyle='#ffe3ec';c.fillRect(22,22,212,212)
  for(let y=0;y<6;y++)for(let x=0;x<6;x++){el(c,34+x*38+(y%2)*19,34+y*38,4);c.fillStyle='#ffc8da';c.fill()}
  // long wavy hair behind
  c.save();c.translate(128,84+b);c.scale(.78,.78)
  c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-70,30,-56,70,-76,120);c.quadraticCurveTo(-60,140,-74,170);c.lineTo(74,170);c.quadraticCurveTo(60,140,76,120);c.bezierCurveTo(56,70,70,30,50,-20);fs(c,Hd)
  c.restore()
  // cardigan body
  c.beginPath();c.moveTo(96,124);c.bezierCurveTo(70,128,62,150,60,180);c.lineTo(58,240);c.lineTo(198,240);c.lineTo(196,180);c.bezierCurveTo(194,150,186,128,160,124);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(108,124);c.lineTo(128,150);c.lineTo(148,124);c.closePath();fs(c,'#fff',3)
  // arms down to the hands behind the frame's lower corners
  for(const g of[-1,1]){c.beginPath();c.moveTo(128+g*50,140);c.quadraticCurveTo(128+g*66,190,128+g*52,224);st(c,14,J,3);el(c,128+g*50,224,9,8.5);fs(c,S,3)}
  // head
  c.save();c.translate(128,84+b);c.scale(.78,.78);c.rotate(sin(t*2*P)*.03)
  hd(c,S)
  face(c,{e:EY,lx:1,ly:1,m:'smile',mo:1.1,bc:Hd,br:.1})
  c.beginPath();c.moveTo(-52,24);c.bezierCurveTo(-60,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,60,-44,52,24)
  qs(c,[52,24,46,-6,40,-12,32,-2,26,-24,12,-8,2,-24,-10,-6,-22,-24,-32,-2,-42,-12,-48,-4,-52,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-6,58,P*1.2,P*1.8);st(c,7,J,3)
  c.beginPath();c.arc(0,-28,40,P*1.24,P*1.44);ln(c,5,Hl)
  c.restore()
  // the picture she holds: the whole scene again, one level down
  c.save();c.translate(OX,OY);c.scale(K,K)
  if(d>0)scene(c,d-1,t);else{c.fillStyle='#ffe3ec';c.fillRect(22,22,212,212)}
  frame(c);c.restore()
  c.restore()}
export default(c,t)=>{
  const z=K**-t
  c.save();c.beginPath();c.rect(22,22,212,212);c.clip()
  c.translate(FX,FY);c.scale(z,z);c.translate(-FX,-FY)
  scene(c,6,t)
  c.restore()
  frame(c)
}
