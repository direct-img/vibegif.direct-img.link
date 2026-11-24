// a shepherd girl with blonde twin braids, a straw sun hat and a green pinafore minds a little flock of fluffy box services, the cron box hops off after a butterfly so she hooks it with her crook and plops it back into the herd
// tags: happy, anime, coding, sheep, animal, cute
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
// head shape centred on the origin: radius 45, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// glossy anime eye at x (f=-1 left, 1 right); op lid openness, lx/ly look, pp pupil scale, ex special shapes
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){c.moveTo(x-9,y-2);c.lineTo(x+9,y-2);c.stroke();el(c,x,y+5,2.6,3);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+2+ly);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2.6:7.5,q=k*P/4-P/2;c.lineTo(cos(q)*r,sin(q)*r)}c.closePath();fs(c,'#fff',0);c.restore();el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// eyes, brows (br>0 worried, <0 angry), blush and mouth: smile grin o big cat wave smug grit frown flat tongue
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,by=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br+by);c.quadraticCurveTo(f*20,-15-br+by,f*28,-12+3*br+by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='big'){el(c,0,2,6,7.5);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,8,4.5,3);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='tongue'){c.moveTo(-6,-1);c.quadraticCurveTo(0,3,6,-1);c.stroke();c.beginPath();c.moveTo(1,.5);c.quadraticCurveTo(3,7,6,5);c.quadraticCurveTo(7,2,5.5,-.5);fs(c,'#ff7d96',2/mo)}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';c.lineJoin='round';c.lineWidth=w;c.strokeStyle=O;if(w)c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
// 4-point sparkle, sweat drop
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
export const frames=24,delay=95,rim=4
const S='#ffe3cc',H='#ffd76a',Hd='#e0a838',Hl='#fff3c0',G='#5cb85c',Gd='#3d8a3d',W='#8a5a34'
const PV=[104,162],LEN=122
// herd: [x,y,colour,label]; the last one strays
const B=[[150,184,'#a8d8ff','api'],[196,186,'#ffc2d6','db'],[128,220,'#c9b6ff','ui'],[218,222,'#ffe08a','auth'],[174,222,'#a6f0c8','cron']]
const box=(c,x,y,f,s,lg=0,ey=0,sq=1)=>{c.save();c.translate(x,y);c.scale(1.12/sq,1.12*sq)
  for(const u of[-11,-4,5,12]){c.beginPath();c.moveTo(u,12);c.lineTo(u+(u<0?-1:1)*lg,20);ln(c,4)}
  pg(c,-17,-12,-9,-19,21,-19,17,-12);fs(c,'#fff',2.6);pg(c,17,-12,21,-19,21,8,17,14);fs(c,'#d7dbe6',2.6)
  rr(c,-17,-12,34,26,4);fs(c,f,3)
  for(const[u,v,r]of[[-8,-20,6],[0,-23,7],[9,-21,6],[16,-18,4.5]]){el(c,u,v,r);fs(c,'#fff',2.4)}
  if(ey)for(const u of[-6,6]){c.beginPath();c.moveTo(u-3,-4);c.lineTo(u+3,-4);ln(c,2.2)}else for(const u of[-6,6]){el(c,u,-4,2,2.6);fs(c,O,0)}
  tx(c,s,0,6,10,O,0);c.restore()}
