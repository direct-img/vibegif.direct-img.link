// sleepy lavender bedhead girl in pajamas dozing off while she waits, head nodding, a nose bubble swelling and shrinking, a loading spinner turning above her head
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#b197fc',HD='#7950f2',HL='#e5dbff',PJ='#96f2d7',PD='#20c997',MASK='#f783ac',BL='#ffa8a8',BUB='#d0ebff',SP=['#7950f2','#845ef7','#9775fa','#b197fc','#d0bfff','#e5dbff','#f3f0ff','#fff'],Z=.8
export default(c,t,i)=>{
  const nod=.07+.05*Math.round(2*sin(T*t))/2,r=5+12*(1-cos(T*t))/2
  for(let k=0;k<8;k++){const a=(i-k)*T/8;c.fillStyle=SP[k];c.lineWidth=4.5;c.beginPath();c.arc(128+24*sin(a),34-24*cos(a),8.5-k*.6,0,T);c.fill();c.stroke()}
  c.save();c.translate(128,252);c.scale(Z,Z);c.translate(-128,-252)
  const head=f=>{c.save();c.translate(128,186);c.rotate(nod);c.translate(0,8*nod);c.translate(-128,-186);f();c.restore()}
  head(()=>{c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(200,40,212,100,204,160);c.quadraticCurveTo(212,182,196,190);c.lineTo(60,190);c.quadraticCurveTo(44,182,52,160);c.bezierCurveTo(44,100,56,40,128,40);c.fill();c.stroke()})
  c.lineWidth=7;c.fillStyle=PJ;c.beginPath();c.moveTo(100,194);c.quadraticCurveTo(60,202,52,252);c.lineTo(204,252);c.quadraticCurveTo(196,202,156,194);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,170);c.lineTo(116,198);c.lineTo(128,212);c.lineTo(140,198);c.lineTo(140,170);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(116,170);c.lineTo(116,196);c.moveTo(140,170);c.lineTo(140,196);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128,214),c.lineTo(128+d*30,194),c.lineTo(128+d*36,214),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=PD;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*8,216),c.lineTo(128+d*28,197),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#ffd43b';c.lineWidth=5;for(const y of[228,246])c.beginPath(),c.arc(128,y,5,0,T),c.fill(),c.stroke()
  head(()=>{
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=6;for(const x of[103,153]){c.beginPath();c.arc(x,138,13,PI*.15,PI*.85);c.stroke();c.beginPath();c.moveTo(x+(x<128?-12:12),142);c.lineTo(x+(x<128?-18:18),139);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,13,6.5,0,0,T),c.fill()
    c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(132,174,5,4.5,0,0,T);c.fill();c.stroke()
    c.fillStyle=BUB;c.lineWidth=4;c.beginPath();c.arc(124-r*.85,157+r*.45,r,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(124-r*.85,157+r*.45,r*.6,PI*1.15,PI*1.5);c.stroke();c.strokeStyle='#111'
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,160)
    c.bezierCurveTo(46,76,88,38,128,38);c.bezierCurveTo(168,38,210,76,192,160)
    c.lineTo(182,150);c.quadraticCurveTo(186,124,178,106);c.lineTo(168,116);c.lineTo(162,96);c.lineTo(150,112);c.lineTo(140,90);c.lineTo(130,110)
    c.lineTo(118,92);c.lineTo(108,112);c.lineTo(96,96);c.lineTo(88,114);c.lineTo(80,106);c.quadraticCurveTo(70,130,74,150);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(122,40);c.bezierCurveTo(112,12,82,14,74,34);c.quadraticCurveTo(100,22,134,40);c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,106,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=5;c.save();c.translate(176,84);c.rotate(.3);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?6:14,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.fill();c.stroke();c.restore()
  })
  c.restore()
}
