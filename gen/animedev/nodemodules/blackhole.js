// silver-haired anime girl clinging to her desk while a swirling node_modules black hole sucks in package boxes, papers and her coffee, hair and legs streaming toward it
export const frames=20,delay=90,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t)
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const SK='#6e4330',HR='#e9ecf6',HD='#aab1cc',HL='#fff',JK='#ff8a3d',HX=186,HY=96
// debris that spirals into the core
const box=c=>{F(c,()=>c.rect(-9,-8,18,16),'#d7a96b',2.5);c.strokeStyle='#9c7442';c.lineWidth=2;c.beginPath();c.moveTo(-9,-2);c.lineTo(9,-2);c.moveTo(0,-8);c.lineTo(0,-2);c.stroke()}
const doc=c=>{F(c,()=>{c.moveTo(-8,-10);c.lineTo(4,-10);c.lineTo(8,-6);c.lineTo(8,10);c.lineTo(-8,10);c.closePath()},'#fff',2.5);c.strokeStyle='#a3a8bb';c.lineWidth=1.8;for(const y of[-4,0,4]){c.beginPath();c.moveTo(-5,y);c.lineTo(5,y);c.stroke()}}
const mug=c=>{F(c,()=>c.roundRect(-8,-9,16,18,3),'#4bb3a8',2.5);c.beginPath();c.arc(9,0,4,-1.2,1.2);c.lineWidth=2.5;c.strokeStyle=L;c.stroke()}
const D=[[box,0,44,150],[doc,.2,70,58],[mug,.4,50,166],[doc,.6,112,40],[box,.8,26,96]]
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // black hole: dark disc, four swirling arms, glowing core ring
  c.save();c.translate(HX,HY)
  O(c,0,0,62,62,'#2c1b4f',3.5)
  for(let k=0;k<4;k++){c.save();c.rotate(t*P+k*P/2)
    F(c,()=>{for(let a=0;a<=3;a+=.15){const r=20+a*14;c.lineTo(sin(a)*r,-cos(a)*r)}for(let a=3;a>=0;a-=.15){const r=20+a*14-(1-a/3)*0-a*3.2;c.lineTo(sin(a-.32+a*.08)*r,-cos(a-.32+a*.08)*r)}c.closePath()},['#a35bff','#ff5fa2','#7b6cff','#ffa64d'][k],0)
    c.restore()}
  O(c,0,0,24,24,'#0e0a1a',3.5)
  c.strokeStyle='#d9c2ff';c.lineWidth=3;c.beginPath();c.arc(0,0,18,t*2*P,t*2*P+1.6);c.stroke()
  c.restore()
  c.textAlign='center';c.textBaseline='middle';c.font='bold 18px DejaVu Sans Mono';c.lineWidth=6;c.strokeStyle='#fff';c.strokeText('node_modules',178,18);c.fillStyle='#4a2a8a';c.fillText('node_modules',178,18)
  // desk with a laptop getting tugged
  const sh=0
  for(const x of[20,82])F(c,()=>c.rect(x-5+sh,192,10,46),'#9a6a3e',3)
  F(c,()=>c.roundRect(9+sh,182,85,12,4),'#c58b55',3.5)
  F(c,()=>{c.moveTo(20+sh,182);c.lineTo(58+sh,182);c.lineTo(62+sh,176);c.lineTo(24+sh,176);c.closePath()},'#c9ccd6',3)
  c.save();c.translate(24+sh,176);c.rotate(-.5);F(c,()=>c.roundRect(0,-34,38,34,4),'#3b3f4a',3);c.restore()
  // debris winding in: fades up near its start, shrinks into the core
  for(const[f,ph,x0,y0]of D){const p=(t+ph)%1,a=Math.atan2((y0-HY)/.85,x0-HX)-1.6*P*p**1.5,r=Math.hypot(x0-HX,(y0-HY)/.85)*(1-p)**1.5+4,s=min(1,p*7)*(1-E((p-.6)/.4))
    if(s<=.05)continue;c.save();c.translate(HX+cos(a)*r,HY+sin(a)*r*.85);c.rotate(p*9+ph*5);c.scale(s,s);f(c);c.restore()}
  // girl: hands on the desk corner, body lifted and streaming toward the hole
  const fl=sin(t*8*P),fl2=sin(t*8*P+1.9)
  T(c,[[140,140],[156,124+fl*5,168,110+fl*7]],12,'#7ea3d8');O(c,171,107+fl*7,7,10,'#f4f4f8',3,-2.3)
  T(c,[[146,148],[166,140+fl2*5,180,128+fl2*7]],12,'#7ea3d8');O(c,184,126+fl2*7,7,10,'#f4f4f8',3,-2.1)
  F(c,()=>{c.moveTo(104,158);c.quadraticCurveTo(118,132+fl,140,128);c.quadraticCurveTo(156,132,152,150);c.quadraticCurveTo(136,162+fl,116,178);c.closePath()},JK)
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(120,150);c.lineTo(146,138);c.stroke()
  // long silver hair streaming toward the hole
  for(let k=0;k<4;k++){const y0=92+k*11,w=sin(t*8*P+k*1.4)*6,x1=172-k*2,y1=64+k*13+w
    F(c,()=>{c.moveTo(100,y0);c.bezierCurveTo(124,y0-16,146,y1-4+w*.5,x1,y1);c.bezierCurveTo(148,y1+16+w*.5,126,y0+10,104,y0+18);c.closePath()},k%2?HD:HR,3)}
  T(c,[[110,164],[96,172,86,182]],10,JK);T(c,[[114,174],[100,186,90,190]],10,JK)
  O(c,86,182,7,7,SK,3);O(c,90,190,7,7,SK,3)
  // head turned to us, screaming
  c.save();c.translate(92,128);c.rotate(-.28);c.scale(1.05,1.05)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  c.strokeStyle=L;c.lineWidth=3.6;for(const s of[-1,1]){c.beginPath();c.moveTo(s*17+s*9,5);c.lineTo(s*17-s*6,12);c.lineTo(s*17+s*9,18);c.stroke()}
  for(let k=0;k<3;k++){const p=(t*4+k/3)%1;c.globalAlpha=1-p;O(c,30+p*34,10-p*14,3.5-p*1.5,2.5,'#9fe6ff',1.8);c.globalAlpha=1}
  c.fillStyle='rgba(255,120,140,.4)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
  F(c,()=>c.ellipse(0,32,7+fl*.6,7+fl,0,0,2*P),'#5a1a26',2.6);F(c,()=>c.ellipse(0,36+fl,4,2.5,0,0,2*P),'#e8737f',0)
  // bangs blown sideways toward the hole
  F(c,()=>{c.moveTo(-42,6);c.bezierCurveTo(-50,-40,-24,-58,2,-58);c.bezierCurveTo(30,-58,50,-40,46,-14);c.quadraticCurveTo(64,-16+fl*3,78,-26);c.quadraticCurveTo(62,-2,42,0)
    c.quadraticCurveTo(32,-10,22,-14);c.quadraticCurveTo(16,-4,8,0);c.quadraticCurveTo(2,-10,-6,-16);c.quadraticCurveTo(-14,-4,-20,4);c.quadraticCurveTo(-26,-8,-32,-12);c.quadraticCurveTo(-36,-2,-42,6)},HR)
  F(c,()=>{c.moveTo(-36,-10);c.quadraticCurveTo(-48,14,-42,34);c.quadraticCurveTo(-38,24,-32,22);c.quadraticCurveTo(-34,6,-30,-4)},HR,3)
  c.strokeStyle=HD;c.lineWidth=2;for(const[a,b,d]of[[-24,-46,-14],[-4,-54,2],[18,-50,24],[34,-36,40]]){c.beginPath();c.moveTo(a,b);c.quadraticCurveTo(a+4,b+20,d,-12);c.stroke()}
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.5,-2.2,-1.45])c.beginPath(),c.arc(2,-8,44,a,a+.18),c.stroke()
  c.strokeStyle='#5d6380';c.lineWidth=2.6;for(const s of[-1,1]){c.beginPath();c.moveTo(s*9,-9+(s<0?2:0));c.quadraticCurveTo(s*17,-5,s*25,-3);c.stroke()}
  c.restore()
}
