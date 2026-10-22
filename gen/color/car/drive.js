// little car driving along, bouncing on its springs, wheels spinning, road dashes and exhaust puffs rolling past
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=60
const BODY='#ff6b6b',WIN='#a5d8ff',TIRE='#343a40',HUB='#ced4da',LIGHT='#ffd43b',SMK='#dee2e6',BL='#ffa8a8'
export default(c,t)=>{
  const b=-3*abs(sin(2*T*t)),rot=-t*T/2
  c.fillStyle='#868e96';c.beginPath();c.roundRect(4,214,248,22,11);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(10,214,236,22);c.clip()
  for(let k=-1;k<5;k++){const x=k*64-((t*128)%64)+20;c.fillStyle='#fff';c.beginPath();c.roundRect(x,222,30,6,3);c.fill()}
  c.restore()
  for(let k=0;k<3;k++){const p=(t+k/3)%1;c.fillStyle=SMK;c.lineWidth=5;c.beginPath();c.arc(40-p*36,176-p*30,6+p*12,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  c.translate(0,b)
  c.fillStyle=BODY;c.beginPath();c.moveTo(48,190);c.lineTo(48,150);c.quadraticCurveTo(50,132,72,128);c.lineTo(94,96);c.quadraticCurveTo(100,86,114,86);c.lineTo(164,86);c.quadraticCurveTo(178,86,186,98);c.lineTo(204,128);c.quadraticCurveTo(222,132,224,150);c.lineTo(224,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=WIN;c.beginPath();c.moveTo(102,124);c.lineTo(116,100);c.lineTo(132,100);c.lineTo(132,124);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.beginPath();c.moveTo(144,124);c.lineTo(144,100);c.lineTo(166,100);c.lineTo(184,124);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(118,110,4,8,.4,0,T);c.fill()
  c.fillStyle=LIGHT;c.beginPath();c.roundRect(212,144,14,14,4);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(138,134);c.lineTo(138,180);c.stroke();c.beginPath();c.moveTo(150,148);c.lineTo(162,148);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(198,170,4,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(206,172,6,.2*PI,.8*PI);c.stroke()
  c.translate(0,-b)
  for(const x of[88,184]){
    c.lineWidth=7;c.fillStyle=TIRE;c.beginPath();c.arc(x,196,24,0,T);c.fill();c.stroke()
    c.fillStyle=HUB;c.beginPath();c.arc(x,196,11,0,T);c.fill();c.lineWidth=4;c.stroke()
    for(let k=0;k<4;k++){const a=rot+k*PI/2;c.beginPath();c.moveTo(x+cos(a)*4,196+sin(a)*4);c.lineTo(x+cos(a)*10,196+sin(a)*10);c.stroke()}
  }
}
