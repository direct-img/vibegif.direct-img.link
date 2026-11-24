// a deep brown-skinned girl with a messy bun skewered by a pencil and an orange turtleneck taps = on her calculator, gets 0.1 + 0.2 = 0.30000000000000004, and stares deadpan while one eye twitches
// tags: tired, anime, coding, math, calculator, deadpan
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
const H='#3a2418',Hl='#7a5038',S='#6b3f26',EY=['#5a2a08','#e8a04a'],J='#ff8a3d',Jd='#d9661e',K='#3b4050'
export default(c,t,i)=>{
  const pr=t>.04&&t<.12,fl=t>.1&&t<.18,tw=(t>.3&&t<.46)||(t>.62&&t<.9),j=tw?(i%2?1:-1):0,hx=128,hy=92
  // back hair and bun with a pencil through it
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-56,20,-52,36,-42,42);c.lineTo(42,42);c.bezierCurveTo(52,36,56,20,50,-10);fs(c,H)
  c.save();c.translate(6,-80);c.rotate(-.5);rr(c,-36,-5,72,10,3);fs(c,'#ffd34d',3);pg(c,36,-5,48,0,36,5);fs(c,'#f4dcae',3);el(c,46,0,2.5,2);fs(c,O,0);rr(c,-40,-5,8,10,2);fs(c,'#ff8fa8',3);c.restore()
  el(c,4,-78,26,22);fs(c,H);c.beginPath();c.arc(4,-78,14,P*.9,P*2);c.arc(4,-74,7,0,P*1.3);ln(c,2.6,Hl)
  c.restore()
  // turtleneck shoulders
  c.beginPath();c.moveTo(96,132);c.bezierCurveTo(60,138,46,150,40,176);c.lineTo(216,176);c.bezierCurveTo(210,150,196,138,160,132);c.closePath();fs(c,J)
  rr(c,106,124,44,18,7);fs(c,Jd,3);c.beginPath();for(const x of[116,128,140]){c.moveTo(x,128);c.lineTo(x,138)};ln(c,2,'#b84f10')
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  hd(c,S)
  face(c,fl?{e:EY,lx:0,ly:4,op:.95,m:'o',mo:.8,bc:H,br:.2}
    :{e:EY,lx:0,ly:3,op:.5,pp:.8,m:'flat',mo:1.2,bc:H,br:0,bs:'rgba(255,90,110,.25)',L:{op:.5},R:{op:tw?(j>0?.2:.7):.5,br:tw?(j>0?-1:.5):0,by:tw?j*2.5:0}})
  // messy fringe
  c.beginPath();c.moveTo(-50,16);c.bezierCurveTo(-58,-46,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-46,50,16)
  qs(c,[50,16,44,-14,34,-6,28,-26,16,-12,8,-30,-4,-14,-14,-28,-22,-8,-32,-22,-42,-6,-50,16],.22);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(30,-60);c.quadraticCurveTo(52,-70,56,-52);c.moveTo(-26,-62);c.quadraticCurveTo(-44,-80,-52,-62);ln(c,5,O);c.beginPath();c.moveTo(30,-60);c.quadraticCurveTo(52,-70,56,-52);c.moveTo(-26,-62);c.quadraticCurveTo(-44,-80,-52,-62);ln(c,2.2,H)
  c.beginPath();c.arc(0,-28,40,P*1.24,P*1.42);ln(c,5,Hl)
  for(const g of[-1,1]){el(c,g*46,26,3.2);fs(c,'#ffd34d',2.2)}
  // twitch marks
  if(tw){c.beginPath();for(const[a,b,x,y]of[[58,-10,70,-18],[60,4,74,2],[58,18,68,26]]){c.moveTo(a+j,b);c.lineTo(x+j,y)}ln(c,3.5)}
  c.restore()
  // calculator
  rr(c,14,148,228,96,14);fs(c,K);rr(c,14,148,228,96,14);c.save();c.clip();c.fillStyle='rgba(255,255,255,.08)';c.fillRect(14,148,228,12);c.restore()
  rr(c,24,158,208,48,6);fs(c,fl&&i%2?'#e4ffd8':'#bfe3b4',3)
  c.font='bold 13px DejaVu Sans Mono';c.textAlign='right';c.textBaseline='middle';c.fillStyle='#4a6a48';c.fillText('0.1 + 0.2 =',226,170)
  c.font='bold 16px DejaVu Sans Mono';c.fillStyle='#1e3320';c.fillText('0.30000000000000004',227,192)
  const ks=['AC','0','.','+','='];ks.forEach((s,k)=>{const x=30+k*40,d=k==4&&pr?3:0;rr(c,x,214+d,34,22,6);fs(c,k==4?'#ff8a3d':k?'#5b6276':'#e84a4a',3);tx(c,s,x+17,225+d,k?15:12,'#fff',0)})
  // hands: one holding the edge, one tapping =
  el(c,22,160,9,10);fs(c,S,3)
  const fx=pr?207:226,fy=pr?214:208
  c.beginPath();c.moveTo(232,250);c.quadraticCurveTo(244,216,fx+8,fy+8);st(c,12,J,3)
  rr(c,fx-4,fy-10,8,16,4);fs(c,S,3);el(c,fx+6,fy+8,10,8.5);fs(c,S,3)
  if(fl)for(let k=0;k<5;k++){const a=-P/2+(k-2)*.45;c.beginPath();c.moveTo(128+cos(a)*112,182+sin(a)*58);c.lineTo(128+cos(a)*122,182+sin(a)*64);ln(c,3)}
}
