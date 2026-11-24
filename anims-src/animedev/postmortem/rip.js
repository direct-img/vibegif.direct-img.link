// a pale girl with a long black side braid and a black collared dress lays flowers at the tombstone of server-01, and its little haloed ghost floats up, takes the bouquet and waves goodbye
// tags: sad, anime, coding, server, ghost, hopeful
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
export const frames=32,delay=80,rim=4
const S='#fbe5dc',H='#1e1a26',Hl='#4a4258',DR='#3a3452',DRl='#5a5478'
const bouquet=(c,x,y,r=0)=>{c.save();c.translate(x,y);c.rotate(r)
  for(const a of[-.35,0,.35]){pl(c,0,10,sin(a)*16,-6);sk(c,2.6,'#3a8a4a')}
  pg(c,-7,6,7,6,4,18,-4,18);fs(c,'#fff1c8',2.4)
  for(const[a,col]of[[-.35,'#ff8fb1'],[0,'#ffd34d'],[.35,'#c99bff']]){const fx=sin(a)*16,fy=-8+abs(a)*4;for(let k=0;k<5;k++){el(c,fx+cos(k*1.26)*4,fy+sin(k*1.26)*4,3.4);fs(c,col,1.8)}el(c,fx,fy,2.4);fs(c,'#fff',0)}
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P
  // timeline
  const rise=sg(t,.4,.6),up=sg(t,.74,.97),gy=lp(lp(250,76,rise),36,up),gx=184+sin(T*2)*4,ga=1-sg(t,.84,.97)
  const pray=t>.3&&t<.44,seen=t>.44&&t<.56,wave=t>.54&&t<.9
  // tombstone
  el(c,188,228,64,10);fs(c,'#7fc98a')
  c.beginPath();c.moveTo(150,228);c.lineTo(150,132);c.arc(188,132,38,P,0);c.lineTo(226,228);c.closePath();fs(c,'#aab2c4')
  c.beginPath();c.moveTo(158,222);c.lineTo(158,134);c.arc(188,134,30,P,0);c.lineTo(218,222);sk(c,2.4,'#8a92a8')
  tx(c,'RIP',188,138,26,'#5d667e',0,'DejaVu Sans');tx(c,'server-01',188,166,12,'#5d667e',0)
  pl(c,170,190,178,198,174,206);sk(c,2.2,'#8a92a8')
  for(const[x,y]of[[140,226],[236,224],[160,232]]){pl(c,x-4,y,x-6,y-8);pl(c,x,y,x,y-10);pl(c,x+4,y,x+6,y-8);sk(c,2.4,'#3a8a4a')}
  // laid bouquet (before the ghost takes it)
  if(t>.27&&t<.44)bouquet(c,170,212,.2)
  // ghost server
  if(t>.4&&gy<232){c.save();c.beginPath();c.rect(0,0,256,226-0*up+up*300);c.clip();c.globalAlpha=ga;c.translate(gx,gy);c.scale(1.2,1.2)
    c.beginPath();c.moveTo(-18,14);for(let k=0;k<=6;k++)c.quadraticCurveTo(-18+k*6-3,30+(k%2?6:-2)+sin(T*4+k)*3,-18+k*6,26+(k%2?0:4));c.lineTo(18,14);c.closePath();fs(c,'#eef2ff',3)
    rr(c,-22,-26,44,44,7);fs(c,'#5d667e')
    for(const yy of[-18,-8,2]){rr(c,-16,yy,32,7,2);fs(c,'#3a4258',1.8);el(c,10,yy+3.5,1.8);fs(c,i%3?'#7cff9a':'#3fae6a',0)}
    for(const f of[-1,1]){el(c,f*8,8,2.4,3);fs(c,'#fff',0)}c.beginPath();c.arc(0,10,3.5,.2,P-.2);sk(c,2,'#fff')
    el(c,0,-34,15,4.5);sk(c,5);el(c,0,-34,15,4.5);sk(c,3,'#ffe44d')
    // nub arms: one waves, one holds the bouquet
    const wv=sin(T*8)*.5;c.save();c.translate(22,-6);c.rotate(-.9+(wave?wv:0));rr(c,-4,-16,8,18,4);fs(c,'#eef2ff',2.8);c.restore()
    if(t>.42)bouquet(c,-28,0,-.3);rr(c,-30,-4,10,8,4);fs(c,'#eef2ff',2.6)
    c.restore();c.globalAlpha=1
    if(wave&&ga>.5)for(let k=0;k<2;k++){const p=(t*4+k/2)%1;c.globalAlpha=sin(p*P)*ga;tx(c,'♥',gx+36+k*10,gy-30-p*20,12,'#ff8fb1',3,'DejaVu Sans');c.globalAlpha=1}}
  // flower basket
  rr(c,16,206,44,26,6);fs(c,'#d8a86a');c.save();rr(c,16,206,44,26,6);c.clip();c.lineWidth=2;c.strokeStyle='#b8844a';for(let x=8;x<70;x+=8){pl(c,x,206,x+10,232);c.stroke()}c.restore();rr(c,16,206,44,26,6);sk(c,3)
  c.beginPath();c.arc(38,208,18,P,0);sk(c,3.4);bouquet(c,30,200,-.2);bouquet(c,46,202,.25)
  // kneeling girl: skirt spread on the ground, torso, braid
  const hb=wave?sin(T*2)*1:0
  c.beginPath();c.moveTo(70,176);c.quadraticCurveTo(52,200,54,232);c.lineTo(126,232);c.quadraticCurveTo(126,200,108,176);c.closePath();fs(c,DR)
  pl(c,62,226,118,226);sk(c,2.4,DRl)
  c.beginPath();c.moveTo(76,146);c.quadraticCurveTo(66,150,68,182);c.lineTo(110,182);c.quadraticCurveTo(112,150,102,146);c.closePath();fs(c,DR)
  c.beginPath();c.moveTo(78,147);c.lineTo(89,158);c.lineTo(100,147);c.lineTo(96,144);c.lineTo(82,144);c.closePath();fs(c,'#fff',2.6)
  // arm path: basket -> grave -> clasped -> waving -> basket
  let hx,hy
  if(t<.08){hx=lp(46,48,t/.08);hy=200}
  else if(t<.24){const p=E((t-.08)/.16);hx=lp(48,168,p);hy=lp(200,206,p)-sin(p*P)*30}
  else if(t<.3){hx=168;hy=206}
  else if(t<.34){const p=E((t-.3)/.04);hx=lp(168,94,p);hy=lp(206,160,p)}
  else if(t<.5){hx=94;hy=160}
  else if(t<.58){const p=E((t-.5)/.08);hx=lp(94,124,p);hy=lp(160,112,p)}
  else if(t<.86){hx=124+sin(T*8)*6;hy=112}
  else{const p=E((t-.86)/.14);hx=lp(124,46,p);hy=lp(112,200,p)-sin(p*P)*20}
  if(t>.08&&t<.27)bouquet(c,hx+2,hy-10,.5)
  // other hand: on lap, joins the clasp while praying
  const ox=pray||t>.33&&t<.5?84:80,oy=pray||t>.33&&t<.5?160:184
  cv(c,74,154,68,170,ox,oy);st(c,9,DR);el(c,ox,oy,7,6.5);fs(c,S,3)
  cv(c,102,154,(102+hx)/2+6,(154+hy)/2+12,hx,hy);st(c,9,DR);el(c,hx,hy,7.5,7);fs(c,S,3)
  // head
  c.save();c.translate(90,104+hb);c.rotate(.1+(pray?.12:0));c.scale(.66,.66)
  hd(c,S)
  const ex=pray?'calm':wave?'happy':0
  face(c,{e:['#2a3a5a','#8aa8d8'],ex,op:seen?1:.85,pp:seen?.8:1,lx:seen?6:4,ly:seen?-3:1,br:seen?.6:1,m:pray?'frown':seen?'o':wave?'smile':'flat',mo:1.2,bs:'rgba(255,110,140,.3)'})
  if(pray||wave){const p=(t*3)%1;drop(c,pray?28:30,26+p*24,.8,0)}
  bangs(c,H,Hl,[50,26,46,-6,40,8,32,-14,22,6,14,-18,4,2,-6,-20,-16,4,-26,-16,-36,8,-44,-6,-50,26])
  // side braid over the shoulder
  for(let k=0;k<5;k++){el(c,40+k*2,30+k*16,10-k*.6,9);fs(c,H,3)}rr(c,40,104,14,8,3);fs(c,'#c99bff',2.6)
  c.beginPath();c.moveTo(44,112);c.lineTo(38,126);c.lineTo(56,126);c.lineTo(50,112);c.closePath();fs(c,H,3)
  // ribbon
  c.save();c.translate(-30,-52);for(const f of[-1,1]){c.beginPath();c.moveTo(0,0);c.lineTo(f*16,-9);c.lineTo(f*16,9);c.closePath();fs(c,'#c99bff',2.8)}el(c,0,0,5);fs(c,'#a77ae0',2.6);c.restore()
  c.restore()
}
