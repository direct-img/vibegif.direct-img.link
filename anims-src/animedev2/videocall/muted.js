// a blonde girl with long wavy hair and a coral sweater chatters and gestures away on a video call while her muted mic icon flashes red, until a "you're muted" ping makes her freeze and facepalm
// tags: anime, coding, meeting, remote-work, embarrassed, talk
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
export const frames=30,delay=80,rim=3
const S='#ffe4d0',H='#ffd86a',Hd='#e0a83a',Hl='#fff3b8',SW='#ff7a6a',SWd='#d8584a'
const hand=(c,x,y,r,f=1)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(f,1)
  c.save();c.rotate(-1.2);rr(c,-4.5,-17,9,17,4.5);fs(c,S,2.6);c.restore()
  for(const[a,l]of[[-.36,16],[-.12,19],[.12,19],[.36,16]]){c.save();c.rotate(a);rr(c,-4.5,-l-7,9,l+7,4.5);fs(c,S,2.6);c.restore()}
  el(c,1,2,12,11);fs(c,S,0);c.beginPath();c.ellipse(1,2,12,11,0,-.15,P+.15);sk(c,3);c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,talk=t<.44||t>.92,ping=sg(t,.4,.46)*(1-sg(t,.86,.92)),frz=t>.47&&t<.58,palm=sg(t,.56,.64)*(1-sg(t,.84,.93))
  // call window
  rr(c,10,12,236,232,14);fs(c,'#262a3c',3.5)
  c.save();rr(c,16,18,224,188,9);c.clip()
  c.fillStyle='#f4e3c8';c.fillRect(16,18,224,188)
  rr(c,26,40,60,8,2);fs(c,'#c48a5c',2.4);for(const[x,w,col]of[[30,8,'#7aa0ff'],[40,7,'#ff8fb1'],[49,9,'#7ed4a0'],[60,6,'#ffd34d']]){rr(c,x,22,w,18,1.5);fs(c,col,2)}
  rr(c,196,120,30,30,4);fs(c,'#ffb06a',2.4);for(const a of[-.5,0,.5]){el(c,211+sin(a)*12,108-cos(a)*6,6,11,a);fs(c,'#5cc27a',2.4)}
  // girl: hair behind, sweater body
  const hy=104+(talk?abs(sin(T*7))*2:0)+palm*6,hr=talk?sin(T*3)*.05:palm*.12
  c.save();c.translate(122,hy);c.rotate(hr);c.scale(.8,.8)
  c.beginPath();c.moveTo(-50,-10);c.bezierCurveTo(-74,40,-48,80,-66,130);c.lineTo(66,130);c.bezierCurveTo(48,80,74,40,50,-10);fs(c,Hd);c.restore()
  c.beginPath();c.moveTo(98,146);c.quadraticCurveTo(62,150,56,206);c.lineTo(188,206);c.quadraticCurveTo(182,150,146,146);c.closePath();fs(c,SW)
  rr(c,104,138,36,16,7);fs(c,SW);pl(c,108,148,136,148);sk(c,2.4,SWd)
  c.save();c.translate(122,hy);c.rotate(hr);c.scale(.8,.8)
  hd(c,S)
  face(c,{e:['#1a4a5a','#7ad0d8'],ex:palm>.5?'shut':talk&&i%9==4?'happy':0,op:frz?1.05:.85,pp:frz?.6:1,lx:frz?8:2,ly:frz?-2:1,br:frz||palm>.5?1.2:.3,m:talk?(i%3==1?'smile':i%3==2?'grin':'o'):frz?'o':palm>.5?'wave':'flat',mo:1.3,bs:'rgba(255,100,125,.34)'})
  bangs(c,H,Hl,[50,26,46,-4,40,6,34,-14,26,4,20,-18,8,-4,-4,-26,-20,-14,-34,-4,-44,8,-50,26])
  // wavy side locks
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,0);c.bezierCurveTo(f*58,30,f*40,50,f*54,80);c.lineTo(f*42,82);c.bezierCurveTo(f*30,52,f*48,32,f*36,10);c.closePath();fs(c,H)}
  rr(c,-40,-66,80,10,5);c.save();c.rotate(0);c.restore()
  c.beginPath();c.arc(0,-24,47,P*1.18,P*1.82);sk(c,7);c.beginPath();c.arc(0,-24,47,P*1.18,P*1.82);sk(c,4,'#6ac0f0')
  if(palm>.5){c.beginPath();for(const x of[-28,-14,0,14,28]){c.moveTo(x,-62);c.lineTo(x,-46)}sk(c,2.6,'#6a5aa0')}
  c.restore()
  // gesturing hands / facepalm
  const g=talk?T*7:0
  const lh=[lp(70+sin(g)*8,116,palm),lp(176-abs(sin(g))*16,hy+4,palm)],rh=[176+sin(g+1.5)*8,182-abs(sin(g+1.3))*20]
  cv(c,72,206,62,190,lh[0],lh[1]+12);st(c,14,SW)
  hand(c,...lh,lp(-.3+sin(g)*.3,.5,palm),1)
  cv(c,172,206,182,198,rh[0],rh[1]+12);st(c,14,SW)
  hand(c,...rh,talk?.3+sin(g)*.35:.2,-1)
  // speech wiggles nobody can hear
  if(talk)for(let k=0;k<3;k++){const p=(t*6+k/3)%1;c.save();c.globalAlpha=sin(p*P);c.translate(160+p*14,96+k*12-6);c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(4,-4,8,0);c.quadraticCurveTo(12,4,16,0);sk(c,3,'#8a90a8');c.restore()}
  if(frz)for(const[x,y,r]of[[70,78,-.4],[176,72,.4]]){drop(c,x,y,1.1,r)}
  c.restore()
  // coworker tile + ping
  rr(c,184,24,48,38,6);fs(c,'#3a4060',2.6);el(c,208,46,12,11);fs(c,'#c8a6ff',2.4);for(const f of[-1,1]){pg(c,208+f*10,40,208+f*5,30,208+f*2,38);fs(c,'#c8a6ff',2.2)}for(const f of[-1,1]){el(c,208+f*5,45,1.8);fs(c,O,0)}
  if(ping>0){c.save();c.translate(186,86);c.scale(ping,ping);rr(c,-56,-14,104,28,10);fs(c,'#fff',3);pg(c,10,-14,22,-26,24,-14);fs(c,'#fff',0);pl(c,10,-14,22,-26,24,-14);sk(c,3)
    tx(c,"you're muted!",-4,0,12,'#e0304a',0,'DejaVu Sans');c.restore()}
  // control bar: flashing muted mic, cam, hang up
  const fl=i%4<2||frz,pul=frz?1.18:1+(fl?.06:0)
  c.save();c.translate(92,225);c.scale(pul,pul);el(c,0,0,15);fs(c,fl?'#ff3a4a':'#a8283a',3)
  rr(c,-4,-10,8,13,4);fs(c,'#fff',0);c.beginPath();c.arc(0,0,7,.2,P-.2);sk(c,2.4,'#fff');pl(c,0,7,0,10);sk(c,2.4,'#fff');pl(c,-9,-9,9,9);sk(c,5,'#ff3a4a');pl(c,-9,-9,9,9);sk(c,2.6,'#fff');c.restore()
  el(c,128,225,15);fs(c,'#4a5070',3);rr(c,120,219,11,12,2);fs(c,'#fff',0);pg(c,131,225,137,220,137,230);fs(c,'#fff',0)
  rr(c,150,215,32,20,10);fs(c,'#e0304a',3);c.save();c.translate(166,226);c.rotate(2.3);c.beginPath();c.arc(0,0,6,P*.2,P*.8,1);sk(c,3.4,'#fff');c.restore()
  if(fl&&!frz)for(const a of[-2.4,-1.57,-.74]){pl(c,92+cos(a)*20,225+sin(a)*20,92+cos(a)*25,225+sin(a)*25);sk(c,3,'#ff3a4a')}
}
