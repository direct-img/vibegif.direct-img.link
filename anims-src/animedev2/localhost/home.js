// a lavender-haired girl in starry blue pyjamas and a floppy nightcap waves sleepily from the doorway of her cozy little house marked 127.0.0.1, cocoa in hand, smoke curling from the chimney
// tags: cozy, calm, anime, coding, wave, house
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
export const frames=20,delay=80,rim=4
const H='#b79cf0',Hd='#8a6ad0',Hl='#e2d4ff',S='#ffe9df',PJ='#8cc8ff',PJd='#5a9be0',W='#fff1d6',Wd='#e8cfa4',R='#e0605a',Rd='#b04040'
const star=(c,x,y,r,f)=>{c.beginPath();for(let k=0;k<10;k++){const a=-P/2+k*P/5,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,0)}
export default(c,t,i)=>{
  const T=t*2*P
  // chimney + smoke
  rr(c,176,40,26,50,3);fs(c,'#c46a4f');rr(c,171,34,36,12,3);fs(c,'#a8543e')
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=189-p*34+sin(p*P*2+k)*6,y=30-p*22,r=5+p*9
    c.globalAlpha=min(1,p*6,(1-p)*4);el(c,x,y,r,r*.8);fs(c,'#f1eef6',3);c.globalAlpha=1}
  // roof with scalloped tiles
  pg(c,12,116,128,22,244,116);fs(c,R)
  c.save();pg(c,12,116,128,22,244,116);c.clip();c.lineWidth=2.4;c.strokeStyle=Rd
  for(let r=0;r<5;r++){const y=50+r*16;for(let x=-8+(r%2)*9;x<260;x+=18){c.beginPath();c.arc(x,y,9,0,P);c.stroke()}}
  c.restore();pg(c,12,116,128,22,244,116);sk(c,3.5)
  // wall
  rr(c,30,106,196,134,4);fs(c,W)
  c.save();rr(c,30,106,196,134,4);c.clip();c.lineWidth=2;c.strokeStyle=Wd;for(let y=124;y<240;y+=18){c.beginPath();c.moveTo(30,y);c.lineTo(226,y);c.stroke()}c.restore()
  rr(c,30,106,196,134,4);sk(c,3.5)
  pl(c,12,116,128,22,244,116);sk(c,4)
  // plate under the gable
  rr(c,82,70,92,24,7);fs(c,'#7a4e33');rr(c,86,74,84,16,5);fs(c,'#fff6e0',2)
  tx(c,'127.0.0.1',128,82.5,13.5,'#5a3a26',0)
  // windows with warm glow
  for(const x of[44,180]){const g=c.createLinearGradient(0,132,0,176);g.addColorStop(0,'#ffe9a0');g.addColorStop(1,'#ffb85a')
    rr(c,x,132,36,40,5);fs(c,g);pl(c,x+18,132,x+18,172);pl(c,x,152,x+36,152);sk(c,2.6)
    rr(c,x-4,170,44,8,3);fs(c,'#9b6a4a',3)
    for(const[u,col]of[[8,'#ff6f9c'],[18,'#ffd34d'],[28,'#ff6f9c']]){el(c,x+u,166,4.5);fs(c,col,2.4)}}
  // doorway: warm interior and the open door
  const g=c.createLinearGradient(0,108,0,240);g.addColorStop(0,'#ffcf7a');g.addColorStop(1,'#f08a4a')
  c.beginPath();c.moveTo(90,240);c.lineTo(90,132);c.arc(128,132,38,P,0);c.lineTo(166,240);fs(c,g)
  c.beginPath();c.moveTo(166,240);c.lineTo(166,132);c.arc(128,132,38,0,P,1);c.lineTo(90,240);sk(c,5,'#7a4e33');c.beginPath();c.moveTo(166,240);c.lineTo(166,132);c.arc(128,132,41,0,P,1);c.lineTo(87,240);sk(c,2.4)
  pg(c,90,240,90,132,74,140,74,234);fs(c,'#8a5a3c')
  el(c,79,188,2.6);fs(c,'#ffd34d',1.8)
  // girl
  const by=sin(T)*1.2,wv=sin(T*2)
  // long back hair
  c.beginPath();c.moveTo(94,150);c.quadraticCurveTo(86,214,100,236);c.lineTo(156,236);c.quadraticCurveTo(170,214,162,150);c.closePath();fs(c,Hd)
  // pyjama body
  c.beginPath();c.moveTo(110,190+by);c.quadraticCurveTo(96,196,96,214);c.lineTo(94,240);c.lineTo(162,240);c.lineTo(160,214);c.quadraticCurveTo(160,196,146,190+by);c.closePath();fs(c,PJ)
  c.save();c.clip();for(const[x,y]of[[104,214],[150,222],[126,232],[140,204],[112,234]])star(c,x,y+by,5,'#fff59a');c.restore()
  c.beginPath();c.moveTo(114,190+by);c.lineTo(128,202+by);c.lineTo(142,190+by);fs(c,'#fff',3)
  // waving arm (her left, screen right)
  const ax=146,ay=200+by,ang=-1.05+wv*.32,hx=ax+cos(ang)*40,hy=ay+sin(ang)*40
  cv(c,ax,ay,ax+18,ay-2,hx,hy);st(c,14,PJ)
  c.save();c.translate(hx,hy);c.rotate(ang+P/2);el(c,0,-2,8,9);fs(c,S,3.2);for(const a of[-.5,0,.5]){el(c,sin(a)*9,-9-cos(a)*2,3,5,a);fs(c,S,2.6)}c.restore()
  // head
  c.save();c.translate(128,152+by);c.rotate(wv*.03-.04);c.scale(.66,.66)
  hd(c,S)
  const bl=i==7||i==8
  face(c,{e:['#5a2a8a','#d0a8ff'],op:bl?.15:.8,ex:bl?'calm':0,ly:1,m:'cat',mo:1.2,br:-.2,bc:Hd})
  bangs(c,H,Hl,[50,26,46,-6,38,4,30,-20,18,-2,10,-22,0,-4,-10,-22,-18,-2,-28,-18,-36,4,-44,-6,-50,26])
  // floppy nightcap
  c.beginPath();c.moveTo(-50,-30);c.quadraticCurveTo(-30,-92,30,-80);c.quadraticCurveTo(78,-66,82,-14+sin(T)*4);c.quadraticCurveTo(70,-48,44,-40);c.quadraticCurveTo(10,-56,-50,-30);fs(c,PJd)
  for(const[x,y]of[[-14,-64],[20,-70],[52,-50]])star(c,x,y,7,'#fff59a')
  c.beginPath();c.moveTo(-54,-28);c.quadraticCurveTo(0,-60,52,-36);st(c,10,'#fff')
  el(c,84,-8+sin(T)*4,11);fs(c,'#fff')
  c.restore()
  // cocoa mug in the other hand
  rr(c,98,206+by,22,22,5);fs(c,'#ff8fb1');el(c,109,206+by,10,3.5);fs(c,'#7a4a30',2.2)
  c.beginPath();c.arc(98,217+by,6,P*.5,P*1.5);sk(c,3.2);el(c,121,218+by,7,7.5);fs(c,S,3)
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1;c.globalAlpha=sin(p*P);cv(c,105+k*7,200+by-p*14,99+k*7+sin(p*6)*4,194-p*14,105+k*7,186-p*14);sk(c,2.2,'#fff');c.globalAlpha=1}
  // doormat
  rr(c,92,232,72,10,4);fs(c,'#7fc98a',3)
}
