// nervous orange-haired girl in pajamas standing in a dark room, sweeping her flashlight beam back and forth and lighting up a "404" on the wall
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#e8590c',HL='#ffe8cc',EYE='#4dabf7',PJ='#a5d8ff',PD='#74c0fc',DARK='#232946',DIM='#2f3866',BEAM='#fff3bf',DIG='#ff8787',FL='#ff6b6b',BL='#ffa8a8',SW='#a5d8ff',Z=.74
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.fillStyle=EYE;c.beginPath();c.arc(x+lx,y+2,7.5,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(x+lx,y+2,3.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-2.5,y-1,2,0,T);c.fill()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-8);c.quadraticCurveTo(x,y-22,x+16,y-8);c.moveTo(x+d*15,y-9);c.lineTo(x+d*21,y-14);c.stroke()
}
const four=(c,x,y)=>{c.moveTo(x+7,y-24);c.lineTo(x-15,y+6);c.lineTo(x+17,y+6);c.moveTo(x+7,y-24);c.lineTo(x+7,y+24)}
const digits=(c,col,w)=>{for(const[l,s]of[[w,'#111'],[w-12,col]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();four(c,96,64);four(c,204,64);c.moveTo(164,64);c.ellipse(150,64,14,23,0,0,T);c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const a=-1.62+.6*sin(T*t),hx=150,hy=196,lx=hx+40*cos(a),ly=hy+40*sin(a),ex=4*cos(a+.6)
  c.save();c.beginPath();c.roundRect(8,8,240,240,40);c.fillStyle=DARK;c.fill();c.clip()
  c.globalAlpha=.6;digits(c,DIM,24);c.globalAlpha=1
  c.save();c.beginPath();c.moveTo(lx,ly);c.arc(lx,ly,300,a-.34,a+.34);c.closePath();c.fillStyle=BEAM;c.fill();c.clip()
  digits(c,DIG,24);c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(150,64,9,PI*1.1,PI*1.4);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.save();c.translate(82,262);c.scale(Z,Z);c.translate(-128,-256)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,212,100,204,170);c.quadraticCurveTo(200,190,180,186);c.lineTo(76,186);c.quadraticCurveTo(56,190,52,170);c.bezierCurveTo(44,100,56,36,128,36);c.fill();c.stroke()
  c.fillStyle=PJ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(60,198,52,262);c.lineTo(204,262);c.quadraticCurveTo(196,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*30,190),c.lineTo(128+d*34,212),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=PD;c.lineWidth=5;for(const y of[226,248])c.beginPath(),c.arc(128,y,5,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=7;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,210);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1,ex);eye(c,153,142,1,ex)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,165,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(116,174);for(let k=1;k<=6;k++)c.lineTo(116+k*4,174+(k%2?-3:3));c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
  c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,194,176);c.quadraticCurveTo(184,182,180,172)
  c.quadraticCurveTo(186,126,176,104);c.quadraticCurveTo(168,106,164,116);c.quadraticCurveTo(158,98,146,92);c.quadraticCurveTo(140,106,130,110)
  c.quadraticCurveTo(124,96,114,94);c.quadraticCurveTo(108,106,100,110);c.quadraticCurveTo(94,98,86,100);c.quadraticCurveTo(80,108,78,108)
  c.quadraticCurveTo(70,130,76,172);c.quadraticCurveTo(70,182,62,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(88,122);c.lineTo(112,116);c.moveTo(144,116);c.lineTo(168,122);c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.roundRect(60,80,28,11,5);c.fill();c.stroke()
  c.fillStyle=SW;c.lineWidth=5;c.beginPath();c.moveTo(196,96);c.quadraticCurveTo(208,112,196,120);c.quadraticCurveTo(184,112,196,96);c.fill();c.stroke()
  c.restore()
  for(const[w,s]of[[24,'#111'],[14,PJ]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(108,238),c.lineTo(128,222),c.lineTo(hx,hy+4),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(hx,hy);c.rotate(a)
  c.lineWidth=5;c.fillStyle=FL;c.beginPath();c.roundRect(-14,-7,40,14,4);c.fill();c.stroke()
  c.fillStyle='#ced4da';c.beginPath();c.moveTo(24,-8);c.lineTo(40,-13);c.lineTo(40,13);c.lineTo(24,8);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff9db';c.beginPath();c.ellipse(40,0,4,13,0,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,10,11,0,0,T);c.fill();c.stroke()
  c.restore()
  c.lineWidth=7;c.beginPath();c.roundRect(8,8,240,240,40);c.stroke()
}
