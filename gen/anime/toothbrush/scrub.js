// sleepy aqua-haired girl with a headband and towel brushing her teeth, the brush scrubbing back and forth, foam bubbles puffing and floating off, rinse cup in her other hand
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#66d9e8',HD='#1098ad',HL='#e3fafc',EYE='#9775fa',ED='#5f3dc4',BAND='#f783ac',TEE='#ffa94d',TOW='#fff',STR='#74c0fc',CUP='#faa2c1',WAT='#a5d8ff',BRUSH='#69db7c',BL='#ffa8a8',MO='#c92a2a'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+6,3,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  // drowsy lid
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-19,y+2);c.quadraticCurveTo(x,y-8,x+19,y+2);c.lineTo(x+19,y-24);c.lineTo(x-19,y-24);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y+2);c.quadraticCurveTo(x,y-7,x+16,y+2);c.moveTo(x+d*15,y+1);c.lineTo(x+d*20,y-3);c.stroke()
}
const bub=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.save();c.fillStyle=WAT;c.beginPath();c.arc(x-r*.35,y-r*.35,r*.28,0,T);c.fill();c.restore()}
export default(c,t)=>{
  const ox=6*sin(4*T*t)
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,178);c.quadraticCurveTo(190,192,178,182);c.lineTo(78,182);c.quadraticCurveTo(66,192,52,178);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  // striped towel around the neck
  c.fillStyle=TOW;c.beginPath();c.moveTo(90,186);c.quadraticCurveTo(128,212,166,186);c.lineTo(178,198);c.lineTo(172,256);c.lineTo(146,256);c.lineTo(150,214);c.quadraticCurveTo(128,222,106,214);c.lineTo(110,256);c.lineTo(84,256);c.lineTo(78,198);c.closePath();c.fill();c.stroke()
  c.strokeStyle=STR;c.lineWidth=4;c.beginPath();for(const y of[232,244])c.moveTo(85,y),c.lineTo(108,y),c.moveTo(148,y),c.lineTo(171,y);c.stroke();c.strokeStyle='#111'
  // left hand holding the rinse cup
  for(const[l,s]of[[24,'#111'],[15,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(70,256),c.lineTo(62,232),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=CUP;c.beginPath();c.moveTo(34,190);c.lineTo(76,190);c.lineTo(72,236);c.lineTo(38,236);c.closePath();c.fill();c.stroke()
  c.fillStyle=WAT;c.beginPath();c.ellipse(55,194,19,5,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(42,204);c.lineTo(44,226);c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(64,220,13,11,0,0,T);c.fill();c.stroke()
  // face
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13,6,0,0,T),c.fill()
  c.fillStyle=MO;c.lineWidth=3.5;c.beginPath();c.ellipse(130,170,9,7,0,0,T);c.fill();c.stroke()
  // hair pulled back off the forehead under a headband, side locks framing the face
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150);c.bezierCurveTo(52,74,88,34,128,34);c.bezierCurveTo(168,34,204,74,188,150)
  c.quadraticCurveTo(184,128,182,112);c.bezierCurveTo(176,74,80,74,74,112);c.quadraticCurveTo(72,128,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.26,1.36],[1.44,1.54],[1.64,1.74]])c.beginPath(),c.arc(128,96,56,PI*a,PI*e),c.stroke()
  // soft bangs falling from under the headband, tips ending above the eyes, then the band over their roots
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(78,110);c.quadraticCurveTo(128,68,178,110)
  c.quadraticCurveTo(176,114,170,118);c.quadraticCurveTo(164,106,152,104);c.quadraticCurveTo(150,112,142,118)
  c.quadraticCurveTo(136,104,124,102);c.quadraticCurveTo(122,112,114,118);c.quadraticCurveTo(108,106,96,104)
  c.quadraticCurveTo(92,112,86,116);c.quadraticCurveTo(80,114,78,110);c.closePath();c.fill();c.stroke()
  for(const[l,st]of[[17,'#111'],[10,BAND]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(72,116),c.bezierCurveTo(78,72,178,72,184,116),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=BAND
  for(const d of[-1,1])c.beginPath(),c.moveTo(166,84),c.quadraticCurveTo(166+d*14,70,166+d*16,88),c.quadraticCurveTo(166+d*8,94,166,84),c.fill(),c.stroke()
  c.beginPath();c.arc(166,84,4,0,T);c.fill();c.stroke()
  // toothbrush scrubbing, its head tucked in her cheek
  const bx=136+ox
  for(const[l,s]of[[13,'#111'],[6,BRUSH]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(bx,170),c.lineTo(bx+70,182),c.stroke()
  for(const[l,s]of[[24,'#111'],[15,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(186,256),c.lineTo(bx+66,198),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(bx+64,184,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(bx+56,180);c.lineTo(bx+66,180);c.moveTo(bx+56,187);c.lineTo(bx+66,187);c.stroke()
  // foam puffing around her lips
  c.fillStyle='#fff';c.lineWidth=3
  for(const[k,[x,y,r]]of[[118,174,5],[124,180,5],[134,179,5.5],[141,173,4.5],[114,166,3.5]].entries())bub(c,x,y,r+1.2*sin(4*T*t+k*1.7))
  // bubbles drifting up from her mouth and popping
  for(const o of[0,.5]){
    const p=(2*t+o)%1,x=108-56*p,y=170-50*p+4*sin(T*p*2)
    if(p<.85)bub(c,x,y,3+4*p)
    else{c.lineWidth=3;const r=10;c.beginPath();for(let k=0;k<6;k++){const a=k*T/6;c.moveTo(x+cos(a)*r*.6,y+sin(a)*r*.6);c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.stroke()}
  }
  // scrub lines by the brush hand
  for(const[l,s]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;for(const k of[-1,1])c.beginPath(),c.arc(bx+64,184,24,PI*(k>0?-.25:.75),PI*(k>0?.05:1.05)),c.stroke()}
  c.strokeStyle='#111'
}
