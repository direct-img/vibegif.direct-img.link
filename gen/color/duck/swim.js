// rubber duck bobbing and rocking on little rolling waves
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=80
const Y='#ffd43b',YD='#fab005',O='#ff922b',WA='#74c0fc',BL='#ffa8a8'
export default(c,t)=>{
  const b=5*sin(t*T),r=.07*sin(t*T+1)
  c.save();c.translate(128,170+b);c.rotate(r);c.translate(-128,-170)
  c.fillStyle=Y
  c.beginPath();c.moveTo(186,140);c.lineTo(214,118);c.lineTo(206,156);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(136,158,72,44,0,0,T);c.fill();c.stroke()
  c.fillStyle=YD;c.beginPath();c.moveTo(122,150);c.quadraticCurveTo(162,128,190,152);c.quadraticCurveTo(160,180,122,150);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=Y;c.beginPath();c.arc(98,100,38,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(100,62);c.quadraticCurveTo(96,48,108,46);c.stroke();c.lineWidth=7
  c.fillStyle=O;c.beginPath();c.ellipse(60,110,22,11,-.1,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(42,111);c.lineTo(72,110);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(94,92,6,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(92,90,2.2,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(112,112,8,5,0,0,T);c.fill()
  c.restore()
  const wy=x=>194+7*sin(x/22-t*T)
  c.lineWidth=7;c.fillStyle=WA;c.beginPath();c.moveTo(22,244);c.quadraticCurveTo(8,244,8,230);for(let x=8;x<=248;x+=4)c.lineTo(x,wy(x));c.lineTo(248,230);c.quadraticCurveTo(248,244,234,244);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const x0 of[40,150,210])c.beginPath(),c.moveTo(x0,wy(x0)+18),c.lineTo(x0+16,wy(x0+16)+18),c.stroke()
}
