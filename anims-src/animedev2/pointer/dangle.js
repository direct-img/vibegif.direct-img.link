// a blonde girl with a long braid and a sailor uniform dangles from a big pointer arrow over an empty void, the memory box it points at glitches, flickers and fades away and she panics until it blinks back
// tags: anxious, anime, coding, memory, glitch, swing
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
export const frames=24,delay=90,rim=4
const H='#f6c75a',Hd='#d69a2e',Hl='#fff0b0',S='#ffe8d8',EY=['#1f6a3a','#8ef0a8'],N='#2c3e7a',AY=40,X=100
export default(c,t,i)=>{
  const fl=t>.2&&t<.46?((i*7)%5<2?.25:1)*(1-sg(t,.4,.46)):t>.84&&t<.96?((i*3)%4<2?.3:.9):t<.2||t>=.96?1:0,
    gone=1-fl,pan=sg(t,.38,.46)*(1-sg(t,.9,.98)),sw=sin(t*2*P)*(.06+pan*.04),gx=t>.2&&t<.46&&i%3==0?4:0
  // the void far below
  el(c,128,238,108,13);fs(c,'#1a0e30',3.5)
  c.save();el(c,128,238,108,13);c.clip();el(c,128,240,60,6);fs(c,'#05020c',0);c.beginPath();c.ellipse(128,238,84,9,0,t*2*P,t*2*P+2.4);ln(c,2.4,'#6a3ad0')
  for(const[x,y]of[[60,236],[170,241],[200,233],[96,242]]){el(c,x,y,1.6);fs(c,'#fff',0)}c.restore()
  // pointer: ptr box, shaft, head
  rr(c,8,AY-16,40,32,7);fs(c,'#ff8a5c');tx(c,'ptr',28,AY,14,'#fff',4)
  c.beginPath();c.moveTo(48,AY);c.lineTo(172,AY);st(c,12,'#6d7cff',3.5)
  pg(c,168,AY-17,192,AY,168,AY+17);fs(c,'#6d7cff',3.5)
  // the address box, glitching out
  if(fl>0){c.save();c.globalAlpha=fl;rr(c,196+gx,AY-22,52,44,8);fs(c,'#7ee0a0');tx(c,'0x7F3A',222+gx,AY+1,12,'#fff',4)
    if(gx){c.fillStyle='#ff4f8a';c.fillRect(196,AY-6,52,4);c.fillStyle='#4fd0ff';c.fillRect(200,AY+8,48,3)}c.restore()}
  if(gone>.3){c.save();c.globalAlpha=gone;c.setLineDash([5,6]);rr(c,196,AY-22,52,44,8);ln(c,2.6,'#8a90a8');c.setLineDash([]);tx(c,'???',222,AY+1,13,'#c0c4d6',0);c.restore()}
  // dangling girl, swinging from her hands
  c.save();c.translate(X,AY);c.rotate(sw);c.translate(-X,-AY)
  const kick=pan*sin(t*2*P*6),HY=118
  // arms up to the shaft
  for(const[sx,hx]of[[X-20,X-34],[X+20,X+34]]){c.beginPath();c.moveTo(sx,150);c.lineTo(hx,AY+10);st(c,12,'#fff',3)}
  // braid
  for(let k=0;k<6;k++){const u=k/5,x=X-34-u*4+sin(t*2*P-u*2)*u*8,y=HY+6+k*14;el(c,x,y,9-u*3,8-u*2,.3);fs(c,k%2?H:Hd,3)}
  el(c,X-38+sin(t*2*P-2)*8,HY+86,6,4);fs(c,'#e84a6a',2.5)
  // legs with loafers
  for(const g of[-1,1]){const a=g*kick*.45;c.save();c.translate(X+g*8,188);c.rotate(a)
    c.beginPath();c.moveTo(0,0);c.lineTo(0,22);st(c,10,S,3);rr(c,-5.5,10,11,8,2);fs(c,'#fff',2.5);c.beginPath();c.ellipse(g*2,26,8,5.5,0,0,2*P);fs(c,'#5a3324',3);c.restore()}
  // skirt, sailor top
  c.beginPath();c.moveTo(X-22,166);c.lineTo(X+22,166);c.lineTo(X+32,192);c.quadraticCurveTo(X,198,X-32,192);c.closePath();fs(c,N)
  c.beginPath();for(const d of[-12,0,12]){c.moveTo(X+d,170);c.lineTo(X+d*1.3,194)};ln(c,2,'#1b2a5a')
  c.beginPath();c.moveTo(X-22,140);c.quadraticCurveTo(X,134,X+22,140);c.lineTo(X+25,172);c.lineTo(X-25,172);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(X-22,140);c.lineTo(X,160);c.lineTo(X+22,140);c.quadraticCurveTo(X,148,X-22,140);fs(c,N,3)
  c.beginPath();c.moveTo(X-5,154);c.lineTo(X,168);c.lineTo(X+5,154);c.closePath();fs(c,'#e84a4a',2.5);el(c,X,153,5,4);fs(c,'#e84a4a',2.5)
  // head
  c.save();c.translate(X,HY);c.scale(.72,.72);c.rotate(pan*.05)
  c.beginPath();c.moveTo(-52,-12);c.bezierCurveTo(-60,20,-56,40,-44,46);c.lineTo(44,46);c.bezierCurveTo(56,40,60,20,52,-12);fs(c,Hd)
  hd(c,S)
  const look=t>.18&&t<.5
  face(c,pan>.5?{e:EY,ex:'dot',lx:6,ly:-4,m:'wave',mo:1.2,br:1.2,bc:Hd}:look?{e:EY,lx:7,ly:-5,op:.95,m:'o',mo:.8,br:.6,bc:Hd}:{e:EY,lx:2,ly:-3,m:'cat',bc:Hd,br:.3})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,24)
  qs(c,[50,24,44,-8,40,-16,30,-4,26,-24,12,-8,2,-26,-8,-8,-20,-22,-30,-4,-40,-14,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.22,P*1.46);ln(c,5,Hl)
  el(c,-44,-30,8,6,.5);fs(c,'#e84a6a',3)
  if(pan>.5){drop(c,56,-30,1.3);drop(c,-62,0,1.1)}
  c.restore()
  // fists gripping the shaft
  for(const x of[X-34,X+34]){el(c,x,AY+4,9.5,9);fs(c,S,3);c.beginPath();c.moveTo(x-5,AY);c.lineTo(x-5,AY+8);c.moveTo(x+1,AY);c.lineTo(x+1,AY+8);ln(c,1.8)}
  c.restore()
  if(pan>.5)for(let k=0;k<3;k++){const a=-2.2+k*.35;c.beginPath();c.moveTo(160+cos(a)*14,108+sin(a)*14);c.lineTo(160+cos(a)*22,108+sin(a)*22);ln(c,3)}
}
