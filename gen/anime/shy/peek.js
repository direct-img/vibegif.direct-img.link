// shy girl with platinum hime-cut hair peeking out from behind a shoji door, leaning out to blink at you, then hiding again
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#f1f3f5',HD='#ced4da',HL='#fff',EYE='#9775fa',ED='#6741d9',WOOD='#c98a52',PAPER='#fff9f0',BL='#ffa8a8',DRESS='#a5d8ff',RB='#f783ac'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
export default(c,t,i)=>{
  const s=ease((t-.06)/.24)-ease((t-.72)/.2),bk=i==11
  c.save();c.beginPath();c.rect(64,0,192,256);c.clip();c.translate(-90+112*s,0);c.translate(128,200);c.rotate(.2*s);c.translate(-128,-200)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(200,40,212,110,206,250);c.lineTo(50,250);c.bezierCurveTo(44,110,56,40,128,40);c.fill();c.stroke()
  c.fillStyle=DRESS;c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(66,200,60,256);c.lineTo(196,256);c.quadraticCurveTo(190,200,156,192);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,192);c.quadraticCurveTo(110,214,128,206);c.quadraticCurveTo(146,214,154,192);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(bk){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,142),c.quadraticCurveTo(x,149,x+14,142),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*40+k-2,164),c.lineTo(128+d*40+k+2,158),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(123,168);c.quadraticCurveTo(128,165,133,168);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,184);c.bezierCurveTo(46,76,86,40,128,40);c.bezierCurveTo(170,40,210,76,194,184)
  c.lineTo(176,184);c.quadraticCurveTo(180,140,174,110)
  for(let x=160;x>=92;x-=17)c.lineTo(x+8,114),c.lineTo(x,108)
  c.lineTo(82,110);c.quadraticCurveTo(76,140,80,184);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(184,80),c.lineTo(184+d*12,70),c.lineTo(184+d*12,92),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(184,81,5,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=WOOD;c.beginPath();c.roundRect(10,4,110,248,6);c.fill();c.stroke()
  c.fillStyle=PAPER;c.lineWidth=4;c.beginPath();c.rect(24,18,82,220);c.fill();c.stroke()
  c.strokeStyle=WOOD;c.lineWidth=5;c.beginPath()
  for(const x of[51,79])c.moveTo(x,20),c.lineTo(x,236)
  for(let y=62;y<238;y+=44)c.moveTo(26,y),c.lineTo(104,y)
  c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=4;for(const y of[150,164,178])c.beginPath(),c.ellipse(114,y,9,6.5,0,0,T),c.fill(),c.stroke()
  if(s>.98){c.fillStyle=BL;c.lineWidth=3.5;for(const[x,y,a]of[[218,52,-.5],[230,76,0],[224,100,.5]]){c.beginPath();c.ellipse(x,y,7,3.5,a,0,T);c.fill();c.stroke()}}
}
