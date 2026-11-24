// a girl with pink twin buns, a bandana, yellow rubber gloves and a blue apron swats away a cluster of cute green zombie process ghosts with her broom, only for them to drift right back
// tags: angry, tired, anime, coding, ghost, cleaning
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
export const frames=18,delay=100,rim=4
const S='#a86a44',H='#ff7ab8',Hd='#d84a8e',Hl='#ffc0e0',AP='#4a9ae0',APd='#2a6ab8',GL='#ffd84a',G='#a6f0a0',Gd='#5cc878'
const ghost=(c,x,y,s,r,dz,ph)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  for(const f of[-1,0]){c.save();c.translate(-16,f*10+4);c.rotate(.1+sin(ph+f)*.15);rr(c,-14,-4,16,8,4);fs(c,G,2.8);c.restore()}
  c.beginPath();c.moveTo(-20,8);c.bezierCurveTo(-22,-30,22,-30,20,8);for(let k=0;k<=4;k++)c.quadraticCurveTo(20-k*10+5,18+sin(ph*2+k)*3,20-k*10,14+(k%2)*4);c.closePath();fs(c,G,3)
    c.beginPath();c.moveTo(-20,8);c.bezierCurveTo(-22,-30,22,-30,20,8);sk(c,3)
  for(const f of[-1,1]){const ex=f*8-3;if(dz){pl(c,ex-3,-6,ex+3,0);pl(c,ex+3,-6,ex-3,0);sk(c,2.4)}else{el(c,ex,-3,4.5,5);fs(c,'#fff',2.2);el(c,ex-1,-2,2,2.4);fs(c,O,0);pl(c,ex-5,-5.5,ex+5,-5.5);sk(c,2.4)}}
  el(c,-3,7,3.2,3.6);fs(c,'#3a5a3a',2);el(c,-3,9.5,2,1.6);fs(c,'#ff8c9c',0)
  pl(c,6,-17,14,-12);pl(c,8,-19,7,-13);pl(c,11,-17,10,-11);sk(c,1.8)
  rr(c,-12,-26,14,12,4);fs(c,'#fff',2.4);tx(c,'Z',-5,-19.5,10,'#3a8a4a',0)
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,wind=sg(t,.02,.14),sw=sg(t,.14,.24),back=sg(t,.3,.96)
  const push=sg(t,.17,.27)*(1-back),dz=t>.18&&t<.42
  // ghosts drifting
  const GS=[[166,62,1.2,0],[192,128,1.3,2],[166,194,1.15,4]]
  for(const[k,[bx,by,s,ph]]of GS.entries()){const kk=push*(40-k*4)
    ghost(c,round(bx+kk+sin(T*2+ph)*4),round(by+cos(T*2+ph)*4-push*8*(k-1)),s,push*sin(T*3+k)*.6,dz,T*2+ph)}
  if(t>.18&&t<.4)for(let k=0;k<3;k++){const a=k*2.1+T*3;c.save();c.translate(214+cos(a)*14,74+k*60+sin(a)*5);c.rotate(a);tx(c,'*',0,0,14,'#ffe44d',3);c.restore()}
  // girl body: apron dress, legs
  const gx=74
  for(const f of[-1,1]){rr(c,gx+f*10-6,204,12,24,5);fs(c,S);el(c,gx+f*10+2,232,10,5.5);fs(c,'#ff6f9c',3)}
  c.beginPath();c.moveTo(gx-16,132);c.quadraticCurveTo(gx-26,140,gx-30,206);c.lineTo(gx+30,206);c.quadraticCurveTo(gx+26,140,gx+16,132);c.closePath();fs(c,'#7a5ac8')
  c.beginPath();c.moveTo(gx-14,150);c.lineTo(gx+14,150);c.lineTo(gx+22,204);c.lineTo(gx-22,204);c.closePath();fs(c,AP,3)
  el(c,gx,176,6,4);fs(c,'#fff',2.2);pl(c,gx-12,150,gx-14,134);pl(c,gx+12,150,gx+14,134);sk(c,3,APd)
  // head
  c.save();c.translate(gx,92);c.rotate(-.04+sw*.08-wind*.05);c.scale(.68,.68)
  for(const f of[-1,1]){el(c,f*40,-52,20,19);fs(c,H);c.beginPath();c.arc(f*40,-52,11,P*.9,P*1.8);sk(c,2.6,Hd)}
  hd(c,S)
  const mad=t<.3,huff=t>.42
  face(c,{e:['#0a4a6a','#4ac0f0'],ex:sw>.2&&sw<1&&t<.28?'shut':0,op:mad?.62:.72,lx:5,ly:1,br:mad?-1.2:.4,tl:mad?2:0,m:t>.14&&t<.3?'yell':huff?'frown':'grit',mo:1.2,bs:'rgba(255,90,120,.28)'})
  bangs(c,H,Hl,[50,26,46,-6,38,6,30,-16,20,2,12,-18,2,0,-8,-18,-18,2,-28,-14,-38,6,-44,-6,-50,26])
  // bandana
  c.beginPath();c.moveTo(-50,-30);c.quadraticCurveTo(0,-62,50,-30);c.lineTo(46,-44);c.quadraticCurveTo(0,-76,-46,-44);c.closePath();fs(c,'#ffd84a');for(const[x,y]of[[-24,-52],[0,-60],[24,-52]]){el(c,x,y,3);fs(c,'#fff',0)}
  c.beginPath();c.moveTo(48,-36);c.lineTo(66,-46+sin(T*4)*3);c.lineTo(62,-28+sin(T*4)*3);c.closePath();fs(c,'#ffd84a',3)
  if(huff){const p=(t*4)%1,z=sin(p*P);el(c,-36-p*12,34+p*4,(6+p*4)*z,(4+p*3)*z);fs(c,'#fff',2.4)}
  c.restore()
  if(t>.5){const p=(t*3)%1;drop(c,gx+42,60+p*14,.9,.4)}
  // broom: pivots at the hands, swept from back-left to forward-right
  const a=lp(lp(lp(1.0,2.0,wind),-.4,sw),1.0,sg(t,.34,.56)),hx=gx+18,hy=158
  const tx0=hx-cos(a)*30,ty0=hy-sin(a)*30,ex=hx+cos(a)*54,ey=hy+sin(a)*54
  pl(c,tx0,ty0,ex,ey);st(c,6,'#c48a5c',3)
  c.save();c.translate(ex,ey);c.rotate(a-P/2)
  c.beginPath();c.moveTo(-9,-4);c.lineTo(9,-4);c.lineTo(20,30);c.quadraticCurveTo(0,36,-20,30);c.closePath();fs(c,'#f2cf7a')
  c.lineWidth=1.8;c.strokeStyle='#c89a3a';for(let k=-3;k<=3;k++){c.beginPath();c.moveTo(k*2.5,0);c.lineTo(k*5.5,30);c.stroke()}
  rr(c,-11,-8,22,8,3);fs(c,'#e0526a',2.8);c.restore()
  // gloved hands on the handle
  for(const d of[0,22]){const x=hx+cos(a)*(d-10),y=hy+sin(a)*(d-10);el(c,x,y,8,7.5);fs(c,GL,3)}
  cv(c,gx-14,136,gx-22,154,hx+cos(a)*-10-4,hy+sin(a)*-10+2);st(c,9,'#7a5ac8')
  cv(c,gx+14,136,gx+26,146,hx+cos(a)*12-4,hy+sin(a)*12+2);st(c,9,'#7a5ac8')
  for(const d of[-10,12]){const x=hx+cos(a)*d,y=hy+sin(a)*d;el(c,x,y,8,7.5);fs(c,GL,3)}
  // swoosh
  if(t>.15&&t<.28){c.beginPath();c.arc(hx,hy,80,-.5,1.1);sk(c,4,'#cfe6ff');c.beginPath();c.arc(hx,hy,68,-.3,.9);sk(c,3,'#cfe6ff')}
}
