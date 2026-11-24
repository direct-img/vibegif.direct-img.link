// a girl with long burgundy hair, blunt bangs, a grey fedora and a khaki trench coat follows a git blame trail of code lines with her magnifying glass up to a mirror, sees her own face in the lens and recoils in shock
// tags: anxious, anime, coding, git, magnifying-glass, guilty
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round,hypot}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lp=(a,b,k)=>a+(b-a)*k,hop=(t,a,b)=>t<a||t>b?0:sin((t-a)/(b-a)*P)
// limb: a thick outlined quadratic stroke
const lb=(c,x0,y0,x1,y1,x2,y2,w,f)=>{c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x1,y1,x2,y2);st(c,w,f)}
// head shape, centred on the eyes' row, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// hair cap with a fringe: p runs from the right temple across to the left one
const cap=(c,p,col,k=.18,hl)=>{c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26);qs(c,p,k);c.closePath();fs(c,col)
  if(hl){c.beginPath();c.arc(0,-24,40,P*1.2,P*1.46);sk(c,5,hl);c.beginPath();c.arc(0,-24,40,P*1.56,P*1.64);sk(c,5,hl)}}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,r=k%2?2.2:7.5;c.lineTo(x+lx+cos(q)*r,y+ly+sin(q)*r)}c.closePath();fs(c,'#fff',0);el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6*pp**.5,y+ly-4*pp**.5,3.4*pp**.5,4.2*pp**.5);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// face: o.e iris colours, ex eye style, m mouth, mo mouth scale, br brow worry(+)/anger(-), by brow lift, bc brow colour, fr freckles
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,by=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.32)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br-by);c.quadraticCurveTo(f*20,-15-br-by,f*28,-12+3*br-by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='open'){c.moveTo(-6,-3);c.quadraticCurveTo(0,-5,6,-3);c.quadraticCurveTo(8,9,0,10);c.quadraticCurveTo(-8,9,-6,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,3.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='gasp'){c.moveTo(0,-6);c.bezierCurveTo(8,-6,8,12,0,12);c.bezierCurveTo(-8,12,-8,-6,0,-6);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='chew'){el(c,0,0,5,3.2);fs(c,'#a3304a',2.2/mo)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#fff3a0',w=2.5)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// open hand, fingers pointing up (rotate with a), thumb to the left (mirror with s<0)
const palm=(c,x,y,a,col,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,abs(s))
  for(const L of[0,1]){for(const[q,l]of[[-.55,10],[-.18,12],[.18,12],[.52,10],[-1.45,8]]){c.beginPath();c.moveTo(0,1);c.lineTo(sin(q)*l,-cos(q)*l);c.lineWidth=L?4.4:10.4;c.strokeStyle=L?col:O;c.stroke()}el(c,0,3,L?7:10.4,L?6.5:9.9);c.fillStyle=L?col:O;c.fill()}
  c.restore()}
// keyframes [phase, ms]: the walk is even, the stare and the shock hold longer
const KF=[[0,130],[.1,130],[.2,130],[.3,130],[.4,100],[.46,90],[.52,450],[.58,70],[.62,90],[.68,140],[.74,320],[.85,110],[.91,110],[.96,120]]
export const frames=KF.length,delay=KF.map(k=>k[1]),rim=4
const H='#7a2442',Hd='#4e1229',Hl='#b85a80',S='#ffe5d4',C='#dcb47c',Cd='#b08a52',G='#5f667c',R='#e0485e',I=['#0e5a3c','#72e3a6']
const K=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff']
// trail of blame lines: x, y, tilt (the first two lie behind her)
const TR=[[26,222,-.1],[50,237,.08],[104,212,.12],[126,198,-.06],[146,184,.1]],MX=194,MY=114
const card=(c,x,y,a,k)=>{c.save();c.translate(x,y);c.rotate(a);rr(c,-17,-7.5,34,15,3);fs(c,'#fff',2.8)
  rr(c,-14,-4,9,8,2);fs(c,'#b9b3cc',0);rr(c,-2,-3,14-k%2*5,6,3);fs(c,K[k%5],0);c.restore()}
// head: o = face options, sh = hat lift
const head=(c,o,sh=0,pale=0)=>{
  hd(c,S)
  if(pale>.5){c.save();hd(c,S,0);c.clip();c.fillStyle='#c9cdf5';c.fillRect(-50,-40,100,38)
    for(let x=-12;x<=12;x+=6){c.beginPath();c.moveTo(x,-16);c.lineTo(x,-6+abs(x)*.2);sk(c,2,'#5a63c0')}c.restore()}
  face(c,o)
  cap(c,[50,26,46,-12,36,-17,24,-15,12,-17,0,-15,-12,-17,-24,-15,-36,-17,-46,-12,-50,26],H,.12,Hl)
  // brows over the blunt bangs
  const br=o.br||0,by=o.by||0
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*12,-9-4*br-by);c.quadraticCurveTo(f*20,-13-br-by,f*28,-10+3*br-by);sk(c,2.8,Hd)}
  // side locks
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*40,-24);c.quadraticCurveTo(f*54,20,f*48,58);c.quadraticCurveTo(f*42,36,f*34,10);c.closePath();fs(c,H)}
  // fedora
  c.save();c.translate(0,-50-sh);c.rotate(-.12-sh*.012)
  const crown=()=>{c.beginPath();c.moveTo(-36,0);c.lineTo(-32,-40);c.quadraticCurveTo(-16,-52,0,-42);c.quadraticCurveTo(16,-52,32,-40);c.lineTo(36,0)}
  el(c,0,0,62,13);fs(c,G)
  crown();c.closePath();fs(c,G,0);c.save();c.clip();c.fillStyle=R;c.fillRect(-40,-13,80,11);c.restore();crown();sk(c,3.5)
  c.beginPath();c.moveTo(-34,-13);c.lineTo(34,-13);c.moveTo(-35,-2);c.lineTo(35,-2);sk(c,2.2)
  c.beginPath();c.ellipse(0,0,62,13,0,0,P);c.closePath();fs(c,G,0);c.beginPath();c.ellipse(0,0,62,13,0,0,P);sk(c,3.5)
  c.beginPath();c.moveTo(-20,-44);c.quadraticCurveTo(-24,-26,-22,-14);sk(c,3,'#8890a8')
  c.restore()
}
const backhair=c=>{c.beginPath();c.moveTo(-52,-30);c.bezierCurveTo(-58,-80,58,-80,52,-30);c.quadraticCurveTo(64,40,58,100);c.lineTo(44,92);c.lineTo(32,104);c.lineTo(-32,104);c.lineTo(-44,92);c.lineTo(-58,100);c.quadraticCurveTo(-64,40,-52,-30);fs(c,Hd)}
const coat=c=>{c.beginPath();c.moveTo(-16,-76);c.quadraticCurveTo(-30,-74,-30,-60);c.lineTo(-36,-20);c.quadraticCurveTo(0,-13,36,-20);c.lineTo(30,-60);c.quadraticCurveTo(30,-74,16,-76);c.closePath()}
// mirror glass and the reflection (mirrored her, upper body)
const glass=(c,o,k,dx,dy,pale)=>{
  c.fillStyle='#c4e8fa';c.fillRect(MX-60,MY-80,120,160);pg(c,MX-60,MY+30,MX+60,MY-50,MX+60,MY+80,MX-60,MY+80);c.fillStyle='#addcf4';c.fill()
  c.save();c.translate(MX-8+dx,MY-4+112*.8+dy);c.scale(-.8,.8)
  c.save();c.translate(2,-112);c.scale(.78,.78);backhair(c);c.restore()
  coat(c);fs(c,C);c.beginPath();c.moveTo(-14,-76);c.lineTo(0,-56);c.lineTo(14,-76);fs(c,'#fff',3)
  c.save();c.translate(2,-112);c.rotate(-.12*k);c.scale(.78,.78);head(c,o,k*12,pale);c.restore();c.restore()
  for(const[a,b,l]of[[22,-42,16],[30,-30,10]]){c.beginPath();c.moveTo(MX+a,MY+b);c.lineTo(MX+a+l*.6,MY+b-l);sk(c,4,'rgba(255,255,255,.85)')}
}
export default(c,_,i)=>{
  const t=KF[i][0]
  // timeline: scan along the trail, lift the glass to the mirror, freeze, recoil, ease back
  const sc=sg(t,0,.38),up=sg(t,.38,.5),k=sg(t,.56,.61)*(1-sg(t,.84,.98)),bk=sg(t,.84,1),fz=sg(t,.5,.56)*(1-k)
  const shake=k>.5&&t<.74?(i%2?1.8:-1.8):0
  const gx=lp(lp(60,86,sc),60,bk)-16*k+shake,gy=236-14*hop(t,.56,.68)-2.5*abs(sin(sc*P*3))
  // glass keyframes: along the cards, up to the mirror face, flung back
  let lx=lp(lp(104,146,sc),176,up),ly=lp(lp(210,182,sc),114,up),la=lp(-.5,-.75,up)
  if(t>.56){const q=sg(t,.56,.62);lx=lp(176,gx+44,q);ly=lp(114,gy-150,q);la=lp(-.75,-1.4,q)}
  if(t>.84){lx=lp(gx+44,104,bk);ly=lp(gy-150,210,bk);la=lp(-1.4,-.5,bk)}
  const hx=lx-cos(la)*32,hy=ly-sin(la)*32
  // face states
  const o=t<.4?{e:I,op:.72,lx:6,ly:5,br:-.4,m:'smug'}
    :t<.56?{e:I,lx:7,ly:-3,pp:lp(1,.55,fz),m:fz>.3?'flat':'o',br:lp(0,.5,fz)}
    :t<.86?{e:I,pp:.35,by:4,br:.7,m:'gasp',mo:1.2}
    :{e:I,lx:3,ly:2,m:'wave',br:.8}
  const pale=k,dx=(88-gx)*.35-shake,dy=(gy-236)*.6
  // mirror: stand, frame, glass with reflection
  c.beginPath();c.moveTo(MX-26,170);c.lineTo(MX-36,236);c.moveTo(MX+26,170);c.lineTo(MX+36,236);st(c,6,'#c98a3c');el(c,MX-38,238,10,4);fs(c,'#c98a3c',3);el(c,MX+38,238,10,4);fs(c,'#c98a3c',3)
  el(c,MX,MY,49,67);fs(c,'#f2b544')
  el(c,MX,MY,49,67);c.save();c.clip();el(c,MX-4,MY+4,49,67);sk(c,5,'#c98a3c');c.restore()
  el(c,MX,MY,40,58);c.save();c.clip();glass(c,o,k,dx,dy,pale);c.restore()
  el(c,MX,MY,40,58);sk(c,3.5);el(c,MX,MY,49,67);sk(c,3.5)
  el(c,MX,MY-70,8,8);fs(c,'#f2b544',3);spk(c,MX,MY-70,5,'#fff',0)
  // dashed trail connecting the blame lines up to the mirror
  c.setLineDash([3,7]);c.beginPath();for(const[x,y]of TR)c.lineTo(x,y);c.lineTo(162,168);sk(c,3,'#8c84a8');c.setLineDash([])
  TR.forEach(([x,y,a],k)=>card(c,x,y,a,k))
  // git blame label
  rr(c,104,12,92,24,7);fs(c,'#262b45');tx(c,'git blame',150,25,14,'#7ee0ff',0)
  // girl
  c.save();c.translate(gx,gy);c.rotate(-.1*k+.04*sc*(1-up))
  c.save();c.translate(2,-112);c.rotate(-.1*k);c.scale(.78,.78);backhair(c);c.restore()
  for(const f of[-1,1]){const w=sin(sc*P*3)*(1-up)*f*3;c.beginPath();c.moveTo(f*9,-30);c.lineTo(f*10+f*k*4+w,-7);st(c,10,'#2f2a3c');el(c,f*11+f*k*5+w,-3,10,5.5);fs(c,'#7a3b2a',3)}
  coat(c);fs(c,C);c.save();coat(c);c.clip();c.fillStyle=Cd;c.fillRect(-40,-52,80,9);c.beginPath();c.moveTo(0,-50);c.lineTo(0,-10);sk(c,2.5);c.restore();coat(c);sk(c,3.5)
  rr(c,-6,-53,12,11,2);fs(c,'#e9c45a',2.5)
  c.beginPath();c.moveTo(-14,-76);c.lineTo(0,-56);c.lineTo(14,-76);fs(c,'#fff',3)
  for(const f of[-1,1]){pg(c,f*15,-77,f*4,-60,f*24,-64);fs(c,Cd,3)}
  el(c,-5,-70,5,3.5,-.3);fs(c,R,2.4);el(c,5,-70,5,3.5,.3);fs(c,R,2.4);el(c,0,-70,2.6);fs(c,R,2.4)
  c.restore()
  // right arm to the glass
  const sx=gx+20,sy=gy-66
  lb(c,sx,sy,lp(sx+12,sx+20,k),lp(sy+22,sy-4,k),hx,hy,11,C)
  // head
  c.save();c.translate(gx+2-6*k,gy-112);c.rotate(.06*sc*(1-up)-.14*k);c.scale(.78,.78);head(c,o,k*14,pale);c.restore()
  // left arm: hand on chin while thinking, palm up to her cheek in shock
  const ax=gx-20,ay=gy-66,th=1-max(k,up*(1-bk))
  const px=lp(lp(gx-36,gx-40,k),gx-4,th),py=lp(lp(gy-92,gy-96,k),gy-80,th)
  lb(c,ax,ay,lp(gx-40,gx-36,th),lp(gy-62,gy-58,th),px,py,11,C);if(k>.5)palm(c,px,py-4,-.35,S,1.05);else{el(c,px,py,7.5,8);fs(c,S,3)}
  // magnifying glass: handle, lens with a magnified view, gold rim
  c.beginPath();c.moveTo(hx-cos(la)*6,hy-sin(la)*6);c.lineTo(hx+cos(la)*14,hy+sin(la)*14);st(c,6,'#8a5530')
  el(c,lx,ly,19);c.save();c.clip();c.fillStyle='#eaf7ff';c.fill()
  c.translate(lx,ly);c.scale(1.8,1.8);c.translate(-lx,-ly)
  el(c,MX,MY,40,58);c.save();c.clip();glass(c,o,k,dx,dy,pale);c.restore();el(c,MX,MY,40,58);sk(c,3.5);el(c,MX,MY,49,67);sk(c,3.5)
  TR.forEach(([x,y,a],k)=>card(c,x,y,a,k));c.restore()
  el(c,lx,ly,19);c.save();c.clip();c.beginPath();c.arc(lx,ly,14,P*1.1,P*1.45);sk(c,3,'rgba(255,255,255,.9)');c.restore()
  el(c,lx,ly,19);st(c,4.5,'#f2b544',3)
  el(c,hx,hy,7.5,7);fs(c,S,3)
  // shock marks and sweat
  if(k>.3){const z=min(1,k*1.5)
    c.save();c.translate(gx-36,gy-174);c.rotate(-.2);c.scale(z,z);tx(c,'!!',0,0,30,'#ff5a6e',5,'DejaVu Sans');c.restore()
    for(const a of[-2.5,-2.15,-1.8]){c.beginPath();c.moveTo(gx-4+cos(a)*58,gy-122+sin(a)*58);c.lineTo(gx-4+cos(a)*68,gy-122+sin(a)*68);sk(c,3.5)}
    drop(c,gx+38,gy-150+(i%3)*2,1.1)}
  if(fz>.4)drop(c,gx+36,gy-146,.9)
}
