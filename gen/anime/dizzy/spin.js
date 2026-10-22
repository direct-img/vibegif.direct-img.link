// coral-haired girl swaying dizzy with spinning swirl eyes, a wobbly mouth and little stars orbiting her head
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#ff8787',HD='#f06565',HL='#ffe3e3',TOP='#96f2d7',TD='#38d9a9',PIN='#ffd43b',BL='#ffa8a8',ST='#ffd43b'
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
const swirl=(c,x,y,a)=>{
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x,y,15,16,0,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();for(let th=0;th<4.6*PI;th+=.2){const r=12.5*th/(4.6*PI);c.lineTo(x+r*cos(th+a),y+r*sin(th+a))}c.stroke()
}
export default(c,t)=>{
  const a=t*T,sw=.07*sin(a)
  c.save();c.translate(128,262);c.rotate(sw);c.translate(-128,-262)
  const orbit=back=>{c.fillStyle=ST;c.lineWidth=3.5;for(let k=0;k<3;k++){const b=a+k*T/3,s=sin(b);if(s<0==back)star(c,128+74*cos(b),30+14*s,11+3*s,b)}}
  orbit(true)
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,262);c.lineTo(202,262);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.lineTo(128+d*30,190),c.lineTo(128+d*32,208),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=TD;c.lineWidth=4;for(const y of[228,246])c.beginPath(),c.moveTo(66,y),c.lineTo(190,y),c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,204);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  swirl(c,103,140,-a*2);swirl(c,153,140,-a*2+PI)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,163,11,5.5,0,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(114,170);for(let k=1;k<=6;k++)c.quadraticCurveTo(114+k*4.7-2.35,170+(k%2?-5:5)*cos(a*2),114+k*4.7,170);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,150)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,194,150);c.quadraticCurveTo(186,156,180,148)
  c.quadraticCurveTo(186,116,178,102);c.lineTo(172,110);c.quadraticCurveTo(166,96,156,90);c.quadraticCurveTo(152,102,146,108)
  c.quadraticCurveTo(138,92,124,88);c.quadraticCurveTo(122,100,116,108);c.quadraticCurveTo(108,94,98,92);c.quadraticCurveTo(94,102,88,108)
  c.quadraticCurveTo(82,100,78,100);c.quadraticCurveTo(70,118,76,148);c.quadraticCurveTo(70,156,62,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
  for(const[w,s]of[[10,'#111'],[4.5,PIN]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(160,74);c.lineTo(184,92);c.moveTo(184,74);c.lineTo(160,92);c.stroke()}
  c.strokeStyle='#111'
  orbit(false)
  c.restore()
}
