// chocolate chip cookie dunking itself in a glass of milk, splashing drops each time
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const GL='#e7f5ff',CK='#e0a96d',CH='#5c3d2e',BL='#ffa8a8'
const glass=c=>{c.beginPath();c.moveTo(62,112);c.lineTo(194,112);c.lineTo(184,236);c.quadraticCurveTo(183,242,176,242);c.lineTo(80,242);c.quadraticCurveTo(73,242,72,236);c.closePath()}
export default(c,t)=>{
  const d=(1-cos(t*T))/2,cy=58+70*d,hit=d>.82,ml=150+(hit?4*sin(t*T*6):0)
  glass(c);c.fillStyle=GL;c.fill()
  c.save();c.translate(128,cy);c.rotate(.3*sin(t*T))
  c.fillStyle=CK;c.beginPath();for(let a=0;a<=T+.01;a+=.2)c.lineTo(cos(a)*(44+2*sin(a*7)),sin(a)*(44+2*sin(a*7)));c.closePath();c.fill();c.stroke()
  c.fillStyle=CH;for(const[x,y]of[[-22,-18],[18,-24],[26,10],[-28,14],[0,24],[-4,-30]])c.beginPath(),c.ellipse(x,y,6,5,x,0,T),c.fill()
  c.fillStyle='#111';for(const k of[-1,1])c.beginPath(),c.arc(k*12,-4,4.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,4,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const k of[-1,1])c.beginPath(),c.ellipse(k*22,4,5,3,0,0,T),c.fill()
  c.restore()
  c.save();glass(c);c.clip();c.fillStyle='#fff';c.beginPath();c.moveTo(50,ml);for(let x=50;x<=206;x+=6)c.lineTo(x,ml+(hit?3*sin(x/10+t*T*4):0));c.lineTo(206,250);c.lineTo(50,250);c.fill();c.lineWidth=5;c.stroke();c.restore()
  c.lineWidth=7;glass(c);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(178,126);c.lineTo(172,220);c.stroke()
  if(d>.6){const u=(d-.6)/.4;c.lineWidth=4;c.fillStyle='#fff';for(const[vx,vy]of[[-40,-60],[-20,-80],[24,-74],[44,-56]])c.beginPath(),c.arc(128+vx*u,ml-10+vy*u*(1.2-u),5,0,T),c.fill(),c.stroke()}
}
