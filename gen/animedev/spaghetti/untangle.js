// a chef girl twirling a fork in a plate of rainbow spaghetti code, pulling one noodle out until it's straight, then it slips back into the tangle
const P=Math.PI,O='#2b1d2e'
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.3)',0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
export const frames=24,delay=80,rim=4
const H='#2a3f8f',Hd='#1b2a66',Hl='#6f8de0',S='#b47a52',N=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff']
export default(c,t,i)=>{
  const e=x=>x<0?0:x>1?1:x*x*(3-2*x)
  // lift: 0 fork in the pile .. 1 held high with a straight noodle
  const L=i<6?0:i<14?e((i-5)/8):i<18?1:e((22-i)/4),slip=i>=18&&i<22,proud=i>=14&&i<18,tw=i<6?i:0
  const fx=166+L*14,fy=190-L*88
  // girl: torso with a napkin bib
  c.save();c.beginPath();c.moveTo(108,136);c.bezierCurveTo(84,142,76,160,74,186);c.lineTo(182,186);c.bezierCurveTo(180,160,172,142,148,136);c.closePath();fs(c,'#e2584a')
  c.beginPath();c.moveTo(112,140);c.lineTo(144,140);c.lineTo(152,184);c.lineTo(104,184);c.closePath();fs(c,'#fff',3);c.clip()
  c.fillStyle='rgba(226,88,74,.35)';for(let x=100;x<160;x+=12)c.fillRect(x,138,6,50);for(let y=142;y<188;y+=12)c.fillRect(100,y,60,6);c.restore()
  pg(c,112,140,128,134,144,140,136,148,120,148);fs(c,'#fff',3)
  // head
  c.save();c.translate(122,96);c.scale(.82,.82);c.rotate(slip?-.08:proud?.06:-.04)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*40,20);c.quadraticCurveTo(f*66,30,f*62,62);c.quadraticCurveTo(f*52,44,f*36,36);fs(c,H)}
  hd(c,S)
  face(c,proud?{ex:'happy',m:'grin',br:.2,bc:Hd}:slip?{e:['#0b6d66','#62e3d2'],pp:.6,ly:2,lx:2,m:'o',mo:1.3,br:1.2,bc:Hd}:{e:['#0b6d66','#62e3d2'],lx:5,ly:L>.3?-1:4,m:L>.3?'grit':'cat',mo:.9,br:L>.3?-.6:-.2,bc:Hd})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-56,-40,-30,-62,0,-62);c.bezierCurveTo(30,-62,56,-40,50,24)
  qs(c,[50,24,44,-6,34,2,26,-14,14,0,6,-18,-6,-2,-14,-16,-26,0,-34,-12,-44,4,-50,24],.2);c.closePath();fs(c,H)
  // chef hat
  c.beginPath();c.moveTo(-38,-46);c.bezierCurveTo(-60,-56,-50,-90,-22,-84);c.bezierCurveTo(-14,-102,14,-102,22,-84);c.bezierCurveTo(50,-90,60,-56,38,-46);c.closePath();fs(c,'#fff')
  rr(c,-42,-52,84,18,6);fs(c,'#fff');c.beginPath();c.moveTo(-14,-58);c.quadraticCurveTo(-12,-70,-17,-80);c.moveTo(14,-58);c.quadraticCurveTo(12,-70,17,-80);c.lineWidth=2.4;c.strokeStyle='#c9d2e6';c.stroke()
  c.restore()
  // plate and pile of tangled code noodles
  el(c,128,212,108,30);fs(c,'#eef3ff');el(c,128,208,84,20);fs(c,'#d5def2',2.5)
  // tangled noodles: curly random walks heaped into a mound
  c.beginPath();c.moveTo(48,206);c.bezierCurveTo(56,156,200,156,208,206);c.quadraticCurveTo(128,218,48,206);fs(c,'#e9b85a',3)
  let q=5;const r=()=>(q=q*16807%2147483647)/2147483647,inn=(x,y)=>((x-128)/84)**2+((y-206)/48)**2<1&&y<210
  for(let k=0;k<34;k++){
    let x=60+r()*136,y=166+r()*36,a=r()*7;const p=[[x,y]]
    for(let j=0;j<9;j++){a+=(r()-.5)*2.6;let nx=x+Math.cos(a)*15,ny=y+Math.sin(a)*9;if(!inn(nx,ny)){a+=P;nx=x+Math.cos(a)*15;ny=y+Math.sin(a)*9}x=nx;y=ny;p.push([x,y])}
    c.beginPath();c.moveTo(...p[0]);for(let j=1;j<p.length-1;j++)c.quadraticCurveTo(...p[j],(p[j][0]+p[j+1][0])/2,(p[j][1]+p[j+1][1])/2)
    st(c,3.4,k<20?k%2?'#ffd978':'#ffe9a8':N[k%5],1.7)
  }
  for(const[x,y]of[[90,188],[134,162],[186,192]]){el(c,x,y,9);fs(c,'#9a5530',2.8);el(c,x-3,y-3,2.5);fs(c,'#d98a5b',0)}
  const fa=.3+(tw%2?.1:-.06)
  const hx=fx+Math.sin(fa)*32,hy=fy-Math.cos(fa)*32
  c.beginPath();c.moveTo(166,148);c.lineTo(198+L*22,178-L*42);c.lineTo(hx+6,hy+3);st(c,14,'#e2584a')
  // fork and hand
c.save();c.translate(fx,fy);c.rotate(fa)
  rr(c,-3,-46,6,40,3);fs(c,'#cfd6e6',2.6);rr(c,-8,-8,16,8,3);fs(c,'#cfd6e6',2.6)
  for(const x of[-6,-2,2,6]){c.beginPath();c.moveTo(x,0);c.lineTo(x,14);c.lineWidth=5.5;c.strokeStyle=O;c.stroke();c.lineWidth=2.5;c.strokeStyle='#cfd6e6';c.stroke()}
  c.restore()
  // the pulled noodle: wavy and knotted while tangled, straightening as it rises
  const px=158,py=176,A=12*(1-L)+(slip?5:0),n=40;c.beginPath()
  for(let k=0;k<=n;k++){const u=k/n,x=px+(fx-px)*u+Math.sin(u*P*5+i*.6)*A*Math.sin(u*P),y=py+(fy+18-py)*u;k?c.lineTo(x,y):c.moveTo(x,y)}
  if(L<.6){const kx=px+(fx-px)*.5+6,ky=py+(fy+18-py)*.5;c.moveTo(kx+8*(1-L),ky);c.arc(kx,ky,8*(1-L)+.1,0,2*P)}
  st(c,5.5,N[2],2.4)
  // twirl loops around the fork tines
  for(let k=0;k<2;k++){el(c,fx,fy+12-k*5,9+Math.sin(tw*1.5+k)*2,3.5);c.lineWidth=8;c.strokeStyle=O;c.stroke();c.lineWidth=4.5;c.strokeStyle=N[2];c.stroke()}
  el(c,hx,hy,8.5,9);fs(c,S,3)
  if(proud){spark(c,fx-22,fy+6,10,'#ffe14d');spark(c,fx+26,fy+40,7,'#fff')}
  if(slip||L>.3&&!proud)drop(c,84,70,1)
}
