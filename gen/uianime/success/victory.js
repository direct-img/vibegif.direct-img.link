// red haired girl with a side ponytail flashing a sideways V sign over her eye, winking with a big grin while sparkles pop all around
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ff6b6b',HD='#e03131',HL='#ffe3e3',EYE='#4dabf7',ED='#1864ab',TOP='#ffe066',TD='#fab005',SCR='#74c0fc',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',SP=['#ffd43b','#ff8fab','#74c0fc','#ffd43b','#b2f2bb']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const w=t>=.25&&t<.94
  c.lineWidth=3.5
  for(const[k,[x,y]]of[[30,40],[220,30],[236,224],[24,104],[150,16]].entries()){const p=(t-.25-k*.1+1)%1;if(p<.4)c.fillStyle=SP[k],spark(c,x,y,19*sin(PI*p/.4))}
  c.save();c.translate(178,62)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(34,-12,56,50,46,126);c.quadraticCurveTo(40,148,24,156);c.quadraticCurveTo(34,96,0,24);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(12,12);c.bezierCurveTo(34,34,42,80,36,124);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SCR;c.lineWidth=5;c.beginPath();c.ellipse(2,6,11,15,.5,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,156);c.lineTo(58,156);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(96,191);c.lineTo(128,214);c.lineTo(160,191);c.lineTo(170,200);c.lineTo(128,232);c.lineTo(86,200);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,208,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=TD;c.lineWidth=4;c.beginPath();for(let k=0;k<10;k++){const r=k%2?6:13,b=k*PI/5-PI/2;c.lineTo(160+cos(b)*r,230+sin(b)*r)}c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,153,140,1)
  if(w){c.lineWidth=5.5;c.beginPath();c.moveTo(91,130);c.lineTo(112,141);c.lineTo(91,151);c.stroke()}else eye(c,103,140,-1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,170,142,164);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,114,164);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,184,8,6,0,0,T);c.fill();c.fillStyle='#fff';c.fillRect(114,160,28,7);c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  ds(c,30,19,TOP,()=>{c.moveTo(74,252);c.lineTo(36,206);c.lineTo(46,166)})
  for(const[fx,fy]of[[86,120],[88,160]])ds(c,14,7,SKIN,()=>{c.moveTo(54,148+(fy-140)*.3);c.lineTo(fx,fy)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(50,152,13,14,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(56,160,8,5,-.3,0,T);c.fill();c.stroke()
}
