// a tan girl with a swinging blue-black high ponytail, a red headband and an orange hoodie codes cross-legged on top of a tall tower of pizza boxes, reaches into the open box on the stack beside her, pulls a cheesy slice and munches it while still typing
// tags: happy, anime, coding, food, laptop, late-night
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w=3.5,pf=0)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47-pf,24+pf,-22-pf,46,0,46);c.bezierCurveTo(22+pf,46,47+pf,24+pf,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+4);c.lineTo(x+10,y+4);c.stroke();c.beginPath();c.moveTo(x-8,y+10);c.quadraticCurveTo(x,y+13,x+8,y+10);c.lineWidth=2;c.strokeStyle='rgba(43,29,46,.4)';return c.stroke()}
  if(ex=='dot'){el(c,x,y+3,3.2,4);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='open'){c.moveTo(-7,-3);c.quadraticCurveTo(0,-6,7,-3);c.quadraticCurveTo(8,10,0,11);c.quadraticCurveTo(-8,10,-7,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,10,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='pout'){c.moveTo(-5,3);c.quadraticCurveTo(-2,-2,0,1);c.quadraticCurveTo(2,-2,5,3);c.stroke()}
  else if(m=='chew'){c.moveTo(-6,0);c.quadraticCurveTo(-3,3,0,0);c.quadraticCurveTo(3,3,6,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spk=(c,x,y,r,f='#ffe066',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.36:r;c.lineTo(x+cos(a-P/2)*q,y+sin(a-P/2)*q)}c.closePath();fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=24,delay=85,rim=3
const SK='#d9a072',HR='#22263f',HL='#5a6294',HB='#e8394a',HO='#ff7a3d',I=['#6a1a12','#ff8a5c'],Z=.84,SX=94,SY=128
const W=(x,y)=>[SX+x*Z,SY+y*Z]
const box=(c,x,y,w,a=0,lab=0)=>{c.save();c.translate(x,y);c.rotate(a);rr(c,-w/2,-12,w,12,2);fs(c,'#f3e2c6',3);if(lab)tx(c,'PIZZA',0,-5.5,9,'#e8453c',0,'DejaVu Sans');else{c.fillStyle='#e8453c';c.fillRect(-w/2+1.5,-7.5,w-3,2.6)}c.restore()}
const L0=40,sw=y=>13*(1-y/L0)
const slice=(c,l)=>{
  // held by the crust at the origin, tip along +y; a bitten slice ends in a jagged edge at length l
  c.beginPath();c.moveTo(-13,0);c.lineTo(13,0)
  if(l>=L0)c.lineTo(0,L0);else{const w=sw(l);c.lineTo(w,l);for(let k=1;k<4;k++)c.lineTo(w-k*w*2/4+w/4,l+(k%2?-3:2))
    c.lineTo(-w,l)}
  c.closePath();fs(c,'#ffd35c')
  c.save();c.clip();for(const[x,y]of[[-5,9],[5,17],[-1,26]])if(y<l-2){el(c,x,y,3.4);fs(c,'#e0453a',1.8)}c.restore()
  rr(c,-15,-6,30,8,4);fs(c,'#e0a04a',3)}
export default(c,t,i)=>{
  const T=t*2*P,K=(a,b)=>sg(t,a,b)
  const reach=K(.32,.42),pull=K(.42,.52),eat=K(.52,.6),back=K(.86,.96),bob=abs(sin(T*6))*1.2
  // side tower topped with an open box: pizza inside, lid propped up
  for(let k=0;k<8;k++)box(c,186+[0,-3,2,-2,3,-1,2,0][k],236-k*12,76,[0,.02,-.015,.02,0,-.02,.015,0][k],k%3==1)
  c.save();c.translate(186,140)
  pg(c,-38,-12,38,-12,42,-44,-34,-44);fs(c,'#f6ead4',3)
  for(const[x,y]of[[-12,-30],[14,-24],[6,-38]]){el(c,x,y,4,2.6);fs(c,'rgba(200,140,60,.35)',0)}
  pg(c,-38,0,38,0,32,-14,-32,-14);fs(c,'#e8d2ae',3)
  el(c,0,-7,30,7.5);fs(c,'#e0a04a',2.8);el(c,0,-7.5,25,5.5);fs(c,'#ffd35c',0)
  for(const[x,y]of[[-14,-8],[-2,-10],[12,-7],[4,-5],[-8,-5]]){el(c,x,y,2.8,1.6);fs(c,'#e0453a',1.4)}
  c.beginPath();c.moveTo(0,-7.5);c.lineTo(-25,-7.5);c.moveTo(0,-7.5);c.lineTo(18,-11.5);c.moveTo(0,-7.5);c.lineTo(10,-2.5);ln(c,1.4,'rgba(43,29,46,.5)')
  rr(c,-38,0,76,12,2);fs(c,'#f3e2c6',3);c.fillStyle='#e8453c';c.fillRect(-36.5,4.5,73,2.6)
  c.restore()
  // main tower
  for(let k=0;k<9;k++)box(c,SX+[0,3,-2,4,-3,2,-1,3,0][k],236-k*12,92,[0,-.02,.015,-.01,.02,-.015,.01,-.02,0][k],k%3==2)
  // the girl, seated on top
  c.save();c.translate(SX,SY);c.scale(Z,Z)
  // ponytail swinging behind
  const pw=sin(T*2)*.12
  c.save();c.translate(16,-86-bob);c.rotate(pw);c.beginPath();c.moveTo(-4,-18);c.bezierCurveTo(40,-30,52,10,44,56);c.quadraticCurveTo(40,74,30,82);c.quadraticCurveTo(34,50,22,26);c.quadraticCurveTo(14,6,-6,0);c.closePath();fs(c,HR);c.beginPath();c.moveTo(6,-12);c.quadraticCurveTo(34,-14,40,20);ln(c,3,HL);c.restore()
  // crossed legs and socks
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*30,-14);c.quadraticCurveTo(s*46,-4,s*28,-3);c.lineTo(-s*10,-5);st(c,13,'#3a4566');el(c,-s*15,-6,8,5.5);fs(c,'#fff',2.8)}
  // hoodie body and lanyard badge
  c.beginPath();c.moveTo(-14,-56);c.quadraticCurveTo(-32,-54,-32,-38);c.lineTo(-30,-10);c.lineTo(30,-10);c.lineTo(32,-38);c.quadraticCurveTo(32,-54,14,-56);c.closePath();fs(c,HO)
  // head
  const ch=eat>.5&&back<.5,mun=i%2
  c.save();c.translate(0,-84-bob);c.rotate(reach*(1-back)*.08+(ch?-.05:0));c.scale(.74,.74)
  hd(c,SK,3.5,ch?3:0)
  face(c,ch?{ex:'happy',m:mun?'chew':'cat',mo:1.1,br:-.1,blc:'rgba(255,90,100,.45)'}:reach>.5?{e:I,lx:7,ly:4,pp:1.2,m:'o',br:.3}:{e:I,ly:6,m:'cat',br:-.3})
  c.beginPath();c.moveTo(-52,20);c.bezierCurveTo(-58,-46,-30,-70,0,-70);c.bezierCurveTo(30,-70,58,-46,52,20)
  qs(c,[52,20,48,-6,40,-2,34,-20,22,-6,14,-24,2,-8,-8,-24,-18,-6,-28,-20,-38,-2,-46,-10,-52,20],.18);c.closePath();fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-6);c.quadraticCurveTo(s*56,22,s*48,46);c.quadraticCurveTo(s*42,24,s*38,2);fs(c,HR)}
  c.beginPath();c.moveTo(-50,-30);c.quadraticCurveTo(0,-62,50,-30);ln(c,13);ln(c,7.5,HB)
  c.save();c.translate(50,-30);for(const s of[-1,1]){c.save();c.rotate(s*.5+.4+pw);el(c,10,0,10,4.5);fs(c,HB,2.6);c.restore()}c.restore()
  c.beginPath();c.arc(0,-20,40,P*1.28,P*1.44);ln(c,4.5,HL)
  c.restore()
  // laptop lid from behind with stickers
  c.save();c.translate(0,-24);c.rotate(-.04)
  rr(c,-32,-24,64,38,5);fs(c,'#c9ced9');rr(c,-32,12,64,5,2);fs(c,'#8a90a0',2.4)
  c.save();c.translate(-15,-9);c.beginPath();for(let k=0;k<6;k++)c.lineTo(cos(k*P/3)*8,sin(k*P/3)*8);c.closePath();fs(c,'#ffd84d',2.2);c.restore()
  spk(c,15,-11,8,'#7ee0ff',2.2);c.beginPath();c.moveTo(4,4);c.bezierCurveTo(4,-3,14,-3,12,3);c.bezierCurveTo(10,8,4,8,4,10);c.bezierCurveTo(4,8,-2,8,-4,3);c.bezierCurveTo(-6,-3,4,-3,4,4);fs(c,'#ff7eb6',2.2)
  c.restore()
  // left hand typing at the lid edge
  const tp=k=>-3*max(0,sin(T*6+k))
  c.beginPath();c.moveTo(-26,-50);c.quadraticCurveTo(-44,-30,-32,-16+tp(0));st(c,12,HO);el(c,-31,-15+tp(0),7,6.5);fs(c,SK,3)
  c.restore()
  // right arm: typing -> into the box -> slice to the mouth -> back to typing
  const sh=W(26,-50),key=W(31,-15+tp(2)),bx0=[166,128],mo=W(10,-84+26*.74)
  const Lp=(p,q,k)=>[p[0]+(q[0]-p[0])*k,p[1]+(q[1]-p[1])*k],up=[bx0[0]-6,bx0[1]-26],nm=[mo[0]+20,mo[1]+2]
  let H=key
  if(reach>0)H=Lp(key,bx0,reach)
  if(pull>0)H=Lp(bx0,up,pull)
  if(eat>0)H=Lp(up,nm,eat)
  if(back>0)H=Lp(nm,key,back)
  const[hx,hy]=H,held=reach>.99&&back<.5,bites=t<.62?0:t<.7?1:t<.78?2:3,len=[L0,28,18,7][bites]
  // stretchy cheese while pulling
  if(pull>0&&eat<.5){c.beginPath();for(const d of[-3,3]){c.moveTo(hx+d,hy+L0-4);c.quadraticCurveTo(hx+d*2,(hy+bx0[1])/2+14,bx0[0]+d*2,bx0[1]-4)}ln(c,5.5);ln(c,2.8,'#ffe27a')}
  if(held){c.save();c.translate(hx,hy);c.rotate(P/2*.95*E(eat));slice(c,len);c.restore()}
  // the crust gets flicked away
  if(back>.3){const q=(back-.3)/.7;c.save();c.globalAlpha=1-q;c.translate(nm[0]+10+q*40,nm[1]-q*36+q*q*30);c.rotate(q*9);rr(c,-14,-4,28,8,4);fs(c,'#e0a04a',3);c.restore();c.globalAlpha=1}
  c.beginPath();c.moveTo(sh[0],sh[1]);c.quadraticCurveTo(sh[0]+16,(sh[1]+hy)/2+12,hx,hy);st(c,12*Z,HO);el(c,hx,hy,6,5.5);fs(c,SK,3)
  // code bits rising beside her while she types
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,s=['{}',';','</>'][k];c.globalAlpha=min(1,(1-p)*3,p*6);tx(c,s,30+k*8+sin(p*6+k)*4,108-p*50-k*6,12,['#7ee0ff','#ffd84d','#a1f08f'][k],4);c.globalAlpha=1}
}
