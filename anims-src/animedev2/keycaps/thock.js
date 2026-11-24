// a lavender twin-tailed girl in a mint sweater presses a giant pink mechanical keycap with both sweater paws, THOCK rings ripple out and she melts into pure bliss
// tags: happy, anime, keyboard, love, calm, pulse
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
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
const spark=(c,x,y,s,f='#ffe066',w=2.5)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<8;k++){const r=k%2?3.2:10,a=k*P/4;c.lineTo(S(a)*r,-C(a)*r)}c.closePath();fs(c,f,w/s);c.restore()}
export const frames=18,delay=85,rim=4
const H='#b9a2ff',Hd='#8a6fe0',Hl='#e6dcff',Sk='#ffe8dc',J='#9be3c6',Jd='#62bf9c',K='#ffb3cc',Kd='#f07aa3',Kl='#ffd9e6'
export default(c,t,i)=>{
  const pr=sg(t,.16,.22)-sg(t,.6,.8),ant=sg(t,.03,.14)*(1-sg(t,.15,.19)),bo=t>.2&&t<.4?S((t-.2)/.2*P*2)*1.5*(1-(t-.2)/.2):0
  const d=pr*11+bo,bl=sg(t,.23,.29)*(1-sg(t,.78,.9)),tilt=bl*(.12+S(t*P*4)*.03),sway=S(t*2*P)*.04
  // ripple rings fanning out from the key base
  // twin-tails swinging behind
  c.save();c.translate(128,86);c.scale(.98,.98)
  for(const f of[-1,1]){c.save();c.translate(f*42,-48);c.rotate(f*(sway+bl*.06)+S(t*2*P+f)*.03)
    c.beginPath();c.moveTo(-f*4,-6);c.bezierCurveTo(f*50,-14,f*56,54,f*34,104);c.quadraticCurveTo(f*28,136,f*42,166);c.quadraticCurveTo(f*10,140,f*14,102);c.bezierCurveTo(f*24,52,f*14,22,-f*6,12);c.closePath();fs(c,H)
    c.beginPath();c.moveTo(f*18,14);c.bezierCurveTo(f*34,40,f*34,80,f*26,110);ln(c,2.5,Hd)
    c.restore()}
  c.restore()
  // sweater body
  c.beginPath();c.moveTo(100,130);c.bezierCurveTo(70,136,58,160,56,236);c.lineTo(200,236);c.bezierCurveTo(198,160,186,136,156,130);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(110,128);c.lineTo(128,142);c.lineTo(146,128);c.closePath();fs(c,'#fff',3)
  // head
  c.save();c.translate(128,86+bl*2);c.scale(.98,.98);c.rotate(tilt-ant*.04)
  hd(c,Sk)
  const op=bl>.5?{ex:'calm',m:'cat',mo:1.15,br:-.4,bc:Hd,blc:'rgba(255,90,130,.45)'}:{e:['#b0247a','#ff9ad6'],ly:3+ant*2,lx:0,m:ant>.3?'o':'smile',mo:ant>.3?.9:1,br:.3+ant*.6,bc:Hd}
  face(c,op)
  if(bl>.5)for(const f of[-1,1])for(let k=0;k<3;k++){c.beginPath();c.moveTo(f*(24+k*5),22);c.lineTo(f*(21+k*5),28);ln(c,1.8,'#e0607e')}
  // bangs: soft blunt cut with wisps
  c.beginPath();c.moveTo(-50,28);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,28)
  qs(c,[50,28,46,-4,38,-1,32,-9,24,-1,14,-11,6,-2,-4,-11,-12,-1,-22,-10,-30,-1,-38,-6,-46,-2,-50,28],.16);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.22,P*1.46);ln(c,5,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-4);c.quadraticCurveTo(f*52,30,f*42,62);c.quadraticCurveTo(f*38,30,f*36,-2);fs(c,H,3)}
  // ribbon ties and a tiny keycap hairpin
  for(const f of[-1,1]){c.save();c.translate(f*42,-48);c.rotate(f*.4);for(const g of[-1,1]){c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(g*12,-12,g*16,-2);c.quadraticCurveTo(g*12,8,0,0);fs(c,'#ff7aa8',2.8)}el(c,0,0,4);fs(c,'#ff7aa8',2.8);c.restore()}
  c.save();c.translate(-30,-46);c.rotate(-.3);rr(c,-8,-7,16,14,3);fs(c,'#fff6a8',2.8);rr(c,-5,-6,10,8,2);fs(c,'#fffbe0',0);c.restore()
  c.restore()
  // keyboard plate behind, the keycap, then the front lip it sinks into
  rr(c,54,196,148,30,10);fs(c,'#5b4a86')
  const y=d,cap=()=>{c.beginPath();c.moveTo(78,150+y);c.lineTo(178,150+y);c.quadraticCurveTo(184,151+y,186,158+y);c.lineTo(196,214+y);c.lineTo(60,214+y);c.lineTo(70,158+y);c.quadraticCurveTo(72,151+y,78,150+y)}
  cap();fs(c,Kd)
  c.beginPath();c.moveTo(80,190+y);c.lineTo(176,190+y);c.lineTo(196,214+y);c.lineTo(60,214+y);c.closePath();fs(c,K,0)
  rr(c,80,146+y,96,46,12);fs(c,Kl,3.5)
  el(c,128,170+y,40,15);fs(c,'#ffe9f0',0)
  tx(c,'A',128,172+y,24,'#e45d8f',0,'DejaVu Sans')
  c.beginPath();c.moveTo(90,152+y);c.lineTo(112,152+y);ln(c,3,'#fff')
  rr(c,48,212,160,24,10);fs(c,'#7a66ad')
  for(let k=0;k<6;k++){rr(c,60+k*23,218,16,10,3);fs(c,'#9c8bd0',0)}
  // sound-wave arcs fanning out of the key on both sides
  for(let k=0;k<3;k++){const p=(t-.21-k*.07)/.36;if(p>0&&p<1)for(const f of[-1,1]){c.beginPath();c.arc(128,186,74+p*44,f<0?P-.42:-.42,f<0?P+.42:.42);st(c,(1-p)*5+1.5,k%2?'#c9a8ff':'#ff9cc2',2.5)}}
  // sweater-paw arms on the key
  const hy=d-ant*10
  for(const f of[-1,1]){const sx=128+f*30,hx=128+f*25
    c.beginPath();c.moveTo(sx,138);c.quadraticCurveTo(128+f*42,150,hx,164+hy);st(c,18,J)
    el(c,hx,170+hy,12,9);fs(c,J,3.2);c.beginPath();c.moveTo(hx-8,166+hy);c.lineTo(hx+8,166+hy);ln(c,2,Jd)
    for(let k=-1;k<2;k++){el(c,hx+k*6.5,178+hy,3.6,3.2);fs(c,Sk,2.4)}}
  // THOCK pops out, hearts drift up while she melts
  const pp=(t-.2)/.09,z=pp<0?0:(pp<1?E(pp)*(1+.4*S(pp*P)):1)*(1-sg(t,.66,.76))
  if(z>.01){c.save();c.translate(60,34);c.rotate(-.16);c.scale(z,z);tx(c,'THOCK',0,0,23,'#c58bff',6,'DejaVu Sans');c.restore()
    }
  for(let k=0;k<3;k++){const p=(t-.27-k*.1)/.5;if(p>0&&p<1){const s=S(min(1,p*3)*P/2)*(1-sg(p,.8,1))*.9;heart(c,196+k*16+S(p*6+k)*6,108-p*76-k*8,s,k%2?'#ff8fb8':'#ff5c8a')}}
  if(bl>.5){spark(c,214,40,.9+S(t*P*8)*.25,'#fff3a0');spark(c,234,74,.65,'#fff3a0')}
}
