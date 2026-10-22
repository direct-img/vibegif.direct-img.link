// chibi girl with a blue bob munching a rice ball: bite, then happy chewing with puffed cheeks, twice
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#4dabf7',HD='#1c7ed6',HL='#d0ebff',EYE='#9775fa',ED='#5f3dc4',HOOD='#ffd43b',HDK='#fab005',NORI='#2b3a2f',BL='#ffa8a8',CLIP='#ff6b6b'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const onigiri=(c,x,y,r)=>{
  const shape=()=>{c.beginPath();c.moveTo(x,y-34);c.quadraticCurveTo(x+6,y-38,x+12,y-30);c.lineTo(x+34,y+16);c.quadraticCurveTo(x+38,y+26,x+26,y+26);c.lineTo(x-26,y+26);c.quadraticCurveTo(x-38,y+26,x-34,y+16);c.lineTo(x-12,y-30);c.quadraticCurveTo(x-6,y-38,x,y-34);c.closePath()}
  c.save();c.beginPath();c.rect(0,0,256,256);c.arc(x+12,y-30,14,0,T,true);c.clip()
  shape();c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=NORI;c.fillRect(x-14,y+2,28,30);c.restore();shape();c.lineWidth=6;c.stroke()
  c.restore();c.save();shape();c.clip();c.beginPath();c.arc(x+12,y-30,14,0,T);c.lineWidth=5;c.stroke();c.restore()
}
export default(c,t)=>{
  const u=(t*2)%1,bite=u<.2,chew=!bite,ny=bite?-14:10*min(1,(u-.2)/.15),puff=chew?1+.25*Math.abs(sin(u*PI*4)):0,y=chew?2*sin(u*PI*4):0
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,206,176);c.quadraticCurveTo(204,184,194,184);c.lineTo(62,184);c.quadraticCurveTo(52,184,50,176);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=HOOD;c.beginPath();c.moveTo(98,186);c.quadraticCurveTo(60,196,52,250);c.lineTo(204,250);c.quadraticCurveTo(196,196,158,186);c.closePath();c.fill();c.stroke()
  c.fillStyle=HDK;c.beginPath();c.moveTo(96,188);c.quadraticCurveTo(128,214,160,188);c.quadraticCurveTo(150,204,128,206);c.quadraticCurveTo(106,204,96,188);c.fill();c.lineWidth=5;c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,206),c.lineTo(128+d*16,236),c.stroke(),c.beginPath(),c.arc(128+d*16,239,3.5,0,T),c.fillStyle='#fff',c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,22);c.fill()
  c.save();c.translate(0,y)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(puff)for(const d of[-1,1])c.beginPath(),c.arc(128+d*40,164,13*puff,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fillStyle=SKIN,c.fill(),c.stroke()
  if(chew){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,144,12,PI*1.15,PI*1.85),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*40+k-2,164),c.lineTo(128+d*40+k+2,158),c.stroke()
  c.lineWidth=3.5;c.beginPath()
  if(bite)c.ellipse(128,170,8,9,0,0,T),c.fillStyle='#c92a2a',c.fill();else if(u*8%2<1)c.moveTo(120,168),c.quadraticCurveTo(124,173,128,169),c.quadraticCurveTo(132,173,136,168);else c.ellipse(128,169,4,3,0,0,T)
  c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,178)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,178)
  c.quadraticCurveTo(184,140,180,110);c.lineTo(170,112);c.quadraticCurveTo(166,106,158,112);c.quadraticCurveTo(150,106,142,112)
  c.quadraticCurveTo(134,106,126,112);c.quadraticCurveTo(118,106,110,112);c.quadraticCurveTo(102,106,94,112);c.quadraticCurveTo(88,106,84,112)
  c.lineTo(76,110);c.quadraticCurveTo(72,140,66,178);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle=CLIP;c.lineWidth=5;c.beginPath();c.moveTo(172,82);c.lineTo(186,98);c.moveTo(166,88);c.lineTo(180,104);c.stroke();c.strokeStyle='#111'
  c.restore()
  if(chew)for(const[x,yy,o]of[[46,96,0],[210,88,.5]]){const s=9*sin(PI*((u*2+o)%1));if(s>1.5){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(x,yy-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,yy+qy,x+px,yy+py);c.fill();c.stroke()}}
  const ox=128,oy=206+ny
  onigiri(c,ox,oy)
  c.lineWidth=5;c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.ellipse(ox+d*34,oy+12,11,13,d*.3,0,T),c.fill(),c.stroke()
}
