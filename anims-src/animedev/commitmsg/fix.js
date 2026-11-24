// a lavender-haired girl with round glasses and a green hoodie types commit message after commit message, "fix", "fix 2", "final fix", "final FINAL", then pulls at her hair in despair each time
// tags: anxious, anime, coding, git, terminal, keyboard
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
export const frames=24,delay=95,rim=4
const H='#a98ce8',Hd='#7656c2',Hl='#e0d4ff',S='#ffe6d6',J='#5cc98a',Jd='#3a9a66',EY=['#8a3e00','#ffc24a'],
  MS=['fix','fix 2','final fix','final FINAL']
export default(c,t,i)=>{
  const n=t*4,s=floor(n),f=n%1,pull=sg(f,.42,.5)*(1-sg(f,.94,1)),tug=pull*sin(f*P*10)*3,typ=pull<.5
  // terminal with the commit log scrolling up one line per commit
  rr(c,120,8,128,104,10);fs(c,'#1d2133');rr(c,120,8,128,20,[10,10,0,0]);fs(c,'#3a3f57',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((q,k)=>{el(c,131+k*11,18,3.6);fs(c,q,0)})
  tx(c,'commit -m',210,18.5,10,'#c9d0ea',0)
  c.save();rr(c,122,30,124,80,[0,0,8,8]);c.clip()
  const sc=(1-sg(f,0,.16))*26
  for(let k=-2;k<=0;k++){
    const m=MS[(s+k+8)%4],y=44+(k+2)*24+sc*24/26,cur=k==0,ch=cur?floor(m.length*sg(f,.04,.34)+.5):m.length,sh=m.slice(0,ch)
    c.font='bold 14px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
    c.fillStyle=cur?'#ffe066':'#9a8ad0';c.fillText(`"${sh}${ch==m.length?'"':''}`,128,y)
    if(cur&&(f>.4||i%2==0)){rr(c,129+(sh.length+1+(ch==m.length))*8.4,y-8,7,15,1);fs(c,'#e8ecff',0)}
  }
  c.restore()
  // long messy hair behind
  c.save();c.translate(68,116);c.scale(.86,.86);c.rotate(tug*.02)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-64,40,-66,90,-60,128);qs(c,[-60,128,-44,114,-30,132,-14,118,0,134,14,118,30,132,44,114,60,128],.2);c.bezierCurveTo(66,90,64,40,50,-14);fs(c,Hd)
  c.restore()
  // hoodie
  c.save();c.translate(-10,0)
  c.beginPath();c.moveTo(52,150);c.bezierCurveTo(28,154,20,176,18,204);c.quadraticCurveTo(16,234,28,238);c.lineTo(128,238);c.quadraticCurveTo(140,234,138,204);c.bezierCurveTo(136,176,126,154,104,150);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(52,150);c.quadraticCurveTo(78,176,104,150);c.quadraticCurveTo(78,162,52,150);fs(c,Jd,3)
  for(const x of[68,88]){c.beginPath();c.moveTo(x,160);c.lineTo(x+(x-78)*.1,186);ln(c,2.5,'#fff');el(c,x+(x-78)*.1,188,2.5);fs(c,'#fff',1.8)}
  rr(c,50,206,56,22,8);fs(c,Jd,2.5)
  c.restore()
  // keyboard
  pg(c,132,192,238,192,248,236,120,236);fs(c,'#e6e9f2')
  for(let r=0;r<3;r++)for(let k=0;k<7;k++){const d=(typ&&((k+r+i)%5==0))?1.5:0;rr(c,132+k*15-r*3,198+r*12+d,12,9,2);fs(c,'#fff',1.6)}
  // head
  c.save();c.translate(68+tug,116);c.scale(.86,.86);c.rotate(typ?.04:tug*.02)
  hd(c,S)
  const late=s==3
  face(c,typ?{e:EY,lx:5,ly:-1,op:.8,m:f<.45?'flat':'o',mo:.9,br:-.4,bc:Hd}
    :{e:EY,ex:late?'swirl':'shut',m:late?'wave':'grit',mo:1.2,br:1,bc:Hd})
  if(!typ)for(const g of[-1,1]){c.beginPath();c.moveTo(g*24,20);c.quadraticCurveTo(g*30,30+f*4,g*26,44);st(c,4,'#8fd4ff',2)}
  // round glasses
  for(const g of[-1,1]){el(c,g*20,11,15,14);ln(c,2.6,'#6a4a8a')}
  c.beginPath();c.moveTo(-5,8);c.quadraticCurveTo(0,5,5,8);ln(c,2.6,'#6a4a8a')
  // bangs plus ahoge, sides tugged out when she pulls
  c.beginPath();c.moveTo(-52,26);c.bezierCurveTo(-60,-44,-32,-70,0,-70);c.bezierCurveTo(32,-70,60,-44,52,26)
  qs(c,[52,26,46,-6,40,-2,34,-20,22,-4,16,-24,4,-6,-6,-26,-14,-6,-26,-20,-34,0,-42,-10,-52,26],.2);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-4,-68);c.bezierCurveTo(-10,-96,18,-100,14,-84);c.quadraticCurveTo(10,-78,4,-84);ln(c,4.5,O);ln(c,2,H)
  c.beginPath();c.arc(0,-26,40,P*1.22,P*1.46);ln(c,5,Hl)
  if(pull>.02)for(const g of[-1,1]){const p=pull,x=g*(48+p*18)
    c.beginPath();c.moveTo(g*40,-50);c.quadraticCurveTo(x,-58-p*8,x+g*4,-62-p*12);c.lineTo(x-g*2,-46);c.lineTo(x+g*10,-44-p*6);c.lineTo(x,-34);c.lineTo(x+g*6,-22+p*4);c.quadraticCurveTo(g*52,-20,g*46,-12);c.closePath();fs(c,H)}
  c.restore()
  // stress marks and sweat while pulling
  if(!typ){for(const[x,y,r]of[[16,40,.6],[106,30,-.5]]){c.save();c.translate(x,y);c.rotate(r);for(const a of[0,P/2,P,P*1.5]){c.beginPath();c.moveTo(cos(a)*3,sin(a)*3);c.quadraticCurveTo(cos(a+.4)*8,sin(a+.4)*8,cos(a+.8)*3,sin(a+.8)*3);ln(c,3,'#ff4f6d')}c.restore()}
    drop(c,14,84+f*20,.9)}
  // arms: typing on the keys, or flung up to grab her hair
  const hand=(x,y)=>{el(c,x,y,9,8.5);fs(c,S,3.2)}
  if(typ){const u=k=>-5*max(0,sin(t*P*18+k))
    limb(c,[32,168,96,214,152,206+u(0)],14,J);hand(152,206+u(0))
    limb(c,[104,166,170,200,206,206+u(2)],14,J);hand(206,206+u(2))}
  else{const o=pull*4,y=96-pull*6
    limb(c,[32,168,-2,140,28-o+tug,y],14,J);hand(28-o+tug,y)
    limb(c,[104,166,138,140,110+o*.5+tug,y],14,J);hand(110+o*.5+tug,y)}
}
