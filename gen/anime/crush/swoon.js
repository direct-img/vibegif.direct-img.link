// lovestruck girl with teal braids swooning: heart eyes pulsing, hands clasped at her cheek, swaying while hearts float up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#38d9a9',HD='#0ca678',HL='#c3fae8',HE='#f03e3e',TOP='#fcc2d7',BL='#ff8fab',RB='#ffd43b',MO='#c92a2a',TG='#ff8fab',HT=['#ff8fab','#f06595','#ffa8a8']
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
const braid=(c,x,d)=>{
  c.lineWidth=5;c.fillStyle=HAIR
  for(let k=5;k>=0;k--)c.beginPath(),c.ellipse(x+d*k*1.5,150+k*15,13-k*.6,10,(k%2?.5:-.5),0,T),c.fill(),c.stroke()
  c.fillStyle=RB;c.lineWidth=4;c.beginPath();c.ellipse(x+d*9,232,9,5,0,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(x+d*9-6,236);c.lineTo(x+d*9,250);c.lineTo(x+d*9+6,236);c.fill();c.stroke()
}
export default(c,t)=>{
  const a=.1+.07*sin(T*t),pu=1+.2*max(0,sin(4*PI*t))
  c.strokeStyle='#111';c.lineWidth=4
  for(const[x0,o,k]of[[30,0,0],[226,.25,1],[48,.5,2],[212,.75,0]]){const p=(t+o)%1,s=1.3*sin(PI*p);if(s>.15)c.fillStyle=HT[k],heart(c,x0+8*sin(T*(p*2+o)),236-p*210,s)}
  c.lineWidth=6;c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(106,190);c.lineTo(128,214);c.lineTo(150,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.save();c.translate(128,186);c.rotate(a);c.translate(-128,-186)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  braid(c,70,-1);braid(c,186,1)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=4;c.fillStyle=HE;for(const x of[103,153])heart(c,x,142,1.75*pu)
  c.fillStyle='#fff';for(const x of[103,153])c.beginPath(),c.ellipse(x-7*pu,134,3.5*pu,2.5*pu,-.6,0,T),c.fill()
  c.lineWidth=5;for(const[x,d]of[[103,-1],[153,1]])c.beginPath(),c.moveTo(x+d*18,128),c.lineTo(x+d*24,123),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,-1,4])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(119,166);c.quadraticCurveTo(128,180,137,166);c.quadraticCurveTo(128,170,119,166);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(184,114,176,102);c.quadraticCurveTo(166,100,160,110);c.quadraticCurveTo(152,96,138,92)
  c.quadraticCurveTo(130,104,118,108);c.quadraticCurveTo(116,96,104,90);c.quadraticCurveTo(96,104,86,108)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a2,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a2,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=4;c.beginPath();c.moveTo(82,70);c.lineTo(100,58);c.lineTo(94,78);c.closePath();c.fill();c.stroke()
  c.restore()
  for(const[x,y,e]of[[92,254,140],[196,254,166]])for(const[l,s]of[[30,'#111'],[19,TOP]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(e,214),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';for(const x of[140,166])c.beginPath(),c.ellipse(x,214,9,7,0,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.ellipse(160,198,13,16,.3,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(146,198,13,16,-.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const y of[192,199,206])c.moveTo(150,y),c.lineTo(158,y-2);c.stroke()
}
