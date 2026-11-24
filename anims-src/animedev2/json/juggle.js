// a girl with a teal side ponytail and a striped circus top with a ruffled collar, happily and carefully juggling big { } [ ] : , tokens in a high arc over her head
// tags: anime, coding, happy, circus, playful, data
// ---
const P=Math.PI,O='#2b1d2e',{sin:S,cos:C,min,max,abs}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>sm((t-a)/(b-a))
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,ly=0,pp=1,tl=0,ex}=o,lx=(o.lx||0)-f*(o.cx||0),a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+C(a+f)*a*.6,y+2+ly+S(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,bs=.3}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${bs})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='gasp'){el(c,0,3,6,8);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,3,6,8);c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='flat'){c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6/s);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const heart=(c,x,y,s,f='#ff5c8a')=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-16,-2,-11,-16,0,-7);c.bezierCurveTo(11,-16,16,-2,0,9);fs(c,f,3/s);el(c,-5,-5,2.5,2);fs(c,'#fff',0);c.restore()}
export const frames=20,delay=90,rim=4
const H='#3fc8c8',Hd='#1f8f96',Hl='#b4f4f0',SK='#f2c8a0',SKd='#d69c70',R='#ff5c6c',Y='#ffd34d'
const TK=['{','}','[',']',':',','],KC=['#ff7a59','#ffb03a','#5fd77a','#4fb4ff','#b07cff','#ff6fb0']
export default(c,t,i)=>{
  const T=t*2*P,hx=128,hy=118,L=[62,170],Rh=[194,170]
  // shower pattern: high arc from the right hand to the left, quick low pass back
  const pos=u=>{if(u<.8){const s=u/.8;return[Rh[0]+(L[0]-Rh[0])*s,Rh[1]-4*150*s*(1-s)]}const s=(u-.8)/.2;return[L[0]+(Rh[0]-L[0])*s,L[1]+12*S(s*P)]}
  const ph=(t*6)%1,thr=sg(ph,0,.15)*(1-sg(ph,.15,.5)),cat=sg(ph,.6,.75)*(1-sg(ph,.75,1))
  // side ponytail behind
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  c.save();c.translate(40,-50);c.rotate(S(T*6)*.06);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(50,-6,62,46,44,98);c.quadraticCurveTo(36,72,24,86);c.quadraticCurveTo(34,40,2,18);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(12,10);c.bezierCurveTo(36,14,46,44,40,72);c.lineWidth=2.5;c.strokeStyle=Hd;c.stroke();c.restore()
  c.restore()
  // striped circus top and ruff collar
  const tor=()=>{c.beginPath();c.moveTo(hx-26,156);c.bezierCurveTo(hx-48,162,hx-56,184,hx-58,212);c.lineTo(hx-58,242);c.lineTo(hx+58,242);c.lineTo(hx+58,212);c.bezierCurveTo(hx+56,184,hx+48,162,hx+26,156);c.closePath()}
  tor();fs(c,'#fff');c.save();tor();c.clip();c.fillStyle=R;for(let x=hx-60;x<hx+60;x+=20)c.fillRect(x,150,10,100);c.restore();tor();c.lineWidth=3.5;c.strokeStyle=O;c.stroke()
  for(const y of[196,220]){el(c,hx,y,4.5);fs(c,Y,2.5)}
  c.beginPath();for(let k=0;k<=8;k++){const a=P*(.05+k*.9/8),x=hx-C(a)*38,y=156+S(a)*10;c.arc(x,y,7,0,2*P)}fs(c,Y,3)
  // head
  c.save();c.translate(hx,hy+S(T*6)*1.2);c.scale(.8,.8)
  hd(c,SK)
  const E=['#8a5a00','#ffd36a'],lx=S(T*6)*3
  face(c,i%8<2?{ex:'happy',m:'grin',mo:1.1,bc:Hd,bs:.4}:{e:E,lx,ly:-6,pp:.95,m:i%8<5?'cat':'smile',mo:1,bc:Hd,br:.2,bs:.4})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-44,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-44,50,22)
  qs(c,[50,22,46,-6,38,0,32,-18,20,-4,12,-22,0,-6,-10,-20,-20,-2,-30,-14,-40,2,-46,-8,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.save();c.translate(40,-50);c.rotate(.3);c.beginPath();for(let k=0;k<10;k++){const r=k%2?5:12;c.lineTo(C(k*P/5-P/2)*r,S(k*P/5-P/2)*r)}c.closePath();fs(c,Y,3);c.restore()
  c.restore()
  // arms: hands bob as they throw and catch
  const lh=[L[0]+cat*4,L[1]+cat*8],rh=[Rh[0]-thr*4,Rh[1]+6-thr*10]
  for(const[[sx,sy],[x,y]]of[[[hx-38,170],lh],[[hx+38,170],rh]]){c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo((sx+x)/2,y+26,x,y+8);st(c,13,'#fff');el(c,x,y+8,9,8);fs(c,SK,3.2)}
  // the tokens, evenly spaced along the loop, spinning
  TK.forEach((s,k)=>{const u=(t+k/6)%1,[x,y]=pos(u),r=S(u*P*2)*.45*(k%2?1:-1)
    c.save();c.translate(x,y);c.rotate(r);rr(c,-15,-15,30,30,9);fs(c,KC[k],3.5);rr(c,-11,-12,14,6,3);fs(c,'rgba(255,255,255,.45)',0);tx(c,s,0,1,24,'#fff',4.5);c.restore()})
  // little motion sparkles at the apex
  for(let k=0;k<2;k++){const p=(t*3+k/2)%1,x=hx+(k?36:-36)+S(p*P*2)*4,y=34+p*12,z=S(p*P)
    c.save();c.translate(x,y);c.scale(z,z);c.beginPath();for(let j=0;j<8;j++){const r=j%2?2:6;c.lineTo(C(j*P/4)*r,S(j*P/4)*r)}c.closePath();fs(c,'#fff6a8',2);c.restore()}
}
