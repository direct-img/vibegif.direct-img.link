// chibi girl in a yellow raincoat and red boots jumping into a puddle, splash flying out, rain falling
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffc078',HD='#f08c00',EYE='#40c057',ED='#2b8a3e',COAT='#ffd43b',CD='#fab005',BOOT='#ff6b6b',WA='#a5d8ff',WL='#e7f5ff',BL='#ffa8a8',Z=.7
const cl=x=>max(0,min(1,x))
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2.5,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const rain=(c,t,l)=>{for(const[x,o,n]of l){const y=((t*n+o)%1)*300-40;for(const[w,s]of[[7,'#111'],[3,WA]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x-y*.2,y),c.lineTo(x-y*.2-6,y+22),c.stroke()}c.strokeStyle='#111'}
const drop=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.moveTo(0,-r*1.8);c.quadraticCurveTo(r*1.1,-r*.2,r,r*.3);c.arc(0,r*.3,r,0,PI);c.quadraticCurveTo(-r*1.1,-r*.2,0,-r*1.8);c.restore();c.fill();c.stroke()}
export default(c,t,i)=>{
  const air=cl((t-.12)/.42),h=28*sin(PI*air),up=air>0&&air<1,sq=t<.12?.1*sin(PI*t/.12):t>.54&&t<.74?.13*sin(PI*(t-.54)/.2):0,q=cl((t-.54)/.42)
  rain(c,t,[[60,.1,1],[150,.6,1],[250,.35,1],[200,.85,1]])
  c.lineWidth=6;c.fillStyle=WA;c.beginPath();c.ellipse(128,228,98,19,0,0,T);c.fill();c.stroke()
  c.fillStyle=WL;c.beginPath();c.ellipse(94,222,26,5,0,0,T);c.fill()
  if(q>0&&q<1){c.strokeStyle=WL;c.lineWidth=3;for(const k of[0,.3]){const r=cl(q*1.4-k);if(r>0&&r<1)c.globalAlpha=1,c.beginPath(),c.ellipse(128,228,40+48*r,7+10*r,0,0,T),c.stroke()}c.strokeStyle='#111'}
  c.save();c.translate(128,228-h);c.scale(1+sq,1-sq)
  c.fillStyle=BOOT;c.lineWidth=6
  for(const d of[-1,1])c.beginPath(),c.moveTo(d*6,-26),c.lineTo(d*6,-2),c.quadraticCurveTo(d*6,2,d*12,2),c.lineTo(d*28,2),c.quadraticCurveTo(d*32,-6,d*24,-8),c.lineTo(d*24,-26),c.closePath(),c.fill(),c.stroke()
  const a=up?.5+.5*sin(PI*air):0,ar=d=>[d*(36+14*a),-56-58*a]
  for(const d of[-1,1]){const[x,y]=ar(d);for(const[w,s]of[[24,'#111'],[13,COAT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(d*18,-86),c.lineTo(x,y),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=COAT;c.beginPath();c.moveTo(-22,-92);c.quadraticCurveTo(-30,-60,-42,-30);c.quadraticCurveTo(0,-18,42,-30);c.quadraticCurveTo(30,-60,22,-92);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(0,-88);c.lineTo(0,-26);c.stroke();c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#fff'
  for(const y of[-72,-52])c.beginPath(),c.arc(-8,y,4,0,T),c.fill(),c.stroke()
  for(const d of[-1,1]){const[x,y]=ar(d);c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(x,y,10,0,T);c.fill();c.stroke()}
  c.save();c.translate(0,-86);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=COAT;c.beginPath();c.ellipse(128,112,72,76,0,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const happy=t>.52&&t<.8
  if(happy){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,13,7,0,0,T),c.fill()
  c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath()
  if(up||happy)c.moveTo(116,165),c.quadraticCurveTo(128,186,140,165),c.closePath(),c.fill(),c.stroke();else c.arc(128,164,8,.2*PI,.8*PI),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(76,130);c.quadraticCurveTo(74,90,96,78);c.lineTo(160,78);c.quadraticCurveTo(182,90,180,130)
  c.quadraticCurveTo(172,108,160,104);c.quadraticCurveTo(152,114,146,120);c.quadraticCurveTo(138,104,124,102);c.quadraticCurveTo(116,114,110,120)
  c.quadraticCurveTo(104,106,94,106);c.quadraticCurveTo(82,112,76,130);c.closePath();c.fill();c.stroke()
  c.fillStyle=COAT;c.beginPath();c.moveTo(62,118);c.bezierCurveTo(60,40,196,40,194,118);c.quadraticCurveTo(186,84,128,82);c.quadraticCurveTo(70,84,62,118);c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=5;c.beginPath();c.arc(128,118,58,PI*1.2,PI*1.8);c.stroke();c.strokeStyle='#111'
  c.restore();c.restore()
  if(q>0&&q<1){c.fillStyle=WA;c.lineWidth=4;for(const[vx,vy]of[[-1.7,.9],[-1.2,1.3],[-.6,1.7],[.6,1.6],[1.2,1.25],[1.8,.95]]){const x=128+vx*64*q+(vx<0?-26:26),y=228-vy*130*q+170*q*q,r=9*(1-q*.5);if(y<230)drop(c,x,y,r,-vx*.5)}}
  if(q>0&&q<.45){const k=sin(PI*q/.45);c.fillStyle=WA;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*18,232),c.quadraticCurveTo(128+d*28,226-18*k,128+d*(32+8*k),226-36*k),c.quadraticCurveTo(128+d*40,222-12*k,128+d*(48+10*k),224-26*k),c.quadraticCurveTo(128+d*54,224-6*k,128+d*(62+14*k),228-14*k),c.quadraticCurveTo(128+d*60,238,128+d*40,238),c.closePath(),c.fill(),c.stroke()}
  rain(c,t,[[100,.45,1],[210,.05,1],[30,.7,1]])
}
