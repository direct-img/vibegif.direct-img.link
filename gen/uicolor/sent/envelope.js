// blue envelope with a heart seal flapping its little white wings as it flies off, a trail of puffs streaming out behind it
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=18,delay=70
const EN='#a5d8ff',FL='#74c0fc',HT='#ff6b6b',BL='#ffa8a8'
const wing=c=>{c.beginPath();c.moveTo(-6,8);c.quadraticCurveTo(8,-40,54,-46);c.quadraticCurveTo(60,-30,44,-27);c.quadraticCurveTo(48,-13,30,-12);c.quadraticCurveTo(30,1,12,0);c.quadraticCurveTo(8,10,-6,8);c.fill();c.stroke()}
export default(c,t)=>{
  const f=sin(3*T*t),y=126+5*f,B=(u,p,q,r,v)=>(1-u)**3*p+3*(1-u)**2*u*q+3*(1-u)*u*u*r+u**3*v
  c.fillStyle='#fff';c.lineWidth=4
  for(let k=0;k<8;k++){const u=((k+t*2)%8)/8,x=B(u,132,66,86,16),yy=B(u,y,y+10,214,226),r=10*(1-u)+2.5;c.beginPath();c.arc(x,yy,r,0,T);c.fill();c.stroke()}
  c.translate(136,y);c.rotate(-.16+.04*sin(t*T))
  c.lineWidth=6;c.fillStyle='#fff'
  for(const d of[-1,1]){c.save();c.translate(d*50,-24);c.scale(d,1);c.rotate(.45*f-.15);wing(c);c.lineWidth=4;c.beginPath();c.moveTo(8,-14);c.quadraticCurveTo(24,-28,40,-34);c.stroke();c.restore()}
  c.lineWidth=7;c.fillStyle=EN;c.beginPath();c.roundRect(-58,-40,116,80,10);c.fill();c.stroke()
  c.fillStyle=FL;c.lineWidth=5;c.beginPath();c.moveTo(-55,-37);c.lineTo(0,4);c.lineTo(55,-37);c.closePath();c.fill();c.stroke()
  c.fillStyle=HT;c.beginPath();c.moveTo(0,16);c.bezierCurveTo(-16,6,-12,-8,0,-1);c.bezierCurveTo(12,-8,16,6,0,16);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-5,2,2.5,1.6,-.6,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*30,14,5.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*30-2,12,2,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*40,25,7,4,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,22,6,.2*PI,.8*PI);c.stroke()
}
