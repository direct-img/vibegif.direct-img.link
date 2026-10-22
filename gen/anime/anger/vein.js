// red side-ponytail girl fuming with puffed cheeks, the anger mark pulsing on her head, steam puffing out, fists shaking
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=12,delay=70
const SKIN='#ffe3d1',HAIR='#ff6b6b',HD='#e03131',HL='#ffc9c9',EYE='#fab005',ED='#e67700',JK='#20c997',JD='#0ca678',BL='#ff8787',VN='#f03e3e'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+d*2,y+6,3.5,5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-3,y+3,2.5,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-d*20,y-26);c.lineTo(x-d*20,y-14);c.lineTo(x+d*20,y+2);c.lineTo(x+d*20,y-26);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-d*17,y-13);c.lineTo(x+d*17,y+1);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const puff=(c,x,y,r)=>{c.beginPath();for(const[a,b,s]of[[-.8,0,.7],[0,-.5,.8],[.8,0,.7],[0,.3,.75]])c.moveTo(x+a*r+s*r,y+b*r),c.arc(x+a*r,y+b*r,s*r,0,T);c.lineWidth=8;c.stroke();c.fillStyle='#fff';c.fill()}
const fist=(c,x,y,d)=>{c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.roundRect(x-17,y-15,34,30,12);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();for(const k of[-6,1,8])c.moveTo(x+k*d,y-13),c.lineTo(x+k*d,y-5);c.stroke();c.beginPath();c.ellipse(x-d*13,y+3,6,9,d*.3,0,T);c.lineWidth=4;c.fill();c.stroke()}
export default(c,t)=>{
  const pu=1+.25*abs(sin(2*T*t)),sh=3*sin(3*T*t)
  c.save();c.translate(178,62);c.rotate(-.15)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(40,-6,58,50,48,110);c.quadraticCurveTo(44,128,30,134);c.quadraticCurveTo(38,96,22,56);c.quadraticCurveTo(12,28,-6,14);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(14,12);c.bezierCurveTo(32,30,40,70,40,108);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,160);c.lineTo(58,160);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,188);c.lineTo(128,206);c.lineTo(152,188);c.lineTo(160,196);c.lineTo(128,226);c.lineTo(96,196);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle=JD;c.lineWidth=4;c.beginPath();c.moveTo(128,226);c.lineTo(128,256);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.lineTo(128,204);c.lineTo(140,190);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  for(const d of[-1,1]){const p=(t*2+(d>0?.5:0))%1;puff(c,128+d*(70+40*p),132-34*p,13*sin(PI*p))}
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*44,160,15,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fill(),c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,159),c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(119,172);c.quadraticCurveTo(128,163,137,172);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(186,118,178,104);c.lineTo(170,112);c.lineTo(160,96);c.lineTo(150,110);c.lineTo(138,92);c.lineTo(126,108)
  c.lineTo(114,92);c.lineTo(104,108);c.lineTo(94,96);c.lineTo(84,112);c.lineTo(78,104);c.quadraticCurveTo(70,124,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.beginPath();c.moveTo(84,104);c.lineTo(118,124);c.moveTo(172,104);c.lineTo(138,124);c.stroke()
  c.fillStyle=HD;c.lineWidth=5;c.beginPath();c.ellipse(172,58,8,12,.5,0,T);c.fill();c.stroke()
  c.save();c.translate(84,66);c.scale(1.3*pu,1.3*pu)
  for(const[w,s]of[[11,'#111'],[5,VN]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let k=0;k<4;k++){const a=k*PI/2+PI/4,ca=cos(a),sa=sin(a),q=(x,y)=>[x*ca-y*sa,x*sa+y*ca];const[a1,b1]=q(5,-11),[a2,b2]=q(5,-4),[a3,b3]=q(11,-4);c.moveTo(a1,b1);c.quadraticCurveTo(a2,b2,a3,b3)}c.stroke()}
  c.restore();c.strokeStyle='#111'
  for(const d of[-1,1]){const y=206+d*sh;for(const[w,s]of[[30,'#111'],[19,JK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*76,262),c.lineTo(128+d*50,y+8),c.stroke();c.strokeStyle='#111';fist(c,128+d*44,y,-d)}
}
