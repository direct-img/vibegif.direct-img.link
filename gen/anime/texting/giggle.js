// baby-blue haired girl lying on her tummy on a bed, giggling at her phone and kicking her feet while hearts pop out of the screen
const{sin,cos,PI,abs,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#a5d8ff',HD='#4dabf7',HL='#e7f5ff',PJ='#ffd43b',PD='#fab005',BED='#eebefa',BD='#cc5de8',PH='#f783ac',SCR='#e3fafc',SOCK='#b197fc',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',HT='#ff6b9d'
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
// one leg: thigh along the bed from the hip, calf swinging up from the knee
const leg=(c,a,dx)=>{
  const kx=212+dx,ky=206,fx=kx+cos(a)*50,fy=ky-sin(a)*50
  for(const[l,s]of[[22,'#111'],[13,PJ]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(176,200),c.lineTo(kx,ky),c.stroke()
  for(const[l,s]of[[19,'#111'],[10,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(kx,ky),c.lineTo(fx,fy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SOCK;c.beginPath();c.ellipse(fx,fy,8,12,-a+PI/2,0,T);c.fill();c.stroke()
}
export default(c,t)=>{
  const g=abs(sin(2*T*t)),Z=.68
  c.lineWidth=6
  // bed
  c.fillStyle=BED;c.beginPath();c.roundRect(10,204,236,32,14);c.fill();c.stroke()
  c.strokeStyle=BD;c.lineWidth=4;c.beginPath();c.moveTo(24,222);c.lineTo(232,222);c.stroke();c.strokeStyle='#111'
  leg(c,1.25+.5*sin(2*T*t+PI),10)
  // body lying along the bed
  c.lineWidth=6;c.fillStyle=PJ;c.beginPath();c.moveTo(96,170);c.quadraticCurveTo(150,166,184,182);c.quadraticCurveTo(196,198,180,208);c.lineTo(100,208);c.quadraticCurveTo(84,192,96,170);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;for(const[x,y]of[[124,184],[150,190],[170,196],[134,200]])c.beginPath(),c.arc(x,y,4.5,0,T),c.fill()
  leg(c,1.25+.5*sin(2*T*t),0)
  // arm propped on its elbow, hand holding the phone up
  for(const[l,s]of[[22,'#111'],[13,PJ]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(108,184),c.lineTo(80,202),c.lineTo(58,166),c.stroke()
  c.strokeStyle='#111'
  // head, bobbing with each giggle
  c.save();c.translate(112,110+3*g);c.rotate(.08);c.scale(Z,Z);c.translate(-128,-128)
  c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,210,110,198,176);c.quadraticCurveTo(188,198,170,190);c.lineTo(86,190);c.quadraticCurveTo(68,198,58,176);c.bezierCurveTo(46,110,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,13,PI*1.15,PI*1.85),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,16,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,168),c.lineTo(128+d*44+k+2,160),c.stroke()
  c.lineWidth=5;c.fillStyle=MO;c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,166,142,166);c.quadraticCurveTo(140,180+6*g,128,182+6*g);c.quadraticCurveTo(116,180+6*g,114,166);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,184+6*g,8,6,0,0,T);c.fill();c.restore()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,156)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,156)
  c.quadraticCurveTo(188,120,182,106);c.quadraticCurveTo(172,100,166,112);c.quadraticCurveTo(160,96,146,92);c.quadraticCurveTo(142,108,132,112)
  c.quadraticCurveTo(126,96,112,94);c.quadraticCurveTo(108,108,98,112);c.quadraticCurveTo(92,98,82,102);c.quadraticCurveTo(78,112,78,112)
  c.quadraticCurveTo(68,130,64,156);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,102,56,PI*a,PI*e),c.stroke()
  c.restore()
  c.strokeStyle='#111'
  // phone in her hand, screen turned toward her
  c.save();c.translate(46,146);c.rotate(-.3)
  c.lineWidth=5;c.fillStyle=PH;c.beginPath();c.roundRect(-15,-30,30,52,7);c.fill();c.stroke()
  c.fillStyle=SCR;c.beginPath();c.roundRect(-10,-24,20,38,3);c.fill();c.lineWidth=3;c.stroke()
  c.fillStyle=HT;c.lineWidth=2;heart(c,0,-6,.75)
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(58,166,10,11,0,0,T);c.fill();c.stroke()
  // hearts popping out of the screen and floating up
  c.fillStyle=HT;c.lineWidth=3.5
  for(const o of[0,.33,.66]){const p=(t+o)%1,x=34+14*p+8*sin(T*p*2),y=108-84*p;if(p>.04)heart(c,x,y,.4+.8*min(1,p*3)*(1-p*.4))}
  // giggle ticks beside her head
  for(const[l,s]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;for(const k of[-1,0,1])c.beginPath(),c.moveTo(176+4*g,72+k*14),c.lineTo(190+4*g,68+k*18),c.stroke()}
  c.strokeStyle='#111'
}
