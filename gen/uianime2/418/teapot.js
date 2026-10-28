// honey blonde chibi girl in a round "418" teapot costume with a lid hat, hand on hip as the handle, tipping over to pour tea from her spout arm into a cup while singing
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100
const SKIN='#ffe3d1',HAIR='#f6c35b',HD='#d4902b',HL='#fff4d1',EYE='#20c997',ED='#087f5b',POT='#e7f5ff',PD='#74c0fc',PN='#1c7ed6',BL='#ffa8a8',TEA='#c77c3a',TL='#e8a76a',CUP='#fcc2d7',CPD='#f06595',SHO='#f783ac',NT='#b197fc',Z=.56
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const G={1:c=>{c.moveTo(-4,-6);c.lineTo(1,-10);c.lineTo(1,10)},4:c=>{c.moveTo(4,10);c.lineTo(4,-10);c.lineTo(-7,4);c.lineTo(7,4)},8:c=>{c.moveTo(5,-5);c.arc(0,-5,5,0,T);c.moveTo(7,5);c.arc(0,5,7,0,T)}}
const PX=96,PY=248,TX=184,TY=118
export default(c,t,i)=>{
  const a=.3*(ease((t-.08)/.24)-ease((t-.68)/.22)),tip=a>.2,bk=i==1
  const ex=PX+(TX-PX)*cos(a)-(TY-PY)*sin(a),ey=PY+(TX-PX)*sin(a)+(TY-PY)*cos(a)
  const hd=ease((t-.24)/.1),tl=ease((t-.66)/.1),sp=(u)=>{const q=1-u;return[q*q*ex+2*q*u*(ex+18)+u*u*218,q*q*ey+2*q*u*(ey+6)+u*u*206]}
  c.fillStyle='rgba(134,142,150,.3)';c.beginPath();c.ellipse(98,248,46,6,0,0,T);c.fill()
  c.fillStyle=CUP;c.lineWidth=5;c.beginPath();c.ellipse(218,240,30,7,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(240,220,9,-PI/2,PI/2);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(194,206);c.lineTo(242,206);c.quadraticCurveTo(242,236,218,236);c.quadraticCurveTo(194,236,194,206);c.fill();c.stroke()
  c.fillStyle=TEA;c.lineWidth=4;c.beginPath();c.ellipse(218,206,24,5,0,0,T);c.fill();c.stroke()
  c.fillStyle=CPD;c.lineWidth=3;c.beginPath();c.moveTo(218,228);c.bezierCurveTo(209,221,212,213,218,218);c.bezierCurveTo(224,213,227,221,218,228);c.fill();c.stroke()
  if(hd>tl){ds(c,12,6,TEA,()=>{for(let k=0;k<=10;k++){const[x,y]=sp(tl+(hd-tl)*k/10);k?c.lineTo(x,y):c.moveTo(x,y)}})
    if(hd>.98)for(const[d,o]of[[-1,0],[1,.5]]){const p=(t*4+o)%1;c.fillStyle=TL;c.lineWidth=3;c.beginPath();c.arc(218+d*(6+12*p),204-14*sin(PI*p),4*(1-p*.5),0,T);c.fill();c.stroke()}}
  const sv=min(1,(t+.22)%1/.1,(.44-(t+.22)%1)/.1);if(sv>0)for(const o of[0,.5]){const p=((t+.22)*5+o)%1;c.globalAlpha=sv;for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(212+o*16,196-22*p);c.bezierCurveTo(204+o*16,190-22*p,220+o*16,182-22*p,212+o*16,174-22*p);c.stroke()}}
  c.globalAlpha=1;c.strokeStyle='#111'
  for(const[k,o]of[[0,0],[1,.5]]){const p=(t+o)%1,x=204+k*22+8*sin(T*p*2),y=74-54*p;if(p<.85){c.globalAlpha=min(1,(1-p)*4,p*6);c.fillStyle=NT;c.lineWidth=4;c.beginPath();c.ellipse(x,y,7,5.5,-.4,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(x+6,y-2);c.lineTo(x+6,y-24);c.lineTo(x+14,y-18);c.stroke();c.globalAlpha=1}}
  c.save();c.translate(PX,PY);c.rotate(a);c.translate(-PX,-PY)
  c.fillStyle=SHO;c.lineWidth=5;for(const x of[78,110])c.beginPath(),c.ellipse(x,242,13,7,0,0,T),c.fill(),c.stroke()
  ds(c,24,14,POT,()=>{c.moveTo(56,152);c.bezierCurveTo(10,140,6,212,44,206)})
  c.lineWidth=6;c.fillStyle=POT;c.beginPath();c.moveTo(136,164);c.quadraticCurveTo(162,170,178,112);c.lineTo(194,122);c.quadraticCurveTo(176,214,132,214);c.closePath();c.fill();c.stroke()
  c.save();c.translate(186,116);c.rotate(.55);c.fillStyle=PD;c.lineWidth=5;c.beginPath();c.ellipse(0,0,11,6,0,0,T);c.fill();c.stroke();c.restore()
  c.fillStyle=POT;c.lineWidth=6;c.beginPath();c.roundRect(62,224,64,14,6);c.fill();c.stroke()
  c.beginPath();c.ellipse(94,184,56,48,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle=PD;c.fillRect(30,214,130,30);c.strokeStyle=PD;c.lineWidth=5;c.beginPath();c.moveTo(38,160);c.quadraticCurveTo(94,148,150,160);c.stroke()
  c.fillStyle='#a5d8ff';for(const[x,y]of[[56,186],[132,186],[74,212],[114,212]])c.beginPath(),c.arc(x,y,4,0,T),c.fill();c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(38,214);c.quadraticCurveTo(94,222,150,214);c.stroke();c.beginPath();c.ellipse(94,184,56,48,0,0,T);c.stroke()
  for(const[k,n]of[[-1,4],[0,1],[1,8]]){c.save();c.translate(94+k*20,188);c.scale(.95,.95);c.beginPath();G[n](c);c.restore();c.lineWidth=10;c.stroke();c.lineWidth=5;c.strokeStyle=PN;c.stroke();c.strokeStyle='#111'}
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(94,184,44,1.15*PI,1.35*PI);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(92,130);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,218,100,212,170);c.quadraticCurveTo(222,196,206,212);c.quadraticCurveTo(196,200,186,214);c.quadraticCurveTo(176,200,160,206)
  c.lineTo(96,206);c.quadraticCurveTo(80,200,70,214);c.quadraticCurveTo(60,200,50,212);c.quadraticCurveTo(34,196,44,170);c.bezierCurveTo(38,100,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,198);c.lineTo(142,198);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,198);c.moveTo(142,168);c.lineTo(142,198);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(tip){c.lineWidth=10;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
  else if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,142),c.quadraticCurveTo(x,150,x+14,142),c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=7;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128,172,9,tip?10:7,0,0,T);c.fill();c.stroke()
  c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,166)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,166)
  c.quadraticCurveTo(186,124,180,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
  c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
  c.quadraticCurveTo(80,104,76,104);c.quadraticCurveTo(68,128,64,166);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=9;for(const[s,e]of[[1.2,1.3],[1.7,1.8]])c.beginPath(),c.arc(128,110,60,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.lineWidth=10;c.fillStyle=POT;c.beginPath();c.moveTo(50,74);c.quadraticCurveTo(54,10,128,8);c.quadraticCurveTo(202,10,206,74);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=PD;c.lineWidth=12;c.beginPath();c.moveTo(50,52);c.quadraticCurveTo(128,30,206,52);c.stroke();c.restore()
  c.strokeStyle='#111';c.fillStyle=PD;c.beginPath();c.roundRect(36,66,184,22,11);c.fill();c.stroke()
  c.fillStyle=POT;c.beginPath();c.roundRect(118,-8,20,18,4);c.fill();c.stroke();c.beginPath();c.ellipse(128,-14,20,14,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.arc(128,70,56,1.2*PI,1.4*PI);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.fillStyle=POT;c.lineWidth=6;c.beginPath();c.ellipse(92,140,34,9,0,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(44,204,11,11,0,0,T);c.fill();c.stroke()
  c.restore()
}
