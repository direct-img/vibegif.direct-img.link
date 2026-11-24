// a girl with a glossy black bob, gold hoops and a mustard turtleneck bumps her coffee mug, it tumbles onto her keyboard in slow motion while she gasps in horror, then it all rewinds
// tags: anxious, anime, coffee, accident, slow, retro
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,lw=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,a,y+16-lw);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+C(a+f)*a*.6,y+2+ly+S(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(lw){c.beginPath();c.moveTo(a+f*2,y+16-lw);c.quadraticCurveTo(x,y+18-lw*1.3,b-f*2,y+16-lw);c.lineWidth=2.4;c.stroke()}
  else{c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    const q=f>0&&o.r?{...o,...o.r}:o,{br=0,bt=0,bc=O}=q
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+3*bt);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br-3*bt);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='D'){c.moveTo(-9,-3);c.quadraticCurveTo(0,-1,9,-3);c.quadraticCurveTo(8,13,0,13);c.quadraticCurveTo(-8,13,-9,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,12,6.5,4.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const heart=(c,x,y,s,f='#ff5c8a',w=3)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-2,-9,-15,0,-6);c.bezierCurveTo(9,-15,16,-2,0,8);fs(c,f,w/s);el(c,-5,-5,2.4,1.6,-.6);fs(c,'rgba(255,255,255,.75)',0);c.restore()}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6/s);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
// story time s runs 0..1 (typing, knock, slow-mo flight, splash) then rewinds fast back to 0 so the loop is seamless
export const frames=28,delay=85,rim=4
const H='#2c2838',Hd='#17141f',Hl='#5d5878',Sk='#8d5a3c',J='#f2b636',Jd='#c98a12',CF='#4a2410',CL='#c98b4f'
export default(c,t,i)=>{
  const rw=t>.84,s=rw?1-E((t-.84)/.16):t/.84
  const kn=sg(s,.06,.11),u=min(1,max(0,(s-.11)/.55)),hit=sg(s,.6,.7),hr=sg(s,.12,.5),sp=max(0,(s-.66)/.34)
  const ty=s<.08?max(0,S(s*90))*4:0
  // girl behind the desk, leaning back as the horror sets in
  const hx=118,hy=92-hr*3
  // bob back hair
  c.save();c.translate(hx,hy);c.scale(.95,.95)
  c.beginPath();c.moveTo(-52,-10);c.bezierCurveTo(-60,30,-56,50,-44,58);c.quadraticCurveTo(-30,64,-24,52);c.lineTo(24,52);c.quadraticCurveTo(30,64,44,58);c.bezierCurveTo(56,50,60,30,52,-10);fs(c,Hd)
  c.restore()
  // turtleneck body
  c.beginPath();c.moveTo(hx-28,136);c.bezierCurveTo(hx-56,142,hx-64,166,hx-66,206);c.lineTo(hx+66,206);c.bezierCurveTo(hx+64,166,hx+56,142,hx+28,136);c.closePath();fs(c,J)
  for(let k=-2;k<3;k++){c.beginPath();c.moveTo(hx+k*11,150);c.lineTo(hx+k*12,200);ln(c,2,Jd)}
  rr(c,hx-17,124-hr*3,34,18,8);fs(c,J,3.2);c.beginPath();c.moveTo(hx-14,133-hr*3);c.lineTo(hx+14,133-hr*3);ln(c,2,Jd)
  // head
  c.save();c.translate(hx,hy);c.scale(.95,.95);c.rotate(-.03*hr)
  for(const f of[-1,1]){el(c,f*44,34,5,6);ln(c,3,'#ffc93a')}
  hd(c,Sk)
  const lx=kn*4+hr*(3-7*u),ly=3+hr*3
  face(c,{e:['#7a3a00','#ffbf3f'],lx,ly,pp:1-hr*.55,op:1+hr*.1,m:hr>.15?'o':'smile',mo:hr>.15?1+hr*1.2:1,br:-.2+hr*1.4,bc:Hd,blc:'rgba(255,80,110,.35)'})
  // blunt straight bangs and bob sides
  c.beginPath();c.moveTo(-52,30);c.bezierCurveTo(-60,-44,-32,-70,0,-70);c.bezierCurveTo(32,-70,60,-44,52,30);c.quadraticCurveTo(46,46,36,48);c.quadraticCurveTo(44,20,40,-6)
  c.lineTo(38,-8);for(let k=0;k<=8;k++)c.lineTo(38-k*9.5,-8+(k%2?2:-1));c.lineTo(-40,-6);c.quadraticCurveTo(-44,20,-36,48);c.quadraticCurveTo(-46,46,-52,30);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,42,P*1.2,P*1.5);ln(c,5,Hl);c.beginPath();c.arc(0,-26,42,P*1.56,P*1.66);ln(c,5,Hl)
  if(hr>.3)drop(c,46,-16,.9+hr*.2)
  c.restore()
  // desk and keyboard
  rr(c,10,194,236,46,10);fs(c,'#c88a5a');c.beginPath();c.moveTo(14,202);c.lineTo(242,202);ln(c,2.5,'#a66a3e')
  rr(c,40,204,150,30,7);fs(c,'#3e4152')
  for(let r=0;r<2;r++)for(let k=0;k<9;k++){rr(c,48+k*15.5+r*4,209+r*12,12,9,2);fs(c,'#e8ebf5',1.6)}
  // coffee: blobs leave the tumbling mug's mouth and arc down onto the keys
  const mug=v=>{const w=1-v,x=w*w*214+2*v*w*200+v*v*160,y=w*w*194+2*v*w*40+v*v*202,r=-2.1*E(v)-.15*S(v*P);return[x,y,r,x+20*S(r),y-20*C(r)]}
  // arms: typing, the bump, then slowly up to the cheeks in horror
  const hand=(sx,sy,x,y,f)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(sx+f*18,(sy+y)/2+10,x,y);st(c,15,J);el(c,x,y,9,8.5);fs(c,Sk,3.2)}
  const L=[98-12*hr,206-ty-88*hr],R=[146+38*kn*(1-hr)-6*hr,206-ty*.6-6*kn*(1-hr)-88*hr]
  hand(hx-30,146,L[0],L[1],-1);hand(hx+30,146,R[0],R[1],1)
  const w=(u-.35)/.5+sp*.7,cp=v=>{v=min(1,max(0,v));return[188-76*v,110+100*v-120*v*(1-v)]}
  const kp=min(1,max(0,(w-1)/.45))
  if(kp>0){c.beginPath();for(let a=0;a<=24;a++){const q=a/24*2*P,r=1+.12*S(q*5+1);c.lineTo(122+C(q)*60*kp*r,216+S(q)*13*kp*r)}c.closePath();fs(c,CF,3);el(c,106,212,22*kp,4*kp);fs(c,CL,0)}
  if(w>0&&w<1.28){const wh=min(1,w),wt=min(1,max(0,w-.28)),q=[]
    for(let k=0;k<=10;k++){const v=wt+(wh-wt)*k/10,[x,y]=cp(v);q.push([x+S(k*1.3+u*30)*1.5,y,4+5*k/10])}
    c.beginPath();for(const[x,y]of q)c.lineTo(x,y);st(c,11,CF,3.2)
    for(const[x,y,r]of q.filter((_,k)=>k%3==1||k==10)){el(c,x,y,r);fs(c,CF,0)}
    c.beginPath();for(const[x,y]of q.slice(2))c.lineTo(x-3,y-2);ln(c,2,CL)
    const[hx2,hy2]=q[10];el(c,hx2,hy2,9.5,8.5);fs(c,CF,3);el(c,hx2-3,hy2-3,3,2);fs(c,CL,0)
    for(let j=0;j<4;j++){const[x,y]=cp(w-.06-j*.07);if(w-.06-j*.07>0&&y<206){el(c,x+(j%2?11:-10),y+(j%2?-4:5),3.2);fs(c,CF,2.4)}}}
  // the mug itself
  const[mx,my,mr]=mug(u)
  c.save();c.translate(mx,my);c.rotate(mr)
  c.beginPath();c.arc(17,0,9,-P/2,P/2);c.lineWidth=11;c.strokeStyle=O;c.stroke();c.lineWidth=4.5;c.strokeStyle='#fff';c.stroke()
  rr(c,-16,-20,32,40,6);fs(c,'#fff');el(c,0,-20,15,4.5);fs(c,u>.3?'#d9d9e4':CF,2.6)
  heart(c,0,2,.55,'#ff7a9a',2)
  c.restore()
  // slow-mo ghost trail behind the mug
  if(u>.02&&u<.98)for(let k=1;k<3;k++){const[gx,gy]=mug(max(0,u-k*.06));c.beginPath();c.moveTo(gx+14,gy-6);c.lineTo(gx+30,gy-6);c.moveTo(gx+18,gy+6);c.lineTo(gx+34,gy+6);ln(c,3,'rgba(43,29,46,.5)')}
  // splash crown and sparks
  const sc=(w-1)/.6;if(sc>0&&sc<1)for(let k=0;k<7;k++){const a=-P/2+(k-3)*.42,d=8+sc*30,x=114+C(a)*d*1.6,y=208+S(a)*d+sc*sc*36;if(y<214){el(c,x,y,4.5-sc*2);fs(c,CF,2.4)}}
  if(sp>0){
    for(const[x,y,o]of[[80,206,0],[166,210,1]])if((i+o)%2){c.beginPath();c.moveTo(x,y);c.lineTo(x+6,y-10);c.lineTo(x,y-12);c.lineTo(x+8,y-24);ln(c,7);c.strokeStyle='#ffe44d';c.lineWidth=3.5;c.stroke()}}
  // playback badge: slow-mo, then rewind
  if(s>.11&&!rw){rr(c,14,12,74,22,6);fs(c,'#2b2440',3);pg(c,22,17,22,29,32,23);fs(c,'#ff5c6c',0);tx(c,'0.25x',60,23,13,'#fff',0)}
  if(rw){rr(c,14,12,94,22,6);fs(c,'#2b2440',3);for(const x of[30,40]){pg(c,x,17,x,29,x-10,23);fs(c,'#7fd8ff',0)}tx(c,'Ctrl+Z',76,23,13,'#fff',0)
    for(const[y,h,d]of[[60+i*37%120,10,6],[150-i*23%90,6,-5]]){const g=c.getImageData(0,y,256,h);c.clearRect(0,y,256,h);c.putImageData(g,d,y)}}
}
