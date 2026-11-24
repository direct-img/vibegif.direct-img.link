// a girl with big curly afro puffs, pink sunglasses and a hawaiian shirt lounges in a striped hammock between two palms, tapping her foot to the vibes while a little robot below types all her code
// tags: calm, anime, coding, ai, robot, music
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
export const frames=14,delay=120,rim=4
const H='#3b2416',Hl='#7a5236',Sk='#7a4a2c',J='#ff9a3c',Jd='#e0701c',TR='#b07a48',TRd='#8a5a30',D='#4f7fd0'
export default(c,t,i)=>{
  const T=t*2*P,sw=S(T)*.03,dx=S(T)*3
  // palm trunks with frond crowns
  for(const f of[-1,1]){const x0=128+f*106,x1=128+f*96
    c.beginPath();c.moveTo(x0-7,236);c.quadraticCurveTo(x0+f*6,140,x1-5,44);c.lineTo(x1+5,44);c.quadraticCurveTo(x0+f*6+10,140,x0+9,236);c.closePath();fs(c,TR)
    for(let k=0;k<7;k++){const y=222-k*26,o=f*(236-y)*.05;c.beginPath();c.moveTo(x0-5+o,y);c.quadraticCurveTo(x0+1+o,y+5,x0+7+o,y);ln(c,2.5,TRd)}
    for(const[a,l]of[[-2.2,22],[-1.5,30],[-.7,36],[0,34],[.6,28],[2.7,16]]){const g=f>0?-P-a:a,lx=x1+C(g)*l,ly=40+S(g)*l*.75
      c.beginPath();c.moveTo(x1,38);c.quadraticCurveTo((x1+lx)/2-S(g)*8,(38+ly)/2-10,lx,ly);c.quadraticCurveTo((x1+lx)/2+S(g)*4,(38+ly)/2+4,x1,44);fs(c,'#5fc46a',3)
      c.beginPath();c.moveTo(x1,41);c.quadraticCurveTo((x1+lx)/2-S(g)*3,(40+ly)/2-3,lx*.85+x1*.15,ly*.85+40*.15);ln(c,1.8,'#3f9a4c')}
    el(c,x1,42,7);fs(c,TRd,3)}
  // ropes from the trunks to the swaying hammock ends
  const R=(x,y)=>{x-=128;y-=60;return[128+dx+x*C(sw)-y*S(sw),60+x*S(sw)+y*C(sw)]}
  for(const f of[-1,1]){const[x,y]=R(128+f*86,110);c.beginPath();c.moveTo(128+f*100,70);c.lineTo(x,y);c.moveTo(128+f*100,70);c.lineTo(x-f*2,y+9);ln(c,2.5,'#e8c98e')}
  // robot under the hammock typing her code
  const ty=k=>-3*max(0,S(T*9+k*P))
  c.save();c.translate(128,198)
  rr(c,-22,6,44,32,10);fs(c,'#cfd8e8')
  c.beginPath();c.moveTo(0,-30);c.lineTo(0,-40);ln(c,3);el(c,0,-43,4.5);fs(c,i%4<2?'#ff5c8a':'#ffd23a',2.5)
  rr(c,-24,-30,48,36,12);fs(c,'#e9eef7');rr(c,-17,-23,34,22,7);fs(c,'#23304a',2.5)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*8-4,-11);c.lineTo(f*8,-15);c.lineTo(f*8+4,-11);ln(c,2.6,'#7fffb0')}
  drop(c,31,-22+(i%6),.7)
  pg(c,-28,42,28,42,32,12,-32,12);fs(c,'#9aa3b8');heart(c,0,27,.45,'#ffb3cc',2)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*24,8);c.lineTo(f*22,18+ty(f));st(c,6,'#cfd8e8',2.6);el(c,f*22,14+ty(f),5.5);fs(c,'#cfd8e8',2.6)}
  c.restore()
  ;['{ }','</>',';','=>'].forEach((s,k)=>{const p=(t*2+k/4)%1,x=128+(k%2?30:-30)+S(p*6+k)*4,y=180-p*36;if(p<.8){c.save();c.translate(x,y);const z=S(min(1,p*4)*P/2)*(1-sg(p,.6,.8));c.scale(z,z);tx(c,s,0,0,13,['#7fd8ff','#a1f08f','#ffd166','#ff9ad6'][k],4.5);c.restore()}})
  // everything hanging from the ropes sways together
  c.save();c.translate(128+dx,60);c.rotate(sw);c.translate(-128,-60)
  const back=()=>{c.beginPath();c.moveTo(42,110);c.quadraticCurveTo(128,222,214,110);c.quadraticCurveTo(128,120,42,110)}
  back();fs(c,'#ffe6a8')
  // lying body: shirt, shorts, crossed legs with a tapping foot
  c.beginPath();c.moveTo(100,112);c.quadraticCurveTo(124,104,150,118);c.lineTo(146,150);c.quadraticCurveTo(120,150,100,146);c.closePath();fs(c,J)
  for(const[u,v]of[[108,124],[128,134],[118,116],[138,124]]){el(c,u,v,3.5);fs(c,'#fff6e8',0)}
  const tap=S(T*4)*.28
  c.beginPath();c.moveTo(156,134);c.lineTo(176,116);c.lineTo(198,136);st(c,12,Sk,3.2)
  c.beginPath();c.moveTo(152,128);c.lineTo(170,106);c.lineTo(196,120);st(c,12,Sk,3.2)
  c.beginPath();c.moveTo(140,120);c.quadraticCurveTo(160,110,166,116);c.lineTo(164,142);c.quadraticCurveTo(150,150,140,146);c.closePath();fs(c,D)
  el(c,200,140,8,5,.3);fs(c,Sk,3);rr(c,190,140,20,5,2);fs(c,'#5fd4c4',2.5)
  c.save();c.translate(196,120);c.rotate(tap-.1);el(c,7,0,9,5,.15);fs(c,Sk,3);rr(c,-2,2,22,5,2);fs(c,'#ff5c8a',2.5);c.restore()
  // afro puffs, elbows behind the head
  c.save();c.translate(88,98);c.rotate(-.4);c.scale(.74,.74)
  const puff=(x,y,r)=>{c.beginPath();for(let a=0;a<=44;a++){const q=a/44*2*P,r2=r+(a%2?3:-1);c.lineTo(x+C(q)*r2,y+S(q)*r2)}c.closePath();fs(c,H)}
  for(const f of[-1,1]){puff(f*46,-56,26);c.beginPath();c.arc(f*46-6,-62,14,P*1.1,P*1.5);ln(c,4,Hl)}
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*30,40);c.lineTo(f*58,-14);c.lineTo(f*34,-30);st(c,16,J,3.5)}
  hd(c,Sk)
  face(c,{ex:'calm',m:'smile',mo:.95,bl:1,blc:'rgba(255,90,110,.45)',bc:H,br:.2})
  c.beginPath();c.moveTo(-48,10);c.bezierCurveTo(-56,-50,-30,-68,0,-68);c.bezierCurveTo(30,-68,56,-50,48,10);for(let k=0;k<=9;k++){const x=48-k*10.6,y=-12+(k%2?-6:2)+(k==0||k==9?14:0);c.quadraticCurveTo(x+5,y+9,x,y)}c.closePath();fs(c,H)
  for(let k=0;k<5;k++){c.beginPath();c.arc(-30+k*15,-40-(k%2)*8,5,P*.9,P*1.9);ln(c,2.5,Hl)}
  // pink sunglasses with a glint sweeping across
  for(const f of[-1,1]){rr(c,f*20-14,0,28,21,8);const g=c.createLinearGradient(0,0,0,21);g.addColorStop(0,'#2b2140');g.addColorStop(1,'#7a3d8f');fs(c,g,3.4,'#ff5ca8')
    const gp=(t*2%1)*110-40;c.save();rr(c,f*20-14,0,28,21,8);c.clip();c.beginPath();c.moveTo(gp+f*10-20,24);c.lineTo(gp+f*10-8,-4);ln(c,5,'rgba(255,255,255,.8)');c.restore()}
  c.beginPath();c.moveTo(-6,8);c.quadraticCurveTo(0,4,6,8);ln(c,3,'#ff5ca8');for(const f of[-1,1]){c.beginPath();c.moveTo(f*34,6);c.lineTo(f*46,2);ln(c,3,'#ff5ca8')}
  c.restore()
  // striped front of the sling over her body
  const front=()=>{c.beginPath();c.moveTo(42,110);c.quadraticCurveTo(128,222,214,110);c.quadraticCurveTo(128,186,42,110)}
  c.save();front();c.clip();['#ff7aa8','#ffd166','#5fd4c4','#ff7aa8','#ffd166','#5fd4c4','#ff7aa8','#ffd166'].forEach((f,k)=>{c.fillStyle=f;c.fillRect(42+k*22,100,22,140)});c.restore()
  front();ln(c,3.5)
  for(let k=1;k<12;k++){const u=k/12,x=(1-u)**2*42+2*u*(1-u)*128+u*u*214,y=(1-u)**2*110+2*u*(1-u)*222+u*u*110;c.beginPath();c.moveTo(x,y);c.lineTo(x,y+7);ln(c,3,'#fff6e8')}
  c.restore()
  // music notes drifting up
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=150+k*18+S(p*P*2+k)*6,y=96-p*60;c.save();c.translate(x,y);c.rotate(S(p*P*2)*.3);const z=S(min(1,p*5)*P/2)*(1-sg(p,.75,1));c.scale(z,z);tx(c,k%2?'♫':'♪',0,0,22,k%2?'#ff9ad6':'#7fd8ff',5,'DejaVu Sans');c.restore()}
}
