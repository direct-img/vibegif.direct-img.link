// a tan detective girl with a silver bob, a deerstalker cap and a trench coat side-eyes the bug peeking over her shoulder, whips around with her magnifying glass and it vanishes, turns back and it pops right back in
// tags: anxious, anime, coding, bug, detective, glitch
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
export const frames=28,delay=80,rim=4
const H='#dfe2ee',Hd='#a2a8c2',Hl='#ffffff',S='#d9a27a',EY=['#4b1a8a','#c49bff'],J='#b0814e',Jd='#8a5f34',CP='#8a6a48'
const BX=178,BY=132
const bug=(c,a,i,smug)=>{c.save();c.translate(BX,BY);c.globalAlpha=a
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*5,-14);c.quadraticCurveTo(g*10,-30+sin(i*1.3+g)*3,g*16,-30);ln(c,2.6);el(c,g*16,-31,3.6);fs(c,'#ffd34d',2.4)}
  el(c,0,10,22,19);fs(c,'#2fbf8a');c.beginPath();c.moveTo(0,-6);c.lineTo(0,28);ln(c,2.6)
  for(const[x,y]of[[-10,8],[9,14],[-7,20]]){el(c,x,y,3.4);fs(c,'#1d7a58',0)}
  el(c,0,-6,15,12);fs(c,'#3a2a44')
  for(const g of[-1,1]){el(c,g*6,-7,5,5.5);fs(c,'#fff',0);el(c,g*6+2,-6,2.4,2.8);fs(c,O,0)}
  c.beginPath();if(smug){c.moveTo(-4,0);c.quadraticCurveTo(0,3,4,0);ln(c,1.8,'#fff');el(c,2,3,2,2.4);fs(c,'#ff6b8a',0)}else{c.moveTo(-3,1);c.lineTo(3,1);ln(c,1.8,'#fff')}
  c.restore()}
