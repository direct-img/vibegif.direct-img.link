// a panicking girl with a brown bob, yellow hi-vis vest and a spinning red siren hat sprints back and forth across the frame, arms flailing, crying WEE WOO
// tags: anxious, anime, coding, alarm, panic, fast
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
export const frames=24,delay=70,rim=4
const S='#b0784e',H='#6a3a1e',Hd='#4a2410',Hl='#a8683a',V='#ffe03a',Vd='#e0a800',TE='#34406a'
export default(c,t,i)=>{
  const T=t*2*P,x=128-68*cos(T),v=sin(T),d=max(-1,min(1,v*3)),ph=T*6,by=236-abs(sin(ph))*7
  const run=abs(v)>.2
  // speed lines + dust behind her
  if(run)for(let k=0;k<3;k++){const yy=150+k*26,xx=x-d*(46+k*6);const xe=max(12,min(244,xx-d*(18+k*4)));if(abs(xe-xx)>6){pl(c,xx,yy,xe,yy);sk(c,3.2,'#9aa4c0')}}
  for(let k=0;k<3;k++){const p=(t*6+k/3)%1,dx=x-d*(20+p*30),r=4+p*7;c.globalAlpha=(1-p)*(abs(v)>.3?1:.4);el(c,dx,232-p*6,r,r*.8);fs(c,'#e8e0d4',2.4);c.globalAlpha=1}
  c.save();c.translate(x,0);c.scale((v>=0?1:-1)*(.6+.4*min(1,abs(v)*4)),1)
  const lean=.18
  c.save();c.translate(0,by);c.rotate(lean)
  // legs
  for(const f of[-1,1]){const a=sin(ph+(f>0?0:P))*.9;c.save();c.translate(f*5,-38);c.rotate(-a);pl(c,0,0,0,30);st(c,11,S);c.translate(0,30);rr(c,-6,-4,18,10,5);fs(c,'#fff',3);rr(c,-6,3,18,4,2);fs(c,'#ff4d5e',0);c.restore()}
  // shorts, tee, hi-vis vest
  c.beginPath();c.moveTo(-17,-52);c.lineTo(17,-52);c.lineTo(19,-36);c.lineTo(-19,-36);c.closePath();fs(c,'#4a7ac8')
  c.beginPath();c.moveTo(-13,-88);c.quadraticCurveTo(-24,-84,-22,-48);c.lineTo(22,-48);c.quadraticCurveTo(24,-84,13,-88);c.closePath();fs(c,TE)
  c.beginPath();c.moveTo(-10,-88);c.quadraticCurveTo(-22,-84,-21,-48);c.lineTo(-4,-48);c.lineTo(-4,-80);c.closePath();fs(c,V,3)
  c.beginPath();c.moveTo(10,-88);c.quadraticCurveTo(22,-84,21,-48);c.lineTo(4,-48);c.lineTo(4,-80);c.closePath();fs(c,V,3)
  for(const yy of[-70,-58]){pl(c,-20,yy,-5,yy);pl(c,5,yy,20,yy);sk(c,3.5,'#e8eef8')}
  // flailing arms
  for(const f of[-1,1]){const a=-P/2+f*(.75+sin(ph*1.5+f)*.45),ex=f*14+cos(a)*30,ey=-84+sin(a)*30
    cv(c,f*14,-84,f*14+cos(a)*14+f*4,-84+sin(a)*14,ex,ey);st(c,9,S);el(c,ex,ey,6.5);fs(c,S,3)}
  c.restore()
  // head
  c.save();c.translate(4,by-116);c.rotate(lean*.6+sin(ph)*.04);c.scale(.62,.62)
  c.beginPath();c.moveTo(-48,-12);c.bezierCurveTo(-60,20,-54,44,-44,48);c.quadraticCurveTo(-30,52,-20,42);c.lineTo(20,42);c.quadraticCurveTo(30,52,44,48);c.bezierCurveTo(54,44,60,20,48,-12);fs(c,Hd)
  hd(c,S)
  face(c,{e:['#0a5a2a','#5ae07a'],op:1.05,pp:.55,lx:4,ly:0,br:1.3,m:'yell',mo:1.5,bs:'rgba(255,90,110,.3)'})
  // streaming tears
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*20,22);c.quadraticCurveTo(f*20-28,26+sin(ph)*3,-56,18+f*6);sk(c,5,'#8fd8ff')}
  bangs(c,H,Hl,[50,26,48,-2,40,-2,40,-16,26,-16,26,-22,12,-22,-2,-22,-16,-22,-28,-22,-40,-16,-40,-2,-48,-2,-50,26])
  // siren hat: strap, dome, spinning beams
  c.beginPath();c.moveTo(-50,-6);c.quadraticCurveTo(-46,-66,0,-70);c.quadraticCurveTo(46,-66,50,-6);sk(c,12);sk(c,6,'#3a3a4a')
  const sa=T*4
  for(const k of[0]){const a=sa+k*P,s=sin(a),w=abs(cos(a))*26+12,len=96
    if(s<0){c.save();c.globalAlpha=.5;pg(c,0,-96,cos(a)*len,-96-w,cos(a)*len,-96+w);c.fillStyle='#ff7070';c.fill();c.restore()}}
  rr(c,-24,-80,48,12,4);fs(c,'#5d667e',3.4)
  c.beginPath();c.moveTo(-18,-80);c.lineTo(-18,-98);c.arc(0,-98,18,P,0);c.lineTo(18,-80);c.closePath();fs(c,'#ff3a4a',3.4)
  const fl=sin(sa)>.5
  if(fl){c.save();c.globalAlpha=.5;el(c,0,-98,34);c.fillStyle='#ff9090';c.fill();c.restore();c.lineWidth=4;c.strokeStyle='#ff3a4a';for(let k=0;k<8;k++){const a=k*P/4;pl(c,cos(a)*30,-98+sin(a)*30,cos(a)*40,-98+sin(a)*40);c.stroke()}}
  el(c,-6,-104,5,7,-.4);fs(c,fl?'#fff':'#ffb0b0',0)
  for(const k of[0]){const a=sa+k*P,s=sin(a),w=abs(cos(a))*26+12,len=96
    if(s>=0){c.save();c.globalAlpha=.5;pg(c,0,-96,cos(a)*len,-96-w,cos(a)*len,-96+w);c.fillStyle='#ff7070';c.fill();c.restore()}}
  c.restore()
  c.restore()
  // WEE WOO
  const ww=i%4<2?'WEE':'WOO';c.save();c.translate(x+d*-4,by-206+(i%2)*2);c.rotate(i%4<2?-.12:.12);tx(c,ww,0,0,18,'#ff3a4a',5,'DejaVu Sans');c.restore()
}
