// periwinkle haired girl in round glasses staring blankly at her laptop, a buffering ring spinning in both lenses while three dots pile up above her
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=12,delay=85
const SKIN='#ffe3d1',HAIR='#748ffc',HD='#4c6ef5',HL='#dbe4ff',SWT='#ffd8a8',SWD='#ffa94d',LAP='#ced4da',LD='#868e96',LENS='#e7f5ff',RING='#4dabf7',BL='#ffc9c9'
export default(c,t,i)=>{
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,100,206,160);c.quadraticCurveTo(212,190,196,200);c.lineTo(60,200);c.quadraticCurveTo(44,190,50,160);c.bezierCurveTo(42,100,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=SWT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,186);c.lineTo(140,186);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,186);c.moveTo(140,168);c.lineTo(140,186);c.stroke()
  c.fillStyle=SWT;c.beginPath();c.roundRect(106,182,44,20,9);c.fill();c.stroke()
  c.strokeStyle=SWD;c.lineWidth=3;for(const x of[116,128,140])c.beginPath(),c.moveTo(x,187),c.lineTo(x,197),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,10,5,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.roundRect(122,168,12,6,2);c.fill();c.stroke()
  // glasses: opaque glare with the buffering ring reflected in each lens
  const a=T*t
  for(const x of[103,153]){
    c.fillStyle=LENS;c.beginPath();c.arc(x,140,21,0,T);c.fill()
    c.strokeStyle='#d0ebff';c.lineWidth=6;c.beginPath();c.arc(x,140,11,0,T);c.stroke()
    c.strokeStyle=RING;c.beginPath();c.arc(x,140,11,a,a+PI*1.1);c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(x,140,17,PI*1.1,PI*1.4);c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,140,21,0,T),c.stroke()
  c.beginPath();c.moveTo(124,138);c.quadraticCurveTo(128,134,132,138);c.moveTo(82,136);c.lineTo(74,132);c.moveTo(174,136);c.lineTo(182,132);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,170);c.quadraticCurveTo(184,160,180,170)
  c.quadraticCurveTo(184,124,178,104);c.quadraticCurveTo(170,108,166,114);c.quadraticCurveTo(162,100,152,90);c.quadraticCurveTo(146,104,140,112)
  c.quadraticCurveTo(134,98,126,90);c.quadraticCurveTo(120,104,112,110);c.quadraticCurveTo(108,98,98,92);c.quadraticCurveTo(92,106,86,112)
  c.quadraticCurveTo(82,106,78,104);c.quadraticCurveTo(72,130,76,170);c.quadraticCurveTo(72,160,66,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=HAIR;c.lineWidth=5;c.save();c.translate(128,38);c.rotate(1.1*(i<9?i/8:(11-i)/3));c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(-12,-22,10,-32,22,-22);c.bezierCurveTo(10,-24,2,-16,6,0);c.closePath();c.fill();c.stroke();c.restore()
  // laptop lid seen from behind
  c.lineWidth=6;c.fillStyle=LAP;c.beginPath();c.moveTo(62,196);c.lineTo(194,196);c.quadraticCurveTo(204,196,206,206);c.lineTo(214,262);c.lineTo(42,262);c.lineTo(50,206);c.quadraticCurveTo(52,196,62,196);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(62,206);c.lineTo(194,206);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(128,240);c.bezierCurveTo(112,230,114,216,128,222);c.bezierCurveTo(142,216,144,230,128,240);c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.beginPath();for(let k=0;k<10;k++){const r=k%2?5.5:12,b=k*PI/5-PI/2-.3;c.lineTo(76+cos(b)*r,234+sin(b)*r)}c.closePath();c.fill();c.stroke()
  // dots piling up
  c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<min(3,i/3|0);k++)c.beginPath(),c.arc(184+k*24,36,8.5,0,T),c.fill(),c.stroke()
}
