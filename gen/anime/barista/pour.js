// barista girl with an espresso-brown bob pouring steamed milk from a steel pitcher into a latte, wiggling the pour, ripples and steam
// the dark back hair gets a white rim so it doesn't vanish on black
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#6b4a3a',HD='#4a3329',HL='#b0907e',EYE='#f59f00',ED='#d9480f',BL='#ffa8a8',APR='#2f9e44',APD='#2b8a3e',CNT='#c08552',CND='#8d5a33',STEEL='#ced4da',STD='#868e96',COF='#c08552',FOAM='#fff4e6',CUP='#fff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+4,y+6,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-4,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+7,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+12,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const w=sin(4*T*t),blink=t>=.55&&t<.65
  c.save();c.translate(-18,0)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(90,152);c.quadraticCurveTo(52,160,42,236);c.lineTo(178,236);c.quadraticCurveTo(168,160,130,152);c.closePath();c.fill();c.stroke()
  c.fillStyle=APR;c.lineWidth=6;c.beginPath();c.moveTo(84,176);c.lineTo(136,176);c.lineTo(146,236);c.lineTo(74,236);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(86,176);c.lineTo(94,156);c.moveTo(134,176);c.lineTo(126,156);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(110,200,11,0,T);c.fill();c.stroke()
  c.fillStyle=COF;c.beginPath();c.ellipse(110,200,4.5,7,.5,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(100,140);c.lineTo(100,158);c.quadraticCurveTo(110,166,120,158);c.lineTo(120,140);c.fill();c.beginPath();c.moveTo(100,140);c.lineTo(100,156);c.moveTo(120,140);c.lineTo(120,156);c.stroke()
  c.save();c.translate(110,100);c.scale(.72,.72);c.translate(-128,-120)
  const back=()=>{c.moveTo(128,36);c.bezierCurveTo(200,36,214,104,204,178);c.quadraticCurveTo(196,188,184,182);c.lineTo(72,182);c.quadraticCurveTo(60,188,52,178);c.bezierCurveTo(42,104,56,36,128,36)}
  c.strokeStyle='#fff';c.lineWidth=20;c.beginPath();back();c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();back();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(blink){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,138,14,.15*PI,.85*PI),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(118,169);c.quadraticCurveTo(128,176,138,168);c.stroke()
  c.fillStyle='#ff8fab';c.lineWidth=3.5;c.beginPath();c.moveTo(130,172);c.quadraticCurveTo(138,180,140,170);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
  c.bezierCurveTo(44,80,84,40,128,40);c.bezierCurveTo(172,40,212,80,194,176)
  c.quadraticCurveTo(186,182,180,174);c.quadraticCurveTo(186,130,176,104);c.quadraticCurveTo(160,96,150,86)
  c.quadraticCurveTo(140,110,104,118);c.quadraticCurveTo(116,108,118,94);c.quadraticCurveTo(100,112,78,116)
  c.quadraticCurveTo(70,150,76,174);c.quadraticCurveTo(70,182,62,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.28,1.4],[1.5,1.58],[1.66,1.76]])c.beginPath(),c.arc(128,108,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle=COF;c.lineWidth=5;c.save();c.translate(170,84);c.rotate(.6);c.beginPath();c.ellipse(0,0,11,15,0,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(0,-14);c.quadraticCurveTo(-5,0,0,14);c.stroke();c.restore()
  c.restore();c.restore()
  c.lineWidth=6;c.fillStyle=CNT;c.beginPath();c.roundRect(6,214,244,38,10);c.fill();c.stroke()
  c.fillStyle=CND;c.beginPath();c.roundRect(6,214,244,12,6);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(52,212,14,10,-.2,0,T);c.fill();c.stroke()
  c.fillStyle=CUP;c.lineWidth=6;c.beginPath();c.ellipse(200,215,40,8,0,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(228,194);c.bezierCurveTo(250,192,250,214,226,210);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(170,189);c.lineTo(174,208);c.quadraticCurveTo(200,218,226,208);c.lineTo(230,189);c.closePath();c.fill();c.stroke()
  c.fillStyle=COF;c.beginPath();c.ellipse(200,189,30,8,0,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.ellipse(200,189,30,8,0,0,T);c.clip()
  c.fillStyle=FOAM;c.beginPath();c.ellipse(198+2*w,190,18,5,0,0,T);c.fill()
  c.strokeStyle=COF;c.lineWidth=2.5;for(const o of[0,.5]){const p=(2*t+o)%1;c.beginPath();c.ellipse(198+2*w,190,6+16*p,2+4*p,0,0,T);c.stroke()}
  c.restore();c.strokeStyle='#111'
  for(const[x,o]of[[222,0],[238,.5]]){const p=(t+o)%1,s=sin(PI*p);if(s>.15)ds(c,7,3,'#fff',()=>{const y=176-34*p;c.moveTo(x,y+10);c.bezierCurveTo(x-7*s,y+4,x+7*s,y-4,x+2,y-12)})}
  const sx=194+2*w,sy=172,a=.8+.05*w,Z=.85
  c.save();c.beginPath();c.rect(0,0,256,189);c.clip()
  ds(c,13,7,FOAM,()=>{c.moveTo(sx,sy);c.quadraticCurveTo(sx+3+2*w,sy+10,198+2*w,190)})
  c.restore()
  const hx=sx+Z*(-70*cos(a)-16*sin(a)),hy=sy+Z*(-70*sin(a)+16*cos(a))
  ds(c,20,11,'#fff',()=>{c.moveTo(110,168);c.lineTo(128,196);c.lineTo(hx,hy+6)})
  c.save();c.translate(sx,sy);c.rotate(a);c.scale(Z,Z)
  c.fillStyle=STEEL;c.lineWidth=7;c.beginPath();c.moveTo(-6,-6);c.lineTo(-46,-14);c.quadraticCurveTo(-56,-8,-56,0);c.lineTo(-56,30);c.quadraticCurveTo(-56,40,-46,40);c.lineTo(-14,40);c.quadraticCurveTo(-4,40,-4,30);c.lineTo(-4,4);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-46,-2);c.lineTo(-46,30);c.stroke();c.strokeStyle=STD;c.beginPath();c.moveTo(-14,4);c.lineTo(-14,32);c.stroke();c.strokeStyle='#111'
  c.lineWidth=8;c.beginPath();c.moveTo(-56,4);c.bezierCurveTo(-78,4,-78,30,-56,30);c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,12,0,0,T);c.fill();c.stroke()
}
