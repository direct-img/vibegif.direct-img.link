// chibi girl with a brown ponytail getting shy: head tilting, blush pulsing, little hearts floating up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#a9744f',HD='#8d6346',HL='#e8c39e',EYE='#51cf66',ED='#2b8a3e',CARD='#fff3bf',TIE='#fa5252',BL='#ff8fab',HT='#f06595',SW='#a5d8ff'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-3,y+4,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-3,y-4,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-3,y+5,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-7,y-2,4.5,0,T);c.fill();c.beginPath();c.arc(x+2,y+10,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-18,x+16,y-5);c.moveTo(x+d*15,y-6);c.lineTo(x+d*20,y-11);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const tilt=.07*sin(t*T),bl=1+.18*sin(2*T*t)
  c.fillStyle=HT;c.lineWidth=4
  for(const[x0,o]of[[40,0],[214,.33],[30,.66]]){const p=(t+o)%1,s=1.4*sin(PI*p);if(s>.15)heart(c,x0+8*sin(p*T*2),190-p*150,s)}
  const head=f=>{c.save();c.translate(128,180);c.rotate(tilt);c.translate(-128,-180);f();c.restore()}
  head(()=>{
    c.save();c.translate(170,52);c.rotate(.35+.22*sin(t*T-.8))
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(30,-10,70,40,64,120);c.quadraticCurveTo(58,140,44,148);c.quadraticCurveTo(48,90,4,22);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(12,10);c.bezierCurveTo(40,30,54,70,52,118);c.stroke();c.strokeStyle='#111'
    c.restore()
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,158);c.lineTo(58,158);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  })
  c.lineWidth=6;c.fillStyle=CARD;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,190);c.lineTo(128,214);c.lineTo(148,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=4;for(const y of[226,240])c.beginPath(),c.arc(128,y,3,0,T),c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1);eye(c,153,140,1)
    c.lineWidth=2.5;c.beginPath();c.moveTo(127,156);c.lineTo(126,159);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,15*bl,8*bl,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-8,-3,2,7])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,157),c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(121,164,124,168);c.quadraticCurveTo(127,172,130,168);c.quadraticCurveTo(133,164,136,168);c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(184,118,176,104);c.quadraticCurveTo(170,98,164,104);c.quadraticCurveTo(156,92,144,90)
    c.quadraticCurveTo(136,104,124,108);c.quadraticCurveTo(118,96,102,92);c.quadraticCurveTo(96,104,86,110)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(90,118);c.lineTo(112,113);c.moveTo(144,113);c.lineTo(166,118);c.stroke()
    c.fillStyle=TIE;c.lineWidth=5;c.beginPath();c.ellipse(170,52,10,14,.4,0,T);c.fill();c.stroke()
    c.fillStyle=SW;c.lineWidth=4;const sy=96+3*sin(2*T*t);c.beginPath();c.moveTo(194,sy-12);c.quadraticCurveTo(202,sy,194,sy+6);c.quadraticCurveTo(186,sy,194,sy-12);c.fill();c.stroke()
  })
  c.lineWidth=5;c.fillStyle=SKIN
  for(const d of[-1,1]){const k=d*2*sin(4*T*t);c.beginPath();c.ellipse(128+d*12+k,214,12,10,d*.3,0,T);c.fill();c.stroke()}
}
