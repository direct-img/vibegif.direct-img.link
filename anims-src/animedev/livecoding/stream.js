// a streamer girl with long sky-blue-to-pink hair, a cat-ear headset and a black hoodie waves and winks at chat while live coding, LIVE badge blinking and hearts floating up
// tags: happy, anime, coding, love, wave, chat
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
export const frames=16,delay=100,rim=4
const Sk='#ffe0cc',J='#2b2840',Jd='#1c1a2c',K=['#ff5c8a','#ffb03d','#ffe066','#7cf29a','#5fd4ff','#b58bff']
export default(c,t,i)=>{
  const T=t*2*P,wv=S(T*3),wink=t>.42&&t<.66,hx=104,hy=116
  const hg=o=>{const g=c.createLinearGradient(0,-70-o,0,110-o);g.addColorStop(0,'#8fd3ff');g.addColorStop(.45,'#b9b6ff');g.addColorStop(1,'#ff9ad6');return g}
  // code editor window behind her
  rr(c,132,16,112,104,10);fs(c,'#23284a');rr(c,132,16,112,18,[10,10,0,0]);fs(c,'#383f6e',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,144+k*11,25,3.5);fs(c,f,0)})
  const sc=Math.floor(t*16)%4/4
  c.save();rr(c,134,36,108,82,6);c.clip()
  for(let k=0;k<7;k++){const j=(k+Math.floor(t*4))%6,y=44+k*13-sc*13,ind=[0,10,20,10,0,10][j],w=[50,40,30,46,36,28][j];rr(c,180+ind,y,w,6,3);fs(c,K[j],0);rr(c,172+ind-24,y,18,6,3);fs(c,K[(j+3)%6],0)}
  c.restore()
  // long gradient hair behind
  c.save();c.translate(hx,hy);c.scale(.92,.92)
  c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-66,30,-60,80,-66,110);c.quadraticCurveTo(-50,104,-40,112);c.lineTo(40,112);c.quadraticCurveTo(50,104,66,110);c.bezierCurveTo(60,80,66,30,50,-20);c.closePath();fs(c,hg(0))
  c.restore()
  // hoodie
  c.beginPath();c.moveTo(hx-28,148);c.bezierCurveTo(hx-60,154,hx-66,190,hx-68,240);c.lineTo(hx+68,240);c.bezierCurveTo(hx+66,190,hx+60,154,hx+28,148);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-32,150);c.quadraticCurveTo(hx,170,hx+32,150);ln(c,4,Jd)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*10,160);c.lineTo(hx+f*11,186);ln(c,3,'#ff8fc8');el(c,hx+f*11,188,2.6);fs(c,'#ff8fc8',1.8)}
  spark(c,hx+34,196,.7,'#ffe066',2.2)
  // head
  c.save();c.translate(hx,hy);c.scale(.92,.92);c.rotate(-.05+wv*.03)
  hd(c,Sk)
  face(c,{e:['#5a1fa0','#d690ff'],lx:1,ly:0,m:wink?'grin':'smile',mo:1.05,br:.5,bc:'#8a6ad0',blc:'rgba(255,100,140,.4)',r:wink?{ex:'happy'}:{}})
  c.beginPath();c.moveTo(-50,28);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,50,28)
  qs(c,[50,28,46,-4,40,6,34,-10,24,0,18,-18,6,-4,-2,-22,-14,-10,-24,-26,-36,-14,-44,-28,-50,28],.18);c.closePath();fs(c,hg(0))
  c.beginPath();c.arc(0,-26,40,P*1.22,P*1.46);ln(c,5,'rgba(255,255,255,.7)')
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-6);c.bezierCurveTo(f*54,20,f*46,50,f*54,76);c.quadraticCurveTo(f*38,56,f*38,-4);fs(c,hg(0),3)}
  // cat-ear headset with a mic
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*18,-66);c.lineTo(f*34,-86);c.lineTo(f*44,-56);c.closePath();fs(c,'#fff',3.2);c.beginPath();c.moveTo(f*25,-66);c.lineTo(f*34,-77);c.lineTo(f*39,-62);c.closePath();fs(c,'#ffb3d9',0)}
  c.beginPath();c.arc(0,-10,56,P*1.08,P*1.92);ln(c,13);ln(c,7,'#fff')
  for(const f of[-1,1]){rr(c,f*56-11,-14,22,34,10);fs(c,'#fff',3.5);rr(c,f*56-6,-8,12,22,6);fs(c,i%4<2&&f>0?'#ff8fc8':'#ffb3d9',0)}
  c.beginPath();c.moveTo(-56,14);c.quadraticCurveTo(-52,44,-20,40);ln(c,8);ln(c,3.5,'#fff');el(c,-17,40,5.5,5);fs(c,'#ff8fc8',3)
  c.restore()
  // RGB keyboard in front
  rr(c,58,212,150,26,8);fs(c,'#2b2840')
  for(let r=0;r<2;r++)for(let k=0;k<9;k++){rr(c,66+k*15.4+r*4,216+r*10,12,8,2);fs(c,K[(k+r+Math.floor(t*8))%6],1.4)}
  // arms: one waving hello, one on the keys
  c.beginPath();c.moveTo(hx+38,164);c.quadraticCurveTo(hx+62,200,hx+48,218);st(c,15,J);el(c,hx+48,218,9,7.5);fs(c,Sk,3)
  const wx=38+wv*7,wy=108
  c.beginPath();c.moveTo(hx-38,164);c.quadraticCurveTo(hx-76,170,wx+wv*2,wy+22);st(c,15,J)
  c.save();c.translate(wx,wy);c.rotate(wv*.35)
  for(const[a,l]of[[-.6,19],[-.2,22],[.2,21],[.55,17]]){c.beginPath();c.moveTo(0,4);c.lineTo(S(a)*l,4-C(a)*l);st(c,6.5,Sk,3)}
  c.beginPath();c.moveTo(-6,10);c.lineTo(-18,2);st(c,6.5,Sk,3)
  el(c,0,8,10,11);fs(c,Sk,3.2);c.restore()
  for(const f of[-1,1]){c.beginPath();c.arc(wx,wy,28,-P/2+f*.6-.25,-P/2+f*.6+.25);ln(c,3)}
  // LIVE badge + viewer count
  rr(c,12,12,64,24,7);fs(c,'#ff3b5c',3.2);el(c,25,24,4.5);fs(c,i%4<2?'#fff':'#ffc0cc',0);tx(c,'LIVE',51,24,14,'#fff',0,'DejaVu Sans')
  rr(c,80,12,46,24,7);fs(c,'#2b2440',3.2);el(c,92,24,6,4);fs(c,'#fff',0);el(c,92,24,2.4);fs(c,'#2b2440',0);tx(c,'128',111,24,11,'#fff',0)
  // chat hearts floating up the right side
  for(let k=0;k<5;k++){const p=(t+k/5)%1,x=214+S(p*P*3+k*2)*10+(k%2)*12-6,y=226-p*190,z=S(min(1,p*6)*P/2)*(1-sg(p,.8,1))
    heart(c,x,y,.75*z+.001,K[k%3==0?0:k%3==1?5:4],3)}
  // a chat bubble popping in
  const cb=(t+.1)%1,cz=sg(cb,0,.08)*(1-sg(cb,.5,.58))
  if(cz>.01){c.save();c.translate(186,180);c.scale(cz,cz);rr(c,-26,-13,52,26,12);fs(c,'#fff',3);tx(c,'hi!!',0,0,13,'#ff5c8a',0,'DejaVu Sans');c.restore()}
}
