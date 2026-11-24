// an olive-skinned girl with a wavy lilac bob, a slouchy mustard beanie and a green sweater flips her planning poker card: it shows "?", she smiles nervously, flips again to "∞" and breaks into a full sweat
// tags: anxious, anime, work, agile, estimate, card
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
export const frames=24,delay=90,rim=3
const SK='#e0b083',HR='#b89cf0',HD='#8a6ad0',HL='#ece4ff',BN='#f2b538',BNd='#c98a16',SW='#5fbf8f',SWd='#3f9a6e',I=['#8a1f5a','#ff8ec4']
const FL=[[.08,.18],[.46,.56],[.86,.96]]
const card=(c,f,sy)=>{
  c.save();c.scale(1,max(.02,sy))
  if(f==0){rr(c,-38,-52,76,104,9);fs(c,'#3a5bd9');rr(c,-31,-45,62,90,6);fs(c,'#4f74ff',2.6)
    c.save();rr(c,-31,-45,62,90,6);c.clip();c.strokeStyle='rgba(255,255,255,.35)';c.lineWidth=2.4;for(let k=-8;k<9;k++){c.beginPath();c.moveTo(-40+k*12,-50);c.lineTo(40+k*12,50);c.moveTo(40-k*12,-50);c.lineTo(-40-k*12,50);c.stroke()}c.restore()
    el(c,0,0,15,15);fs(c,'#fff',2.6);tx(c,'SP',0,1,13,'#3a5bd9',0,'DejaVu Sans')}
  else{const s=f==1?'?':'∞',col=f==1?'#3a8bff':'#a44df0'
    rr(c,-38,-52,76,104,9);fs(c,'#fffdf6');rr(c,-31,-45,62,90,6);fs(c,'rgba(0,0,0,0)',2,col)
    tx(c,s,0,f==1?2:-2,f==1?64:60,col,6,'DejaVu Sans');tx(c,s,-22,-34,15,col,0,'DejaVu Sans');tx(c,s,22,34,15,col,0,'DejaVu Sans')}
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // which face is showing and how far through a flip
  let f=0,sy=1,lift=0
  FL.forEach(([a,b],k)=>{const s=sg(t,a,b);if(t>=b)f=(k+1)%3;else if(t>a){f=s<.5?k:(k+1)%3;sy=abs(cos(s*P));lift=sin(s*P)*12}})
  const mood=t<.18?0:t<.46?1:t<.6?2:t<.86?3:0,sweat=mood==3
  const sh=sweat?sin(T*14)*1.5:0
  // sweater body
  c.beginPath();c.moveTo(110,124);c.quadraticCurveTo(80,128,78,154);c.lineTo(74,236);c.lineTo(182,236);c.lineTo(178,154);c.quadraticCurveTo(176,128,146,124);c.closePath();fs(c,SW)
  // back hair: short wavy bob
  const hx=128+sh,hy=82+(mood==1?2:0)
  const H=()=>{c.translate(hx,hy);c.rotate(mood==1?-.07:mood==3?.04*sin(T*7):0);c.scale(.82,.82)}
  c.save();H();c.beginPath();c.moveTo(-50,-20);c.bezierCurveTo(-54,-84,54,-84,50,-20);c.quadraticCurveTo(60,20,52,40);qs(c,[52,40,40,52,26,44,10,52,-10,52,-26,44,-40,52,-52,40],.25);c.quadraticCurveTo(-60,20,-50,-20);fs(c,HD);c.restore()
  // head
  c.save();H();hd(c,SK)
  face(c,[{e:I,lx:2,m:'smug',br:-.2},{ex:'happy',m:'cat',br:.7},{e:I,pp:.7,m:'o',br:.6},{e:I,pp:.45,lx:sin(T*9)*2,m:'wave',mo:1.2,br:1.2}][mood])
  if(sweat){c.save();hd(c,'rgba(0,0,0,0)',0);c.clip();const g=c.createLinearGradient(0,-24,0,14);g.addColorStop(0,'rgba(90,100,230,.45)');g.addColorStop(1,'rgba(90,100,230,0)');c.fillStyle=g;c.fillRect(-50,-30,100,44);c.restore()}
  // wavy bangs
  c.beginPath();c.moveTo(-54,26);c.bezierCurveTo(-60,-46,-30,-68,0,-68);c.bezierCurveTo(30,-68,60,-46,54,26)
  qs(c,[54,26,50,2,44,-10,36,-2,30,-18,18,-8,10,-22,0,-10,-12,-22,-20,-8,-32,-18,-40,-4,-48,-8,-54,26],.2);c.closePath();fs(c,HR)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-6);c.quadraticCurveTo(s*60,16,s*52,40);c.quadraticCurveTo(s*46,46,s*44,36);c.quadraticCurveTo(s*48,18,s*38,2);fs(c,HR)}
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.45);ln(c,4.5,HL)
  // slouchy beanie
  c.beginPath();c.moveTo(-54,-34);c.bezierCurveTo(-62,-94,30,-104,62,-74);c.quadraticCurveTo(78,-56,54,-34);c.closePath();fs(c,BN)
  c.save();c.clip();for(let k=-4;k<6;k++){c.beginPath();c.moveTo(k*13+6,-100);c.quadraticCurveTo(k*13+6,-64,k*11,-38);ln(c,2,BNd)}c.restore()
  c.beginPath();c.moveTo(-56,-42);c.quadraticCurveTo(0,-60,56,-42);c.lineTo(54,-30);c.quadraticCurveTo(0,-48,-54,-30);c.closePath();fs(c,BN)
  for(let k=-4;k<=4;k++){c.beginPath();c.moveTo(k*11,-50+abs(k)*.9);c.lineTo(k*11,-39+abs(k)*.9);ln(c,2,BNd)}
  c.restore()
  // the card, flipping over top-to-bottom between her hands
  c.save();c.translate(128,172-lift);card(c,f,sy);c.restore()
  if(sy<.5){c.beginPath();c.moveTo(92,172-lift-14);c.quadraticCurveTo(84,172-lift,92,172-lift+14);c.moveTo(164,172-lift-14);c.quadraticCurveTo(172,172-lift,164,172-lift+14);ln(c,3)}
  // arms and hands pinching the card sides
  for(const s of[-1,1]){const hx2=128+s*39,hy2=172-lift
    c.beginPath();c.moveTo(128+s*40,136);c.quadraticCurveTo(128+s*56,170,hx2+s*6,hy2+6);st(c,14,SW)
    c.beginPath();c.moveTo(hx2+s*8,hy2-4);c.lineTo(hx2+s*8,hy2+12);ln(c,5,'#f5efd8')
    el(c,hx2,hy2+2,7,8);fs(c,SK,3)}
  // sweat
  if(mood==1)drop(c,hx+44,hy-34,1,.3)
  if(sweat)for(let k=0;k<4;k++){const p=(t*5+k/4)%1,s=k%2?1:-1,x=hx+s*(44+p*22),y=hy-30+k*8-p*12+p*p*34
    c.globalAlpha=min(1,(1-p)*3);drop(c,x,y,.8+p*.4,s*.6);c.globalAlpha=1}
}
