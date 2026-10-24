// sporty blonde girl in a red headband grinning ear to ear and pumping a big thumbs up, a gleam pinging off her teeth
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffd43b',HD='#f59f00',HL='#fff9db',JK='#4dabf7',JD='#1c7ed6',BAND='#fa5252',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',GL='#fff9db'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const glint=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<8;k++){const rr=k%2?r*.28:r,b=k*PI/4;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const pp=t<.2?sin(PI*t/.2):0,g=t>=.3&&t<.7?sin(PI*(t-.3)/.4):0
  c.save();c.translate(-16,4)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,208,96,200,158);c.quadraticCurveTo(190,170,180,158);c.lineTo(76,158);c.quadraticCurveTo(66,170,56,158);c.bezierCurveTo(48,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,191);c.lineTo(120,252);c.lineTo(136,252);c.lineTo(154,191);c.quadraticCurveTo(128,206,102,191);c.fill();c.stroke()
  c.strokeStyle=JD;c.lineWidth=4;c.beginPath();c.moveTo(128,206);c.lineTo(128,250);c.stroke();c.strokeStyle='#111'
  c.strokeStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*58,214),c.quadraticCurveTo(128+d*66,228,128+d*70,250),c.stroke()
  c.strokeStyle='#111';c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.quadraticCurveTo(128,200,140,190);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,14,PI*1.15,PI*1.85),c.stroke()
  c.lineWidth=5;for(const[x,d]of[[103,-1],[153,1]])c.beginPath(),c.moveTo(x+d*13,139),c.lineTo(x+d*19,134),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,158,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,161),c.lineTo(128+d*44+k+2,155),c.stroke()
  c.lineWidth=4;c.fillStyle=MO;c.beginPath();c.moveTo(106,160);c.quadraticCurveTo(128,166,150,160);c.quadraticCurveTo(146,186,128,186);c.quadraticCurveTo(110,186,106,160);c.fill()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,188,11,7,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.moveTo(104,158);c.quadraticCurveTo(128,166,152,158);c.lineTo(152,170);c.quadraticCurveTo(128,176,104,170);c.fill();c.restore()
  c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(108,167);c.quadraticCurveTo(128,174,148,167);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,188,150)
  c.quadraticCurveTo(184,120,178,104);c.quadraticCurveTo(168,98,158,110);c.quadraticCurveTo(156,94,140,90)
  c.quadraticCurveTo(136,104,124,110);c.quadraticCurveTo(122,96,110,90);c.quadraticCurveTo(102,100,96,112)
  c.quadraticCurveTo(90,100,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.42,1.5],[1.6,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=BAND;c.lineWidth=5;c.beginPath();c.moveTo(70,82);c.bezierCurveTo(90,52,166,52,186,82);c.lineTo(182,96);c.bezierCurveTo(162,70,94,70,74,96);c.closePath();c.fill();c.stroke()
  for(const[a,b]of[[-.3,30],[.25,24]]){c.save();c.translate(70,90);c.rotate(a);c.beginPath();c.moveTo(0,-6);c.quadraticCurveTo(-b*.6,-8,-b,-2);c.lineTo(-b+2,8);c.quadraticCurveTo(-b*.6,4,0,6);c.closePath();c.fill();c.stroke();c.restore()}
  if(g>0){c.fillStyle=GL;c.lineWidth=3.5;glint(c,140,166,6+16*g,g*1.5)
    ds(c,8,3.5,'#fff',()=>{for(const a of[-.9,-.4,.1])c.moveTo(156+20*cos(a),156+20*sin(a)),c.lineTo(156+(26+8*g)*cos(a),156+(26+8*g)*sin(a))})}
  c.restore()
  const s=1.3+.2*pp
  ds(c,38,27,JK,()=>{c.moveTo(226,266);c.lineTo(204,226)})
  c.save();c.translate(196,200-6*pp);c.scale(s,s);c.rotate(-.1)
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.roundRect(-6,-56,22,46,11);c.fill();c.stroke()
  c.beginPath();c.roundRect(-24,-18,48,44,15);c.fill();c.stroke()
  c.lineWidth=3;for(const y of[-6,6,16])c.beginPath(),c.moveTo(-24,y),c.lineTo(4,y),c.stroke()
  c.beginPath();c.moveTo(-2,-44);c.quadraticCurveTo(4,-49,10,-44);c.stroke()
  c.restore()
  if(pp>.1)ds(c,8,3.5,'#fff',()=>{for(const a of[-2.1,-1.6,-1.1])c.moveTo(196+62*cos(a),170+62*sin(a)),c.lineTo(196+(72+8*pp)*cos(a),170+(72+8*pp)*sin(a))})
}
