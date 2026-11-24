// a glasses girl with long blue-black twin tails and a green cardigan spots her secret key blown up on a giant billboard and leaps to splat over it, sweating and sliding down as it peeks out again
// tags: anxious, anime, coding, security, secret, panic
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const pl=(c,...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let j=2;j<p.length;j+=2)c.lineTo(p[j],p[j+1])}
const cv=(c,x,y,qx,qy,X,Y)=>{c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(qx,qy,X,Y)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){el(c,x,y+1,11,13);fs(c,'#fff',3.6);el(c,x+lx,y+1+ly,3,3.6);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp,11.5*pp);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='yell'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,9,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1,r=0)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(7,2,0,6);c.quadraticCurveTo(-7,2,0,-9);fs(c,'#8fd8ff',2.5);c.restore()}
const bangs=(c,H,Hl,pts=[50,26,44,-8,36,6,30,-18,20,0,12,-20,2,-2,-6,-20,-16,-2,-24,-18,-34,4,-42,-8,-50,26])=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,pts,.18);c.closePath();fs(c,H);c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()}
export const frames=25,delay=88,rim=4
const S='#ffe0cc',H='#23284a',Hd='#151832',Hl='#4a5590',CD='#5cc27a',CDd='#3a9a58',SK='#e0526a'
export default(c,t,i)=>{
  const T=t*2*P
  // billboard: posts, board, key text, lamps
  for(const x of[70,186]){rr(c,x-7,140,14,98,3);fs(c,'#7d8496');pl(c,x-7,170,x+7,190);pl(c,x+7,170,x-7,190);sk(c,2.4)}
  rr(c,12,22,232,124,8);fs(c,'#2b3350');rr(c,20,30,216,108,5);fs(c,'#fff8e8',3)
  c.save();rr(c,20,30,216,108,5);c.clip()
  const fl=t<.08?(i%2?.4:1):1;c.globalAlpha=.45*fl
  for(const x of[70,186]){pg(c,x-6,30,x-60,140,x+60,140,x+6,30);c.fillStyle='#ffe98a';c.fill()}c.globalAlpha=1
  tx(c,'API_KEY=',128,56,20,'#2b3350',0)
  tx(c,'sk-7f3a9c2e81',128,94,23,SK,0)
  tx(c,'d04b55e6aa1f',128,122,15,'#8a90a8',0)
  c.restore()
  for(const x of[70,186]){pl(c,x,22,x,12);sk(c,4);rr(c,x-12,6,24,10,4);fs(c,'#5d667e',3)}
  // girl's path: leap in, splat, slide, slip off
  let x,y,r,sp,ph
  if(t<.12){x=210;y=340;r=0;sp=.3;ph=0}
  else if(t<.3){const p=(t-.12)/.18,q=E(p);x=lp(214,128,q);y=lp(320,96,q)-sin(p*P)*44;r=(1-q)*-1.1;sp=lp(.3,.8,q);ph=1}
  else if(t<.82){const p=(t-.3)/.52;x=128+(p>.1?sin(T*12)*1.5:0);y=96+p*p*26;r=0;sp=t<.34?1.15-sg(t,.3,.34)*.15:1;ph=2}
  else{const p=(t-.82)/.18;x=128;y=122+p*p*240;r=p*.5;sp=lp(1,.5,p);ph=3}
  if(y<300){
  c.save();c.translate(x,y);c.rotate(r);c.scale(1.2,1.2)
  const sq=t>.3&&t<.34?1-sg(t,.3,.34)*.08:1;c.scale(1/sq,sq)
  // twin tails fanned out
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*22,-34);c.bezierCurveTo(f*50,-30,f*(58+sp*10),0,f*(48+sp*16),34+(ph==3?-20:0));c.quadraticCurveTo(f*(40+sp*8),4,f*14,-20);c.closePath();fs(c,H)
    rr(c,f*24-6,-40,12,10,4);fs(c,'#ffd34d',2.6)}
  // legs spread
  for(const f of[-1,1]){const a=f*(.15+sp*.45)+(ph==3?f*sin(T*8)*.2:0)
    c.save();c.translate(f*8,40);c.rotate(-a);pl(c,0,0,0,40);st(c,10,S);rr(c,-7,38,15,9,4);fs(c,'#4a3a5a',3);c.restore()}
  // skirt + cardigan torso
  c.beginPath();c.moveTo(-20,30);c.lineTo(20,30);c.lineTo(28,50);c.lineTo(-28,50);c.closePath();fs(c,'#3a4a8a')
  pl(c,-14,32,-18,48);pl(c,0,32,0,48);pl(c,14,32,18,48);sk(c,2,'#ff8a9a')
  c.beginPath();c.moveTo(-14,4);c.quadraticCurveTo(-24,8,-22,34);c.lineTo(22,34);c.quadraticCurveTo(24,8,14,4);c.closePath();fs(c,CD)
  pl(c,0,10,0,34);sk(c,2.4,CDd);for(const yy of[16,26]){el(c,4,yy,2.2);fs(c,'#fff',1.6)}
  // arms stretched wide to cover the key
  for(const f of[-1,1]){const a=lp(-1.1,-.06,min(1,sp))+(ph==3?sin(T*10+f)*.5:0),L=lp(36,76,min(1,sp)),ex=f*cos(a)*L,ey=14+sin(a)*L
    c.beginPath();c.moveTo(f*14,10);c.quadraticCurveTo(f*(14+L*.5),14+sin(a)*L*.3,ex,ey);st(c,13,CD)
    c.save();c.translate(ex+f*6,ey);c.rotate(f*P/2);el(c,0,0,8,9);fs(c,S,3);for(const k of[-1,0,1]){el(c,k*5,-8,2.6,4.6);fs(c,S,2.4)}c.restore()}
  // head
  c.save();c.translate(0,-30);c.rotate(ph==2?sin(T*6)*.05:0);c.scale(.6,.6)
  hd(c,S)
  const look=ph==2?(sin(T*4)>0?6:-6):0
  face(c,{e:['#1a3a8a','#6ab0ff'],op:1,pp:ph>=2?.72:.9,lx:look,ly:2,br:1,m:ph==2?'wave':ph==3?'yell':'o',mo:1.3,bs:'rgba(255,90,120,.35)'})
  for(const f of[-1,1]){el(c,f*20,11,16,15);sk(c,3.2,'#5a3a2a');el(c,f*20-6,4,3,5,.5);fs(c,'rgba(255,255,255,.8)',0)}pl(c,-4,9,4,9);sk(c,3,'#5a3a2a')
  bangs(c,H,Hl,[50,26,46,-6,38,8,32,-16,22,2,12,-20,2,0,-8,-20,-18,2,-28,-16,-38,8,-44,-6,-50,26])
  // sweat, worry lines
  if(ph>=2){for(let k=0;k<3;k++){const p=(t*5+k/3)%1,f=k%2?1:-1;drop(c,f*(54+p*24),-30+k*14-p*10+p*p*40,1.4*sin(p*P)+.2,f*.6)}
    c.beginPath();for(const yy of[-64,-56])c.moveTo(-26,yy),c.lineTo(-26+4,yy+3),c.lineTo(-26+8,yy),c.lineTo(-26+12,yy+3);sk(c,3,'#4a6ad0')}
  c.restore()
  c.restore()}
  // splat burst
  if(t>.29&&t<.36){c.save();c.translate(128,96);for(let k=0;k<10;k++){const a=k*P/5+.3;pl(c,cos(a)*100,sin(a)*56,cos(a)*114,sin(a)*64);sk(c,3.4)}c.restore()}
  if(t<.12){const z=sg(t,0,.05);c.save();c.translate(214,206);c.scale(z,z);tx(c,'!!',0,0,34,'#ff4d5e',6,'DejaVu Sans');c.restore()}
}
