// a mint-haired girl in pink polka-dot pyjamas sleeps hugging her laptop until the pager on the nightstand buzzes red, and she rockets bolt upright wide-eyed, clutching the laptop, before sinking back to sleep
// tags: tired, anxious, anime, coding, sleep, night
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
export const frames=28,delay=80,rim=4
const S='#d9a072',H='#7ee0c0',Hd='#3fae92',Hl='#c4fff0',PJ='#ff9ec0',PJd='#e06a96',BK='#7aa0ff',BKd='#4a70d8'
export default(c,t,i)=>{
  const T=t*2*P,buzz=t>.34&&t<.8,up=t<.45?0:t<.53?1+sin(sg(t,.45,.53)*P)*.12-.12*(1-sg(t,.45,.53))*0:1-sg(t,.8,.97)
  const u=t<.45?0:t<.53?E((t-.45)/.08)*1.1-.1*sg(t,.49,.53):up
  const awake=t>.46&&t<.84,shake=awake&&t<.8?sin(i*2.7)*1.6:0
  const th=lp(-2.42,-1.57,u),hx=130,hy=198,nx=hx+cos(th)*54+shake,ny=hy+sin(th)*54,R=86,cx=hx+cos(th)*R+shake,cy=hy+sin(th)*R,ha=th+P/2
  // nightstand + pager
  rr(c,200,164,44,72,5);fs(c,'#c48a5c');rr(c,206,182,32,20,3);fs(c,'#b07448',2.4);el(c,222,192,3);fs(c,'#ffd34d',2)
  const jx=buzz?sin(i*3.3)*3:0,jy=buzz?-abs(sin(i*2.1))*4:0
  c.save();c.translate(222+jx,150+jy);c.rotate(buzz?sin(i*1.7)*.12:0)
  rr(c,-18,-13,36,26,6);fs(c,'#2b2f45');rr(c,-13,-8,26,13,3);fs(c,buzz&&i%2?'#ff3a4a':'#5a2a32',2.4)
  if(buzz)tx(c,'P1',0,-1.5,10,'#fff',0);c.restore()
  if(buzz){c.lineWidth=3;c.strokeStyle='#ff3a4a';for(const f of[-1,1])for(let k=0;k<2;k++){c.beginPath();c.arc(222,150,24+k*8,f>0?-.6:P-.6,f>0?.6:P+.6);c.stroke()}
    if(t<.6){const z=sg(t,.34,.38);c.save();c.translate(222,112);c.rotate(.12);c.scale(z,z);tx(c,'BZZT',0,0,15,'#ff3a4a',4.5,'DejaVu Sans');c.restore()}}
  // bed: headboard, mattress, pillow
  rr(c,10,116,26,122,8);fs(c,'#9a6a4a');rr(c,16,206,186,30,5);fs(c,'#9a6a4a')
  rr(c,20,184,180,30,8);fs(c,'#fff')
  el(c,52,168,36,15,-.35);fs(c,'#eaf2ff')
  // torso in pyjamas
  c.beginPath();c.moveTo(hx,hy);c.lineTo(nx,ny);st(c,38,PJ)
  for(const[a,b]of[[.35,-8],[.6,8],[.8,-4]]){el(c,lp(hx,nx,a)+sin(th)*b,lp(hy,ny,a)-cos(th)*b,3);fs(c,'#fff',0)}
  // head
  c.save();c.translate(cx,cy);c.rotate(ha);c.scale(.64,.64)
  c.beginPath();c.moveTo(-48,-10);c.bezierCurveTo(-58,30,-52,46,-36,50);c.lineTo(36,50);c.bezierCurveTo(52,46,58,30,48,-10);fs(c,Hd)
  hd(c,S)
  if(awake)face(c,{e:['#8a1a1a','#ff7a5a'],op:1.05,pp:.55,ly:1,br:1.2,m:t<.6?'yell':'wave',mo:t<.6?1.5:1.3,bs:'rgba(255,90,110,.3)'})
  else face(c,{e:['#8a1a1a','#ff7a5a'],ex:'calm',m:'o',mo:.8,bs:'rgba(255,90,110,.3)'})
  // messy bob, spikes when startled
  const sp=awake?1:0
  bangs(c,H,Hl,[50,26,48,-4,40,4,34,-18-sp*8,22,0,14,-22-sp*6,2,-2,-8,-24-sp*6,-18,0,-30,-18-sp*8,-38,6,-46,-6,-50,26])
  for(const[a,l]of[[-1.9,22],[-1.5,28],[-1.1,22],[-.6,16],[-2.5,16]]){const r=58,x=cos(a)*r*.8,y=-30+sin(a)*r*.7,L=l*(.45+sp*1.1)
    c.beginPath();c.moveTo(x-7,y+6);c.lineTo(x+cos(a)*L,y+sin(a)*L);c.lineTo(x+7,y+6);c.closePath();fs(c,H,3)}
  // sleep mask pushed up
  rr(c,-34,-56,68,18,8);fs(c,'#ff9ec0',3);for(const f of[-1,1]){c.beginPath();c.moveTo(f*16-7,-48);c.quadraticCurveTo(f*16,-43,f*16+7,-48);sk(c,2.4)}
  c.restore()
  // laptop hugged to the chest
  const lx=lp(hx,nx,.55)-sin(th)*-14,ly=lp(hy,ny,.55)+cos(th)*-14
  c.save();c.translate(lx,ly);c.rotate(th+P/2+(awake?-.05:0))
  rr(c,-26,-20,52,36,5);fs(c,'#d4dae6');rr(c,-26,12,52,6,3);fs(c,'#a8b0c4',2.4)
  el(c,-10,-4,6);fs(c,'#ff6f9c',2);rr(c,4,-10,12,8,2);fs(c,'#ffd34d',2)
  for(const f of[-1,1]){el(c,f*26,0,7.5,7);fs(c,S,3)}
  c.restore()
  // blanket over the legs
  const bl=lp(86,96,u),br=sin(T*2)*(awake?0:2)
  c.beginPath();c.moveTo(bl,190);c.quadraticCurveTo(bl-6,172-br,bl+20,170-br);c.bezierCurveTo(140,164-br,150,176,170,166-br);c.quadraticCurveTo(200,160,200,182);c.lineTo(200,214);c.lineTo(bl+4,214);c.closePath();fs(c,BK)
  c.save();c.clip();c.lineWidth=2.4;c.strokeStyle=BKd;for(let x=bl;x<210;x+=22){c.beginPath();c.moveTo(x,160);c.lineTo(x-14,216);c.stroke()}c.restore()
  // zzz while asleep, alarm burst on wake
  if(!awake&&u<.3)for(let k=0;k<3;k++){const p=(t*3+k/3)%1;c.globalAlpha=sin(p*P);tx(c,'z',100+p*26+k*3,108-p*44,11+p*10,'#cfd9ff',3.5,'DejaVu Sans');c.globalAlpha=1}
  if(t>.46&&t<.62){for(let k=0;k<7;k++){const a=-P/2+(k-3)*.35;pl(c,130+cos(a)*70,112+sin(a)*58,130+cos(a)*84,112+sin(a)*70);sk(c,3.4)}tx(c,'!!',176,40,26,'#ff4d5e',5.5,'DejaVu Sans')}
  if(awake)for(let k=0;k<2;k++){const p=(t*4+k/2)%1,f=k?1:-1;drop(c,cx+f*(34+p*10),cy-20+p*p*24,1.2*sin(p*P)+.2,f*.5)}
}
