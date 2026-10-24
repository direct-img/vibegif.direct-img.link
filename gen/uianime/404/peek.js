// shy girl with long pink hair peeking over the top of a big "404" sign, eyes darting left and right with a nervous sweatdrop, then ducking back down
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#f783ac',HD='#e64980',HL='#ffdeeb',EYE='#51cf66',ED='#2b8a3e',WOOD='#e8b07a',WD='#c47f45',PANEL='#fff9db',DIG='#ff8787',BL='#ffa8a8',SW='#a5d8ff',CLIP='#ffd43b'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+lx,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+lx+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const up=ease((t-.06)/.16)-ease((t-.78)/.14),lx=t>.24&&t<.48?-5:t>=.48&&t<.76?5:0,bk=i==9
  c.save();c.beginPath();c.rect(0,0,256,200);c.clip();c.translate(128,117+40*(1-up));c.rotate(.06*up);c.scale(.88,.88);c.translate(-128,-140)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,214,110,210,250);c.lineTo(46,250);c.bezierCurveTo(42,110,56,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(bk){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,142),c.quadraticCurveTo(x,149,x+14,142),c.stroke()}
  else{eye(c,103,140,-1,lx);eye(c,153,140,1,lx)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,166),c.lineTo(128+d*42+k+2,160),c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,200);c.bezierCurveTo(44,76,86,36,128,36);c.bezierCurveTo(170,36,212,76,196,200)
  c.lineTo(180,200);c.quadraticCurveTo(184,140,176,106);c.quadraticCurveTo(168,106,162,114);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,116,92);c.quadraticCurveTo(110,104,102,110);c.quadraticCurveTo(96,98,88,98);c.quadraticCurveTo(84,106,80,106)
  c.quadraticCurveTo(72,140,76,200);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(124,38);c.quadraticCurveTo(118,8,152,12);c.quadraticCurveTo(128,20,136,38);c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(90,118);c.lineTo(112,112);c.moveTo(144,112);c.lineTo(166,118);c.stroke()
  c.fillStyle=CLIP;c.lineWidth=4;for(const y of[80,96])c.beginPath(),c.roundRect(170,y-4,22,8,4),c.fill(),c.stroke()
  if(up>.9){c.fillStyle=SW;c.lineWidth=4.5;c.beginPath();c.moveTo(68,104);c.quadraticCurveTo(78,118,68,124);c.quadraticCurveTo(58,118,68,104);c.fill();c.stroke()}
  c.restore()
  c.lineWidth=6;c.fillStyle=WOOD;c.beginPath();c.roundRect(12,134,232,114,18);c.fill();c.stroke()
  c.fillStyle=PANEL;c.lineWidth=5;c.beginPath();c.roundRect(28,149,200,84,10);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=4;c.beginPath();c.moveTo(34,142);c.lineTo(90,142);c.moveTo(166,241);c.lineTo(224,241);c.stroke()
  for(const[w,s]of[[26,'#111'],[13,DIG]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath()
    for(const x of[68,188])c.moveTo(x+9,166),c.lineTo(x-18,202),c.lineTo(x+21,202),c.moveTo(x+9,166),c.lineTo(x+9,219)
    c.moveTo(145,192);c.ellipse(128,192,17,26,0,0,T);c.stroke()}
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(128,192,16,PI*1.1,PI*1.35);c.moveTo(70,172);c.lineTo(63,182);c.moveTo(190,172);c.lineTo(183,182);c.stroke()
  c.strokeStyle='#111';c.fillStyle=SKIN;c.lineWidth=4.5
  for(const x of[64,192])for(const k of[-1.5,-.5,.5,1.5])c.beginPath(),c.ellipse(x+k*9,136,5,9,0,0,T),c.fill(),c.stroke()
}
