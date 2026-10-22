// chestnut-haired schoolgirl confessing with her head bowed and eyes squeezed shut, holding out a trembling love letter sealed with a heart
const{sin,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#b5703f',HD='#8a4f2a',HL='#ecc19a',BOW='#fa5252',UNI='#4c6ef5',BL='#ff8fab',HT='#f03e3e',PAPER='#fff9db'
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t,i)=>{
  const j=i%2?1.5:-1.5,bl=1+.15*sin(2*T*t),p=1+.3*max(0,sin(4*T*t))
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,46);c.bezierCurveTo(204,46,214,124,208,214);c.lineTo(48,214);c.bezierCurveTo(42,124,52,46,128,46);c.fill();c.stroke()
  c.fillStyle=UNI;c.beginPath();c.moveTo(100,196);c.quadraticCurveTo(62,204,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,204,156,196);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,196);c.quadraticCurveTo(80,200,74,214);c.lineTo(128,226);c.lineTo(182,214);c.quadraticCurveTo(176,200,156,196);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,176);c.lineTo(116,198);c.lineTo(128,212);c.lineTo(140,198);c.lineTo(140,176);c.fill();c.lineWidth=5;c.stroke()
  c.save();c.translate(0,8);c.lineWidth=6
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=5.5;c.beginPath();c.moveTo(91,131);c.lineTo(113,140);c.lineTo(91,149);c.moveTo(165,131);c.lineTo(143,140);c.lineTo(165,149);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,158,15*bl,8*bl,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-8,-3,2,7])c.beginPath(),c.moveTo(128+d*42+k-2,162),c.lineTo(128+d*42+k+2,154),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(119,170);for(let k=1;k<=6;k++)c.lineTo(119+k*3,k%2?173:169);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,156)
  c.bezierCurveTo(52,78,88,46,128,46);c.bezierCurveTo(168,46,204,78,188,156)
  c.quadraticCurveTo(186,120,178,104);c.quadraticCurveTo(168,104,160,114);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(138,106,128,112)
  c.quadraticCurveTo(126,96,116,88);c.quadraticCurveTo(108,104,98,110);c.quadraticCurveTo(94,98,88,96);c.quadraticCurveTo(82,106,80,114)
  c.quadraticCurveTo(70,128,68,156);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=BOW;c.lineWidth=5
  for(const d of[-1,1])c.beginPath(),c.moveTo(128,46),c.quadraticCurveTo(128+d*14,24,128+d*32,32),c.quadraticCurveTo(128+d*34,52,128,46),c.fill(),c.stroke()
  c.beginPath();c.ellipse(128,46,7,8,0,0,T);c.fill();c.stroke()
  c.restore()
  for(const d of[-1,1])for(const[l,s]of[[30,'#111'],[19,UNI]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*76,252),c.lineTo(128+d*60+j,216),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(j,0)
  c.lineWidth=6;c.fillStyle=PAPER;c.beginPath();c.roundRect(68,186,120,62,6);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(72,190);c.lineTo(128,220);c.lineTo(184,190);c.stroke()
  c.fillStyle=HT;heart(c,128,222,1.5)
  c.lineWidth=5;c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*60,212,12,15,0,0,T),c.fill(),c.stroke(),c.beginPath(),c.ellipse(128+d*50,202,6,9,-d*.4,0,T),c.fill(),c.stroke()
  c.restore()
  for(const[l,s]of[[8,'#111'],[3.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.arc(128+d*(80+k*8)+j,210,10+k*5,d<0?PI*.75:-PI*.25,d<0?PI*1.25:PI*.25),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=HT;heart(c,222,62,1.5*p)
  c.fillStyle='#ff8fab';for(const[x0,o]of[[228,0],[28,.5]]){const q=(t+o)%1,s=1.1*sin(PI*q);if(s>.15)heart(c,x0+6*sin(q*T*2),186-q*90,s)}
}
