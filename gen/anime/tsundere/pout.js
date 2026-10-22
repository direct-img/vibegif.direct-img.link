// red-haired tsundere with her arms crossed, turning her nose up with a "hmph" puff, then sneaking a blushing peek back
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#748ffc',HD='#4c6ef5',HL='#dbe4ff',EYE='#22b8cf',ED='#0b7285',BLZ='#495057',RIB='#ffd43b',BL='#ff8fab',MO='#c92a2a'
const peek=(c,x,y)=>{
  c.save();c.beginPath();c.rect(x-20,y-3,40,30);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill()
  c.beginPath();c.ellipse(x+5,y+4,10,13,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+5,y-2,11,7,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+5,5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+2,y+1,3.5,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-15,y);c.quadraticCurveTo(x,y-7,x+15,y-1);c.lineTo(x+20,y-6);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-7,y+18);c.lineTo(x+7,y+18);c.stroke()
}
const shut=(c,x,y,d)=>{c.lineWidth=5;c.beginPath();c.moveTo(x-d*14,y+1);c.quadraticCurveTo(x,y+8,x+d*14,y+1);c.lineTo(x+d*19,y-4);c.stroke()}
export default(c,t)=>{
  const pk=t>=.5&&t<.8,q=t/.4,sw=.12*sin(T*t)
  c.lineWidth=6
  c.save();c.translate(178,70);c.rotate(-.2+sw)
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(40,6,52,80,34,150);c.quadraticCurveTo(26,170,10,166);c.quadraticCurveTo(30,110,4,26);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(10,16);c.bezierCurveTo(30,40,38,90,28,140);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,156);c.lineTo(58,156);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=RIB;c.lineWidth=5;c.beginPath();c.ellipse(178,70,9,13,-.5,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=BLZ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,226);c.lineTo(152,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,208);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=RIB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*16,198),c.lineTo(128+d*16,214),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,206,5,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(186,214,11,13,-.3,0,T);c.fill();c.stroke()
  for(const[a,b]of[[[66,234],[176,216]],[[190,234],[84,218]]]){
    const[dx,dy]=[b[0]-a[0],b[1]-a[1]],n=Math.hypot(dx,dy),u=[dx/n,dy/n],e=[b[0]+u[0]*10,b[1]+u[1]*10]
    for(const[l,s]of[[34,'#111'],[23,BLZ]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...a),c.lineTo(...b),c.stroke()
    c.lineCap='butt';for(const[l,s]of[[34,'#111'],[22,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...b),c.lineTo(...e),c.stroke()
    c.lineCap='round';c.strokeStyle='#111'
  }
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(70,214,11,13,.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const k of[-4,3])c.moveTo(66,214+k),c.lineTo(76,213+k);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(pk){peek(c,92,138);peek(c,142,138)}else{shut(c,92,138,-1);shut(c,142,138,1)}
  c.lineWidth=2.5;c.beginPath();c.moveTo(114,154);c.lineTo(112,158);c.stroke()
  const b=pk?1.35:1;c.fillStyle=BL;for(const x of[84,154])c.beginPath(),c.ellipse(x,158,13*b,7*b,0,0,T),c.fill()
  c.lineWidth=2.5;for(const x of[84,154])for(const k of pk?[-9,-4,1,6,11]:[-5,0,5])c.beginPath(),c.moveTo(x+k-2,162),c.lineTo(x+k+2,154),c.stroke()
  c.lineWidth=3.5;c.beginPath()
  if(pk)c.moveTo(102,170),c.quadraticCurveTo(106,166,110,170),c.quadraticCurveTo(114,174,118,170)
  else c.moveTo(102,171),c.quadraticCurveTo(110,164,118,171)
  c.stroke()
  c.save();c.translate(-6,0);c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,190,150)
  c.quadraticCurveTo(188,118,182,102);c.lineTo(170,112);c.lineTo(164,96);c.lineTo(150,110);c.lineTo(140,92);c.lineTo(126,108)
  c.lineTo(116,90);c.lineTo(102,108);c.lineTo(94,94);c.lineTo(84,110);c.quadraticCurveTo(74,124,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=4.5;c.beginPath()
  if(pk)c.moveTo(80,116),c.lineTo(102,114),c.moveTo(132,114),c.lineTo(154,117)
  else c.moveTo(80,113),c.lineTo(102,120),c.moveTo(132,120),c.lineTo(154,113)
  c.stroke()
  if(t<.4){const s=1.4*sin(PI*q),x=96-56*q,y=168-22*q;if(s>.15){const cs=[[0,0,10],[-9,-6,8],[-8,7,7]];c.fillStyle='#fff';c.lineWidth=7;for(const[a,b,r]of cs)c.beginPath(),c.arc(x+a*s,y+b*s,r*s,0,T),c.stroke();for(const[a,b,r]of cs)c.beginPath(),c.arc(x+a*s,y+b*s,r*s,0,T),c.fill()}}
  if(pk){c.fillStyle='#a5d8ff';c.lineWidth=4;const y=96+4*sin(T*(t-.5)/.3*2);c.beginPath();c.moveTo(196,y-12);c.quadraticCurveTo(204,y,196,y+6);c.quadraticCurveTo(188,y,196,y-12);c.fill();c.stroke()}
}
