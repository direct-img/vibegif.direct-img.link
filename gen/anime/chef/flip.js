// tiny chef girl with green hair tossing a pancake sky high out of her pan, watching it flip, and catching it
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#51cf66',HD='#2f9e44',EYE='#f59f00',ED='#d9480f',BL='#ffa8a8',TIE='#fa5252',PANT='#868e96',PAN='#495057',RIM='#adb5bd',CAKE='#e8a33d',SIDE='#ffe8cc',BUT='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,ly)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+ly*-.4,y+2+ly,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+ly*-.4,y-8+ly,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+ly*-.4,y+3+ly,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+ly*-.4-4,y-5+ly,4.5,0,T);c.fill();c.beginPath();c.arc(x+ly*-.4+5,y+8+ly,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const u=(t-.12)/.72,air=u>0&&u<1,dy=t<.12?-9*sin(PI*t/.12):t>.84?6*sin(PI*(t-.84)/.16):0
  const py=air?202-150*4*u*(1-u):202+dy,px=air?200-10*sin(PI*u):200,th=air?T*u:0,h=(202-py)/150
  c.translate(110,250);c.scale(1.12,1.12);c.translate(-110,-250)
  for(const d of[-1,1])ds(c,14,7,PANT,()=>{c.moveTo(100+d*11,232);c.lineTo(100+d*12,246)})
  c.fillStyle=PAN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(100+d*13,248,9,5,0,0,T),c.fill(),c.stroke()
  ds(c,20,11,'#fff',()=>{c.moveTo(84,206);c.lineTo(70,222);c.lineTo(80,232)})
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(88,196);c.quadraticCurveTo(70,202,72,238);c.lineTo(128,238);c.quadraticCurveTo(130,202,112,196);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[93,107])for(const y of[214,226])c.beginPath(),c.arc(x,y,2.5,0,T),c.fill()
  c.fillStyle=TIE;c.lineWidth=4;c.beginPath();c.moveTo(90,197);c.lineTo(110,197);c.lineTo(100,210);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(80,232,7,7,0,0,T);c.fill();c.stroke()
  const pan=()=>{c.moveTo(169,204+dy);c.quadraticCurveTo(172,224+dy,200,224+dy);c.quadraticCurveTo(228,224+dy,231,204+dy);c.ellipse(200,204+dy,31,10,0,0,PI,true)}
  for(const[l,k]of[[13,'#fff'],[6,'#111']])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(140,214+dy),c.lineTo(170,207+dy),c.stroke(),c.beginPath(),pan(),c.stroke()
  ds(c,12,6,'#a9744f',()=>{c.moveTo(140,214+dy);c.lineTo(170,207+dy)})
  c.lineWidth=6;c.fillStyle=PAN;c.beginPath();pan();c.fill();c.stroke()
  c.fillStyle=RIM;c.beginPath();c.ellipse(200,204+dy,31,10,0,0,T);c.fill();c.stroke()
  c.fillStyle=PAN;c.lineWidth=3;c.beginPath();c.ellipse(200,205+dy,24,7,0,0,T);c.fill();c.stroke()
  ds(c,20,11,'#fff',()=>{c.moveTo(116,206);c.lineTo(132,214);c.lineTo(140,214+dy)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(140,213+dy,8,7,0,0,T);c.fill();c.stroke()
  const ry=3+8*abs(cos(th)),up=cos(th)>0
  c.save();c.translate(px,py);c.rotate(air?.25*sin(th):0)
  c.lineWidth=4;c.fillStyle=SIDE;c.beginPath();c.ellipse(0,0,22,ry,0,0,T);c.lineTo(22,4);c.ellipse(0,4,22,ry,0,0,PI);c.lineTo(-22,0);c.fill();c.stroke()
  c.fillStyle=up?CAKE:'#f2b766';c.beginPath();c.ellipse(0,0,22,ry,0,0,T);c.fill();c.stroke()
  if(up){c.strokeStyle='#ffc078';c.lineWidth=2.5;c.beginPath();c.ellipse(0,0,15,ry*.65,0,0,T);c.stroke();c.strokeStyle='#111'}
  if(up&&ry>6){c.fillStyle=BUT;c.lineWidth=3;c.beginPath();c.rect(-6,-ry*.45,12,ry*.7);c.fill();c.stroke()}
  c.restore()
  if(air&&u>.15&&u<.85)for(const d of[-1,1])ds(c,7,3,'#fff',()=>{const y=py+(u<.5?16:-16);c.moveTo(px+d*26,y);c.lineTo(px+d*30,y+(u<.5?10:-10))})
  if(air&&u>.38&&u<.62)c.fillStyle='#ffd43b',c.lineWidth=3.5,[[px-34,py-6,7],[px+32,py+10,5]].forEach(([x,y,r])=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.35:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()})
  c.save();c.translate(100,150);c.scale(.62,.62);c.translate(-128,-110)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(194,36,206,96,194,166);c.lineTo(62,166);c.bezierCurveTo(50,96,62,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,-9*h);eye(c,153,140,1,-9*h)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,186,140,166);c.closePath();c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,160)
  c.bezierCurveTo(52,74,88,40,128,40);c.bezierCurveTo(168,40,204,74,188,160)
  c.quadraticCurveTo(186,124,180,108);c.quadraticCurveTo(166,108,158,96);c.quadraticCurveTo(150,110,134,112)
  c.quadraticCurveTo(140,100,138,90);c.quadraticCurveTo(118,108,94,108);c.quadraticCurveTo(100,100,100,92);c.quadraticCurveTo(88,104,76,108)
  c.quadraticCurveTo(70,130,68,160);c.closePath();c.fill();c.stroke()
  const hat=[()=>c.rect(80,22,96,40),()=>c.arc(94,0,30,0,T),()=>c.arc(128,-16,36,0,T),()=>c.arc(162,0,30,0,T)]
  c.fillStyle='#fff';c.lineWidth=14;for(const f of hat)c.beginPath(),f(),c.stroke();for(const f of hat)c.beginPath(),f(),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(80,30);c.lineTo(176,30);for(const x of[104,128,152])c.moveTo(x,10),c.lineTo(x,24);c.stroke()
  c.restore()
}
