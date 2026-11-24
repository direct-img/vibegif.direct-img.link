// a dark-skinned girl with two curly black puffs, a yellow raincoat and red boots stands smugly under a .gitignore umbrella as junk files (.DS_Store, .env, node_modules) rain down and bounce right off it
// tags: calm, anime, coding, git, rain, bounce
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,hypot,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a)),lr=(a,b,k)=>a+(b-a)*k
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-11,y+3);c.lineTo(x+11,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  if(op>.5){c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()}
}
const face=(c,o)=>{
  const{m='smile',mo=1,bc=O,bl=1,fr,bs='rgba(255,100,125,.3)'}=o
  for(const f of[-1,1]){
    const q={...o,...(f<0?o.L:o.R)},br=q.br||0
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,bs,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*br+(q.by||0));c.quadraticCurveTo(f*20,-15-br+(q.by||0),f*28,-12+3*br+(q.by||0));c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(o.mx||0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='D'){c.moveTo(-8,-3);c.quadraticCurveTo(0,-5,8,-3);c.quadraticCurveTo(7,12,0,12);c.quadraticCurveTo(-7,12,-8,-3);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,11,6,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='tiny'){c.moveTo(-2.5,0);c.lineTo(2.5,0);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono',al='center')=>{c.font=`bold ${z}px ${fn}`;c.textAlign=al;c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const limb=(c,p,w,f)=>{c.beginPath();c.moveTo(p[0],p[1]);if(p.length==4)c.lineTo(p[2],p[3]);else c.quadraticCurveTo(p[2],p[3],p[4],p[5]);st(c,w,f)}
export const frames=24,delay=85,rim=4
const H='#2a1a1e',Hl='#5a3e48',S='#8a5536',Sd='#6e4028',EY=['#6a2c08','#f0a040'],J='#ffd23f',Jd='#e0a91e',
  CX=150,CY=74,RX=98,RY=52,
  JUNK=[['.DS_Store','#c9ced9','#2b2f3a',0],['.env','#9be36a','#1d3a10',.5],['node_modules','#4a4f63','#fff',.75],['*.log','#ffb0c8','#5a1830',.25]]
const top=x=>CY-RY*Math.sqrt(max(0,1-((x-CX)/RX)**2))
const puff=(c,x,y,r,n,f)=>{c.beginPath();for(let k=0;k<n;k++){const a=k/n*2*P,b=(k+1)/n*2*P,m=(a+b)/2;c.quadraticCurveTo(x+cos(m)*r*1.22,y+sin(m)*r*1.22,x+cos(b)*r,y+sin(b)*r)}c.closePath();fs(c,f)}
export default(c,t,i)=>{
  // each junk file: falls, hits the canopy, ricochets off and out of frame
  const hits=[],items=JUNK.map(([s,bg,fg,o],k)=>{
    const p=(t+o)%1,xi=[86,206,170,112][k],yi=top(xi)-10,dir=xi<CX?-1:1
    let x,y,r
    if(p<.42){const q=p/.42;x=xi-dir*8*(1-q);y=-80+(yi+80)*q*q;r=dir*.3*(1-q)}
    else{const q=p-.42;x=xi+dir*q*(k==2?220:300);y=yi-q*260+q*q*900;r=dir*q*6}
    if(p>.4&&p<.52)hits.push([xi,yi,(p-.4)/.12])
    return[s,bg,fg,x,y,r,k]})
  const dip=hits.reduce((a,h)=>a+sin(h[2]*P)*(1-h[2]),0)
  c.translate(2,36);c.scale(.86,.86)
  // back hair puffs and hood
  c.save();c.translate(100,124);c.scale(.8,.8)
  for(const g of[-1,1])puff(c,g*40,-58,24,9,H)
  puff(c,0,-6,52,13,H)
  c.restore()
  // umbrella shaft
  c.beginPath();c.moveTo(CX,CY-RY+dip*4);c.lineTo(CX,190);st(c,5,'#6b4a3a',3)
  c.beginPath();c.moveTo(CX,188);c.lineTo(CX,204);c.arc(CX-9,204,9,0,P);st(c,7,'#b0342e',3)
  // boots, legs, raincoat
  for(const x of[86,112]){rr(c,x-7,210,14,22,3);fs(c,S,3);c.beginPath();c.moveTo(x-11,222);c.lineTo(x+10,222);c.lineTo(x+12,238);c.quadraticCurveTo(x+16,244,x+8,244);c.lineTo(x-11,244);c.closePath();fs(c,'#e53e3e',3.2)}
  c.beginPath();c.moveTo(80,154);c.bezierCurveTo(64,160,58,178,54,214);c.lineTo(146,214);c.bezierCurveTo(142,178,136,160,120,154);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(100,160);c.lineTo(100,212);ln(c,2.5,Jd);for(const y of[172,188,202]){el(c,107,y,2.8);fs(c,'#fff',2)}
  c.beginPath();c.moveTo(74,156);c.quadraticCurveTo(100,174,126,156);c.lineTo(122,150);c.quadraticCurveTo(100,162,78,150);c.closePath();fs(c,Jd,3)
  // head
  c.save();c.translate(100,124+dip*1.5);c.scale(.8,.8);c.rotate(-.04)
  hd(c,S)
  const hit=dip>.15
  face(c,{e:EY,lx:hit?8:5,ly:hit?-6:-4,op:hit?.75:.9,m:hit?'smug':'cat',mo:1.1,br:hit?-.3:0,bc:H,bs:'rgba(255,90,110,.35)'})
  // curly fringe
  c.beginPath();c.moveTo(-50,8);c.bezierCurveTo(-56,-50,-28,-70,0,-70);c.bezierCurveTo(28,-70,56,-50,50,8)
  for(let k=0;k<=8;k++){const x=50-k*12.5,y=k%8?-14-(k%2)*8:8;c.quadraticCurveTo(x+6,y+12,x,y)}
  c.closePath();fs(c,H)
  for(const[x,y]of[[-30,-46],[-8,-56],[18,-50],[34,-34]]){c.beginPath();c.arc(x,y,6,P*1.1,P*1.9);ln(c,2.4,Hl)}
  for(const g of[-1,1]){el(c,g*46,22,3.5);fs(c,'#ffd23f',2.4)}
  c.restore()
  // hands on the shaft
  limb(c,[78,166,92,196,140,188],12,J);el(c,146,186,8,8.5);fs(c,S,3)
  limb(c,[122,164,136,176,144,170],12,J);el(c,148,168,8,8.5);fs(c,S,3)
  // canopy with alternating panels and a scalloped hem
  c.save();c.translate(CX,CY);c.scale(1,1-dip*.06)
  const N=6,can=()=>{c.beginPath();c.moveTo(-RX,0);c.ellipse(0,0,RX,RY,0,P,2*P);for(let k=N;k>0;k--){const a=-RX+k*2*RX/N,b=a-2*RX/N;c.quadraticCurveTo((a+b)/2,10,b,0)}c.closePath()}
  can();fs(c,'#7c4dff',0)
  c.save();can();c.clip();for(let k=0;k<N;k+=2){c.beginPath();c.moveTo(0,-RY-2);c.lineTo(-RX+k*2*RX/N,0);c.lineTo(-RX+(k+1)*2*RX/N,0);c.closePath();fs(c,'#a888ff',0)}
  c.beginPath();c.ellipse(-20,-30,40,10,-.25,0,2*P);c.fillStyle='rgba(255,255,255,.18)';c.fill();c.restore()
  for(let k=1;k<N;k++){c.beginPath();c.moveTo(0,-RY);c.quadraticCurveTo((-RX+k*2*RX/N)*.7,-RY*.6,-RX+k*2*RX/N,3);ln(c,2,'#5a2fd0')}
  can();ln(c,3.5);el(c,0,-RY-4,4,5);fs(c,'#6b4a3a',3)
  tx(c,'.gitignore',0,-20,18,'#fff',5)
  c.restore()
  // impact stars
  for(const[x,y,q]of hits){c.save();c.translate(x,y+4);c.scale(.6+q,.6+q);c.globalAlpha=1-q
    for(let k=0;k<5;k++){const a=-P/2+(k-2)*.45;c.beginPath();c.moveTo(cos(a)*10,sin(a)*10);c.lineTo(cos(a)*18,sin(a)*18);ln(c,3.5)}
    c.restore()}
  // the junk
  for(const[s,bg,fg,x,y,r,k]of items){if(y>-90){c.save();c.translate(x,y);c.rotate(r)
    c.font='bold 13px DejaVu Sans Mono';const w=c.measureText(s).width+14
    rr(c,-w/2,-11,w,22,5);fs(c,bg,3);c.beginPath();c.moveTo(w/2-8,-11);c.lineTo(w/2,-3);ln(c,2.5)
    tx(c,s,0,.5,13,fg,0);c.restore()}}
}