export default(c,t,i)=>{
  // crook angle: upright, reach out, hook, lift, back upright
  const up=-1.42,out=-.06,lift=-.7
  const ca=t<.44?up:t<.56?up+(out-up)*sg(t,.44,.56):t<.6?out:t<.72?out+(lift-out)*sg(t,.6,.72):t<.76?lift:lift+(up-lift)*sg(t,.76,.9)
  const tip=[PV[0]+LEN*cos(ca),PV[1]+LEN*sin(ca)],nv=[-sin(ca),cos(ca)],hb=[tip[0]+22*nv[0],tip[1]+22*nv[1]]
  const hooked=t>=.58&&t<.76
  // the stray: hops toward the butterfly, gets hooked and lifted, dropped back home with a bounce
  const home=[B[4][0],B[4][1]],far=[PV[0]+LEN*cos(lift)-22*sin(lift),PV[1]+LEN*sin(lift)+22*cos(lift)+16]
  const fx=PV[0]+LEN*cos(out)-22*sin(out),fy=PV[1]+LEN*sin(out)+22*cos(out)+16
  let sp=home,sq=1,lg=0
  if(t>=.14&&t<.44){const u=(t-.14)/.3,k=min(2,Math.floor(u*3)),f=u*3-k,a=[home[0]+(fx-home[0])*k/3,home[1]+(fy-home[1])*k/3],b=[home[0]+(fx-home[0])*(k+1)/3,home[1]+(fy-home[1])*(k+1)/3]
    sp=[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f-sin(f*P)*18];sq=f<.12||f>.88?.86:1.06}
  else if(t>=.44&&t<.58)sp=[fx,fy]
  else if(hooked)sp=[hb[0],hb[1]+16],lg=3
  else if(t>=.76&&t<.86){const u=(t-.76)/.1;sp=[far[0]+(home[0]-far[0])*u,far[1]+(home[1]-far[1])*u*u],lg=3}
  else if(t>=.86&&t<.94){const u=(t-.86)/.08;sq=1-.22*sin(u*P);sp=home}
  // butterfly
  const bx=214+sin(t*2*P)*18,by=120+sin(t*4*P)*14-sg(t,.5,.7)*50+sg(t,.85,1)*50,fl=.35+.65*abs(sin(t*12*P))
  // hat brim back, braids
  const hx=74,hy=94
  // herd (back row first)
  B.slice(0,2).forEach(([x,y,f,s],k)=>{const b=abs(sin(t*4*P+k*1.3))*4;box(c,x,y-b,f,s)})
  box(c,B[3][0],B[3][1]-abs(sin(t*4*P+4))*4,B[3][2],B[3][3])
  // girl body: blouse and pinafore
  c.beginPath();c.moveTo(56,142);c.bezierCurveTo(36,148,28,172,26,206);c.quadraticCurveTo(24,236,38,238);c.lineTo(112,238);c.quadraticCurveTo(124,236,122,206);c.bezierCurveTo(120,172,112,148,92,142);c.closePath();fs(c,'#fdfaf2')
  c.beginPath();c.moveTo(50,166);c.lineTo(98,166);c.bezierCurveTo(108,190,116,214,118,238);c.lineTo(30,238);c.bezierCurveTo(32,214,40,190,50,166);c.closePath();fs(c,G)
  for(const x of[56,92]){c.beginPath();c.moveTo(x,166);c.lineTo(x+(x<74?-4:4),144);ln(c,8);c.beginPath();c.moveTo(x,166);c.lineTo(x+(x<74?-4:4),144);ln(c,4.5,G)}
  rr(c,60,196,28,20,4);fs(c,Gd,2.6);el(c,96,150,10,9);fs(c,'#fdfaf2');c.beginPath();c.moveTo(52,152);c.quadraticCurveTo(36,176,40,198);st(c,11,S);el(c,52,150,10,9);fs(c,'#fdfaf2');el(c,41,200,9,8.5);fs(c,S,3.2);c.beginPath();c.moveTo(66,142);c.lineTo(74,152);c.lineTo(82,142);ln(c,2.6,'#ff7a8c')
  // twin braids
  for(const f of[-1,1]){c.save();c.translate(hx+f*40,hy+18);for(let k=0;k<5;k++){el(c,f*2,k*15,9-k*.6,9);fs(c,H,3);c.beginPath();c.moveTo(f*2-5,k*15-3);c.quadraticCurveTo(f*2,k*15+4,f*2+5,k*15-3);ln(c,1.8,Hd)}
    el(c,f*2,76,6,4);fs(c,'#ff7a8c',2.4);c.beginPath();c.moveTo(f*2,79);c.lineTo(f*2-3,90);c.lineTo(f*2+3,90);c.closePath();fs(c,H,2.4);c.restore()}
  // head
  c.save();c.translate(hx,hy)
  hd(c,S)
  const e=['#1f4fa0','#7cc6ff']
  const fc=t>.88?{ex:'happy',m:'smile',bl:1.3}:t>.6?{e,lx:5,ly:-3,m:'cat',br:-.2}:t>.44?{e,lx:5,ly:-2,op:.85,m:'smug',br:-.4}:t>.24?{e,lx:5,ly:-4,pp:.6,m:'o',br:.8}:{e,lx:2,ly:0,m:'smile'}
  face(c,{...fc,bc:Hd,fr:'#e8a88a'})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-56,-36,-30,-62,0,-62);c.bezierCurveTo(30,-62,56,-36,50,24)
  qs(c,[50,24,44,-6,38,4,32,-14,20,-2,12,-18,2,-4,-8,-18,-18,-2,-28,-14,-36,4,-44,-6,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-20,38,P*1.24,P*1.46);ln(c,4.5,Hl)
  // straw sun hat with a ribbon and a daisy
  c.save();c.rotate(-.08);el(c,0,-50,56,13);fs(c,'#f3d48a');el(c,0,-60,32,22);c.save();c.clip();el(c,0,-60,32,22);fs(c,'#f3d48a',0);rr(c,-34,-56,68,9,0);fs(c,'#ff7a8c',0);c.restore();el(c,0,-60,32,22);ln(c,3.5)
  c.beginPath();c.moveTo(-32,-56);c.lineTo(32,-56);c.moveTo(-32,-47);c.lineTo(32,-47);ln(c,2.2)
  c.beginPath();for(const u of[-44,-30,30,44]){c.moveTo(u,-54);c.lineTo(u*1.08,-46)}ln(c,1.6,'#c9a24e')
  for(let k=0;k<6;k++){el(c,24+cos(k*1.05)*5,-52+sin(k*1.05)*5,3.4);fs(c,'#fff',1.6)}el(c,24,-52,2.6);fs(c,'#ffd23f',1.4);c.restore()
  c.restore()
  // front row of the herd and the stray
  box(c,B[2][0],B[2][1]-abs(sin(t*4*P+2))*4,B[2][2],B[2][3])
  const ib=t<.14||t>.94?abs(sin(t*4*P+5))*4:0
  box(c,sp[0],sp[1]-ib,B[4][2],B[4][3],lg,hooked?1:0,sq)
  if(t>.86&&t<1){const p=(t-.86)/.14;c.save();c.globalAlpha=1-p;c.translate(home[0],home[1]-40-p*16);c.beginPath();c.moveTo(0,6);c.bezierCurveTo(-11,-3,-6,-13,0,-6);c.bezierCurveTo(6,-13,11,-3,0,6);fs(c,'#ff7a9c',2.4);c.restore()}
  // the crook, held in both hands
  c.save();c.translate(PV[0],PV[1]);c.rotate(ca);c.beginPath();c.moveTo(-26,0);c.lineTo(LEN,0);c.arc(LEN,11,11,-P/2,P*.75);st(c,6,W,3)
  c.beginPath();c.moveTo(-20,-1.5);c.lineTo(LEN-6,-1.5);ln(c,1.6,'#c98a58');c.restore()
  c.beginPath();c.moveTo(94,152);c.quadraticCurveTo(108,176,PV[0]-2,PV[1]+2);st(c,11,S);el(c,PV[0],PV[1],9.5,9);fs(c,S,3.2)
  c.beginPath();c.moveTo(PV[0]-6,PV[1]-5);c.lineTo(PV[0]+6,PV[1]-5);ln(c,2)
  // butterfly
  c.save();c.translate(bx,by);for(const f of[-1,1]){el(c,f*5*fl,-3,6*fl+1,5,f*.4);fs(c,'#ff9ec4',2);el(c,f*4*fl,4,4*fl+1,3.5,f*-.4);fs(c,'#ffc2dc',2)}c.beginPath();c.moveTo(0,-5);c.lineTo(0,5);ln(c,2.4);c.restore()
  if(t>.24&&t<.5)drop(c,hx+50,hy-6+(i%3)*2,1)
}
