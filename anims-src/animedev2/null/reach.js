// a pale gothic girl with a black hime cut, red eyes and a frilly black dress reaches deep into a box labelled null, rummages around in the empty void and pulls out nothing but a pink question mark, staring at it blankly
// tags: calm, anime, coding, box, empty, confused
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
export const frames=28,delay=85,rim=4
const H='#221c34',Hl='#6a62a0',S='#fff4ee',EY=['#7a0a1a','#ff5a6a'],D='#4a3466',Dl='#6a5090',PU='#9a5ad8',BX='#d9a066',BXd='#b47a42'
export default(c,t,i)=>{
  const rch=sg(t,.08,.22),dig=sg(t,.18,.3)*(1-sg(t,.5,.58)),out=sg(t,.52,.6)*(1-sg(t,.9,1)),rum=dig*sin(t*2*P*7)
  const q=t>.56&&t<.92,hx=78,hy=106
  // long hair behind
  c.save();c.translate(hx,hy);c.scale(.86,.86)
  c.beginPath();c.moveTo(-52,-16);c.lineTo(-58,138);c.lineTo(-30,138);c.lineTo(-28,40);c.lineTo(28,40);c.lineTo(30,138);c.lineTo(58,138);c.lineTo(52,-16);c.closePath();fs(c,H)
  c.restore()
  // box: void opening first
  pg(c,132,152,234,152,244,130,144,130);fs(c,'#140a26',3.5)
  c.save();pg(c,132,152,234,152,244,130,144,130);c.clip()
  for(let k=0;k<5;k++){const a=t*2*P+k*1.3;el(c,188+cos(a)*(20+k*6),141+sin(a)*5,1.8);fs(c,k%2?'#c49bff':'#fff',0)}c.restore()
  // dress body
  c.beginPath();c.moveTo(56,150);c.bezierCurveTo(36,156,30,176,26,204);c.quadraticCurveTo(18,232,30,240);c.lineTo(126,240);c.quadraticCurveTo(138,232,130,204);c.bezierCurveTo(126,176,120,156,100,150);c.closePath();fs(c,D)
  c.beginPath();for(let k=0;k<7;k++){const x=30+k*16;c.moveTo(x,240);c.quadraticCurveTo(x+8,232,x+16,240)};ln(c,2.6,'#fff')
  for(const g of[-1,1]){c.beginPath();c.moveTo(78,150);c.quadraticCurveTo(78+g*20,146,78+g*26,154);c.quadraticCurveTo(78+g*20,168,78,164);c.closePath();fs(c,'#fff',3)}
  for(const g of[-1,1]){c.beginPath();c.moveTo(78,160);c.quadraticCurveTo(78+g*12,150,78+g*14,164);c.quadraticCurveTo(78+g*8,170,78,160);fs(c,PU,2.6)}
  el(c,78,161,4);fs(c,PU,2.4)
  // box flaps behind the arm
  pg(c,132,152,144,130,118,116,110,138);fs(c,BX,3)
  pg(c,234,152,244,130,250,108,240,130);fs(c,BXd,3)
  c.beginPath();c.moveTo(144,130);c.lineTo(244,130);c.lineTo(228,104);c.lineTo(160,104);c.closePath();fs(c,'#e6b47a',3)
  pg(c,132,152,234,152,244,130,144,130);ln(c,3.5)
  // reaching arm: up, over and down into the box
  const ex=lr(124,156,rch)+rum*4,ey=lr(186,100,rch)-out*24,hx2=lr(128,190,rch)+rum*12-out*14,hy2=lr(192,lr(124,172,dig),rch)-out*36
  c.beginPath();c.moveTo(102,164);c.quadraticCurveTo(ex,ey,hx2,hy2);st(c,13,Dl,3)
  if(!(dig>.3)){el(c,hx2,hy2,8.5,8);fs(c,S,3)}
  // void ripples where the arm sinks in
  if(dig>.3)for(let k=0;k<2;k++){const p=(t*4+k/2)%1;c.globalAlpha=1-p;el(c,hx2-4,144,8+p*22,2+p*5);ln(c,2.4,'#c49bff');c.globalAlpha=1}
  // box front and flaps over the arm
  pg(c,132,152,234,152,236,236,130,236);fs(c,BX)
  pg(c,234,152,244,130,246,212,236,236);fs(c,BXd)
  pg(c,132,152,234,152,236,236,130,236);ln(c,3.5)
  rr(c,150,170,70,18,3);fs(c,'#e9cfa4',0)
  tx(c,'null',183,198,30,'#2a2230',0)
  c.beginPath();c.moveTo(138,222);c.lineTo(160,222);ln(c,2.4,BXd)
  // head
  c.save();c.translate(hx,hy);c.scale(.86,.86);c.rotate(q?.1:dig>.3?-.04:0)
  hd(c,S)
  face(c,q?{e:EY,ex:'dot',lx:7,ly:-6,m:'tiny',br:.2,bc:H,bl:1}:dig>.3?{e:EY,lx:sin(t*2*P*3)*6,ly:2,op:.9,m:'frown',br:.5,bc:H}:{e:EY,lx:7,ly:2,op:.85,m:'cat',bc:H})
  // hime cut: blunt bangs and side locks
  c.beginPath();c.moveTo(-52,0);c.bezierCurveTo(-58,-46,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-46,52,0);c.lineTo(44,-14);c.lineTo(-44,-14);c.closePath();fs(c,H)
  for(const g of[-1,1]){c.beginPath();c.moveTo(g*50,-16);c.lineTo(g*50,46);c.lineTo(g*36,46);c.lineTo(g*38,-14);c.closePath();fs(c,H)}
  c.beginPath();c.arc(0,-28,40,P*1.22,P*1.46);ln(c,5,Hl)
  // little bow headpiece
  c.save();c.translate(-30,-62);c.rotate(-.4);for(const g of[-1,1]){c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(g*16,-14,g*18,0);c.quadraticCurveTo(g*16,12,0,0);fs(c,PU,3)}el(c,0,0,4.5);fs(c,PU,3);c.restore()
  c.restore()
  // the question mark she pulled out
  if(q){const z=min(1,(t-.56)/.05),fy=hy2-6-(t>.88?(t-.88)*200:0);c.save();c.globalAlpha=t>.88?1-(t-.88)/.04:1;c.translate(hx2,fy);c.scale(z,z);c.rotate(sin(t*2*P*4)*.1)
    tx(c,'?',0,-24,52,'#ff7ab8',6,'DejaVu Sans');c.restore()}
  if(out>0){el(c,hx2,hy2,8.5,8);fs(c,S,3)}
  if(q&&t<.66)for(let k=0;k<4;k++){const a=k*P/2+.6,r=26+(t-.56)*120;c.beginPath();c.moveTo(hx2+cos(a)*r,hy2-24+sin(a)*r);c.lineTo(hx2+cos(a)*(r+7),hy2-24+sin(a)*(r+7));ln(c,3)}
  if(q&&t>.7)for(let k=0;k<3;k++)if(t>.7+k*.04){el(c,22+k*12,40-k*4,4);fs(c,'#fff',3)}
}