export default(c,t,i)=>{
  const turn=sg(t,.24,.3)*(1-sg(t,.56,.62)),gone=sg(t,.27,.31)*(1-sg(t,.64,.68)),pop=t>.64&&t<.74?sin((t-.64)/.1*P):0
  // the bug, or its fading dotted ghost
  if(gone<1){c.save();c.translate(BX,BY);c.scale(1+pop*.25,1+pop*.25);c.translate(-BX,-BY);bug(c,1-gone,i,t>.7||t<.2);c.restore()}
  if(gone>0){c.save();c.globalAlpha=gone*(t<.5?1:1-sg(t,.6,.66));el(c,BX,BY+6,24,22);c.setLineDash([4,6]);ln(c,2.6,'#8a90a8');c.setLineDash([]);tx(c,'?',BX,BY+6,22,'#c49bff',4.5);c.restore()}
  if(t>.27&&t<.36){const p=(t-.27)/.09;c.globalAlpha=1-p;for(let k=0;k<6;k++){const a=k/6*2*P;el(c,BX+cos(a)*(10+p*22),BY+6+sin(a)*(10+p*20),5+p*3);fs(c,'#fff',2.4)}c.globalAlpha=1}
  if(pop>0)for(let k=0;k<4;k++){const a=k/4*2*P+.5,r=30+pop*6;c.beginPath();c.moveTo(BX+cos(a)*r,BY+6+sin(a)*r);c.lineTo(BX+cos(a)*(r+8),BY+6+sin(a)*(r+8));ln(c,3.2)}
  const hx=108+turn*10,hy=108
  // bob behind, coat
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(turn*.08)
  c.beginPath();c.moveTo(-54,-16);c.bezierCurveTo(-60,20,-58,40,-46,50);c.quadraticCurveTo(-30,54,-24,44);c.lineTo(24,44);c.quadraticCurveTo(30,54,46,50);c.bezierCurveTo(58,40,60,20,54,-16);fs(c,Hd)
  c.restore()
  c.beginPath();c.moveTo(80,150);c.bezierCurveTo(54,156,46,180,42,214);c.lineTo(40,244);c.lineTo(180,244);c.lineTo(178,214);c.bezierCurveTo(174,180,166,156,140,150);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(110,156);c.lineTo(110,244);ln(c,2.5,Jd)
  rr(c,44,206,132,12,3);fs(c,Jd,3);rr(c,102,203,16,18,3);fs(c,'#e0c060',2.5)
  for(const g of[-1,1]){c.beginPath();c.moveTo(110,152);c.lineTo(110+g*34,150);c.lineTo(110+g*24,182);c.closePath();fs(c,Jd,3)}
  for(const y of[172,190]){el(c,98,y,3);fs(c,'#3a2a20',1.5);el(c,122,y,3);fs(c,'#3a2a20',1.5)}
  // head
  c.save();c.translate(hx,hy);c.scale(.9,.9);c.rotate(turn*.08)
  hd(c,S)
  const side=t<.24||t>.7,lk=turn>.5
  c.save();c.translate(turn*9,0)
  face(c,lk?{e:EY,lx:7,ly:-1,op:.95,pp:.75,m:'o',mo:.9,br:-.6,bc:Hd}
    :side?{e:EY,lx:7,ly:0,op:.55,tl:3,m:t>.7?'frown':'smug',mo:1,br:-.5,bc:Hd,R:{br:.2}}
    :{e:EY,lx:-1,op:.85,m:'frown',br:.4,bc:Hd})
  c.restore()
  // bob bangs
  c.beginPath();c.moveTo(-52,40);c.bezierCurveTo(-60,-40,-30,-66,0,-66);c.bezierCurveTo(30,-66,60,-40,52,40)
  qs(c,[52,40,46,2,40,-12,28,-6,22,-22,10,-8,0,-20,-10,-8,-22,-22,-30,-6,-42,-12,-46,2,-52,40],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,40,P*1.2,P*1.45);ln(c,5,Hl)
  // deerstalker cap
  c.save();c.beginPath();c.moveTo(-50,-28);c.bezierCurveTo(-52,-84,52,-84,50,-28);c.quadraticCurveTo(0,-40,-50,-28);c.closePath();fs(c,CP);c.clip()
  c.strokeStyle='rgba(60,40,20,.45)';c.lineWidth=3;for(let k=-60;k<70;k+=12){c.beginPath();c.moveTo(k,-90);c.lineTo(k,-20);c.stroke();c.beginPath();c.moveTo(-60,k-20+0);c.stroke()}
  for(let y=-76;y<-28;y+=12){c.beginPath();c.moveTo(-60,y);c.lineTo(60,y);c.stroke()}
  c.restore();c.beginPath();c.moveTo(-50,-28);c.bezierCurveTo(-52,-84,52,-84,50,-28);c.quadraticCurveTo(0,-40,-50,-28);c.closePath();ln(c,3.5)
  c.beginPath();c.moveTo(-30,-33);c.quadraticCurveTo(0,-20,30,-33);c.quadraticCurveTo(0,-38,-30,-33);fs(c,CP,3.2)
  el(c,0,-80,7,5);fs(c,CP,3)
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*42,-40);c.quadraticCurveTo(g*58,-40,g*58,-12);c.quadraticCurveTo(g*56,0,g*48,-4);c.quadraticCurveTo(g*46,-26,g*40,-30);c.closePath();fs(c,CP,3);c.beginPath();c.moveTo(g*54,-2);c.quadraticCurveTo(g*56,8,g*52,14);ln(c,2.2,'#5a3a20')}
  c.restore()
  // whip lines as she spins round
  if(t>.24&&t<.32){const p=(t-.24)/.08;c.globalAlpha=1-p;for(const k of[0,1,2]){c.beginPath();c.arc(hx,hy,62+k*8,-1.1+k*.15,-.2+k*.1);ln(c,3.2)}c.globalAlpha=1}
  // sweat drop of suspicion
  if(t>.72||t<.2)drop(c,hx-44,hy-30+sin(t*2*P*3)*2,.9)
  // magnifying glass arm: resting, or thrust at the empty spot
  const m=E(turn),gx=lr(152,180,m),gy=lr(196,138,m),qx=lr(150,170,m),qy=lr(188,174,m)
  limb(c,[134,160,qx+10,qy+6,gx-16,gy+22],13,J)
  c.beginPath();c.moveTo(gx-12,gy+18);c.lineTo(gx-4,gy+8);st(c,6,'#5a3a20',3)
  el(c,gx,gy,16);c.fillStyle='rgba(180,225,255,.45)';c.fill();ln(c,4.5,'#e0c060');el(c,gx,gy,16);ln(c,1.6);el(c,gx,gy,20);ln(c,2.6)
  c.beginPath();c.arc(gx,gy,10,P*1.1,P*1.5);ln(c,3,'#fff')
  el(c,gx-17,gy+21,8.5,8);fs(c,S,3)
  // other hand on her chin
  limb(c,[80,162,58,206,96+turn*10,158],13,J);el(c,98+turn*10,156,8.5,8);fs(c,S,3)
}
