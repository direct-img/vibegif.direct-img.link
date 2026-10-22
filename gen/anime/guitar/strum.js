// little band girl with messy mint hair rocking out on a red electric guitar, head bobbing, strumming hand flying, notes popping out
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=85
const SKIN='#ffe3d1',HAIR='#a9e34b',HD='#74b816',HL='#e9fac8',EYE='#ff922b',ED='#d9480f',BL='#ffa8a8',JK='#4c6ef5',RIB='#fa5252',SK='#868e96',GT='#e03131',PG='#fff3bf',WD='#a9744f'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const note=(c,x,y,s,col)=>{
  ds(c,8,3,col,()=>{c.moveTo(x+6*s,y);c.lineTo(x+6*s,y-22*s);c.quadraticCurveTo(x+18*s,y-16*s,x+14*s,y-6*s)})
  c.fillStyle=col;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,7*s,5*s,-.4,0,T);c.fill();c.stroke()
}
export default(c,t)=>{
  const a=t*T,nod=abs(sin(2*a)),hy=196+9*cos(4*a),tap=Math.max(0,sin(2*a))
  c.translate(128,250);c.scale(1.1,1.1);c.translate(-142,-250)
  for(const[x,o]of[[166,0],[196,.5]]){const p=(t+o)%1,s=sin(PI*p);if(s>.2)note(c,x+8*sin(p*T),150-100*p,.5+.6*s,o?'#ffd43b':'#74c0fc')}
  for(const[x,l]of[[106,0],[128,tap*5]]){ds(c,13,7,SKIN,()=>{c.moveTo(x,214);c.lineTo(x,236-l)});c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(x-5,230-l,10,8);c.fill();c.stroke();c.fillStyle=WD;c.beginPath();c.ellipse(x+2,242-l,9,5,0,0,T);c.fill();c.stroke()}
  c.lineWidth=5;c.fillStyle=SK;c.beginPath();c.moveTo(92,198);c.lineTo(84,220);c.lineTo(150,220);c.lineTo(142,198);c.closePath();c.fill();c.stroke()
  c.beginPath();for(const x of[100,117,134])c.moveTo(x,200),c.lineTo(x-2,219);c.lineWidth=3;c.stroke()
  c.lineWidth=6;c.fillStyle=JK;c.beginPath();c.moveTo(104,144);c.quadraticCurveTo(88,150,90,200);c.lineTo(144,200);c.quadraticCurveTo(146,150,130,144);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(106,144);c.lineTo(117,162);c.lineTo(128,144);c.closePath();c.fill();c.stroke()
  c.fillStyle=RIB;c.beginPath();c.moveTo(117,156);c.lineTo(109,152);c.lineTo(110,162);c.closePath();c.moveTo(117,156);c.lineTo(125,152);c.lineTo(124,162);c.closePath();c.fill();c.stroke()
  ds(c,9,4,'#495057',()=>{c.moveTo(130,146);c.lineTo(94,206)})
  ds(c,20,11,JK,()=>{c.moveTo(132,152);c.lineTo(154,170);c.lineTo(176,162)})
  c.save();c.translate(112,196);c.rotate(-.55)
  ds(c,16,9,WD,()=>{c.moveTo(14,0);c.lineTo(104,0)})
  c.fillStyle=GT;c.lineWidth=5;c.beginPath();c.moveTo(102,-8);c.lineTo(122,-11);c.lineTo(124,11);c.lineTo(102,8);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;for(const x of[108,116])for(const d of[-1,1])c.beginPath(),c.arc(x,d*11,2.5,0,T),c.fill(),c.stroke()
  const gb=()=>{c.moveTo(20,0);c.bezierCurveTo(20,-22,4,-20,-2,-14);c.bezierCurveTo(-12,-30,-44,-30,-44,0);c.bezierCurveTo(-44,30,-12,30,-2,14);c.bezierCurveTo(4,20,20,22,20,0)}
  c.fillStyle=GT;c.lineWidth=6;c.beginPath();gb();c.fill();c.stroke()
  c.fillStyle=PG;c.lineWidth=3;c.beginPath();c.moveTo(4,-12);c.quadraticCurveTo(-18,-16,-20,0);c.quadraticCurveTo(-18,14,4,12);c.closePath();c.fill();c.stroke()
  c.fillStyle='#e9ecef';for(const x of[-28,-6])c.beginPath(),c.rect(x-3,-9,6,18),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=1.5;c.beginPath();for(const y of[-4.5,-1.5,1.5,4.5])c.moveTo(-34,y),c.lineTo(104,y);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(176,160,9,10,0,0,T);c.fill();c.stroke()
  ds(c,20,11,JK,()=>{c.moveTo(102,152);c.lineTo(84,180);c.lineTo(98,hy)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(100,hy,9,10,0,0,T);c.fill();c.stroke()
  for(const d of[-1,1])ds(c,6,2.5,'#fff',()=>{c.moveTo(78,hy+d*6);c.lineTo(70,hy+d*9)})
  c.save();c.translate(116,140);c.rotate(.08*nod-.04);c.translate(0,2*nod);c.scale(.62,.62);c.translate(-128,-180)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,210,92,200,140);c.lineTo(208,160);c.lineTo(188,154);c.lineTo(190,172);c.lineTo(66,172);c.lineTo(68,154);c.lineTo(48,160);c.lineTo(56,140);c.bezierCurveTo(46,92,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,186,144,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(134,166);c.lineTo(140,166);c.lineTo(137,172);c.closePath();c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,154)
  c.bezierCurveTo(48,74,88,34,128,34);c.bezierCurveTo(170,34,210,74,190,154)
  c.lineTo(184,124);c.lineTo(176,128);c.lineTo(170,104);c.lineTo(158,114);c.lineTo(150,92);c.lineTo(138,110)
  c.lineTo(128,90);c.lineTo(118,112);c.lineTo(104,94);c.lineTo(98,114);c.lineTo(84,104);c.lineTo(80,128);c.lineTo(72,124);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.rect(162,70,22,9);c.fill();c.stroke()
  c.restore()
}
