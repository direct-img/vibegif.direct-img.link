// girl peeking over a huge heart chocolate box she thrusts toward you, eyes squeezed shut, blushing hard, box trembling, hearts rising
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#ffc9de',HD='#f783ac',HL='#fff0f6',SLV='#9775fa',SD='#7048e8',BOX='#e03131',BXD='#a61e1e',BXL='#ff8787',RIB='#faa2c1',RD='#e64980',BOW='#e64980',BL='#ff6b81',HT='#f06595'
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore()}
export default(c,t)=>{
  const tr=1.8*sin(6*T*t),pu=1+.05*Math.max(0,sin(2*T*t)),bp=1+.15*sin(2*T*t)
  c.save();c.translate(0,-28)
  // long hair behind
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(206,40,216,120,216,200);c.quadraticCurveTo(222,250,200,272);c.lineTo(56,272);c.quadraticCurveTo(34,250,40,200);c.bezierCurveTo(40,120,50,40,128,40);c.fill();c.stroke()
  // big bow on top
  c.fillStyle=BOW;c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(184,62),c.quadraticCurveTo(184+d*30,30,184+d*30,70),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(184,62,8,0,T);c.fill();c.stroke()
  // face
  c.fillStyle=SKIN;c.lineWidth=7;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=7;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x+d*12,128);c.lineTo(x-d*8,138);c.lineTo(x+d*12,148);c.stroke()}
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,112),c.quadraticCurveTo(128+d*26,104,128+d*38,112),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*38,160,18*bp,9*bp,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-9,-3,3,9])c.beginPath(),c.moveTo(128+d*38+k-2,165),c.lineTo(128+d*38+k+2,155),c.stroke()
  // bangs
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,150)
  c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,150)
  c.quadraticCurveTo(186,120,178,106);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,96,150,94);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,92);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,98);c.quadraticCurveTo(86,106,80,112)
  c.quadraticCurveTo(70,126,66,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  // tremble lines and a sweat drop by her head
  c.lineWidth=4;for(const d of[-1,1])for(const y of[78,94])c.beginPath(),c.moveTo(128+d*(92+tr),y),c.lineTo(128+d*(102+tr),y-4),c.stroke()
  c.fillStyle='#a5d8ff';c.beginPath();c.moveTo(190,64);c.quadraticCurveTo(198,78,190,84);c.quadraticCurveTo(182,78,190,64);c.fill();c.stroke()
  // sleeves from the bottom corners
  for(const d of[-1,1])for(const[l,s]of[[38,'#111'],[27,SLV]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*112,262),c.quadraticCurveTo(128+d*96,222,128+d*(84+tr),198),c.stroke()
  c.strokeStyle='#111'
  // the big heart box, pushed forward
  c.save();c.translate(128+tr,196);c.scale(pu,pu)
  c.fillStyle=BXD;c.lineWidth=7;heart(c,0,3,7);c.fill();c.stroke()
  c.fillStyle=BOX;heart(c,0,-2,6.8);c.fill();c.stroke()
  c.strokeStyle=BXL;c.lineWidth=6;c.beginPath();c.arc(-38,-36,16,PI*1.1,PI*1.6);c.stroke();c.strokeStyle='#111'
  c.save();heart(c,0,-2,6.8);c.clip()
  for(const[l,s]of[[22,'#111'],[13,RIB]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(-90,-40),c.lineTo(90,40),c.stroke()
  c.restore();c.strokeStyle='#111'
  c.fillStyle=RIB;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(6,4),c.quadraticCurveTo(6+d*30,-22,6+d*26,16),c.closePath(),c.fill(),c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(6,8),c.lineTo(6+d*14,34),c.lineTo(6+d*4,30),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=RD;c.beginPath();c.arc(6,6,7,0,T);c.fill();c.stroke()
  c.restore()
  // hands gripping the sides
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*(78+tr*d),196,13,15,d*.3,0,T),c.fill(),c.stroke()
  // hearts rising beside her
  c.fillStyle=HT;c.lineWidth=4
  for(const[x0,o]of[[30,0],[226,.5]]){const p=(t+o)%1,s=1.4*sin(PI*p);if(s>.15)heart(c,x0+6*sin(2*T*p),150-p*120,s),c.fill(),c.stroke()}
}
