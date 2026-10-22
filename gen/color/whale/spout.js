// smiling whale bobbing along, tail flapping, water spouting out of its blowhole
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=70
const B='#4dabf7',BE='#d0ebff',WA='#a5d8ff',BL='#faa2c1'
const body=c=>{c.beginPath();c.moveTo(36,162);c.bezierCurveTo(32,96,150,78,204,146);c.bezierCurveTo(180,198,64,218,36,162)}
export default(c,t)=>{
  const y=4*sin(t*T)
  c.lineWidth=4
  for(const d of[-1,0,1])for(let k=0;k<3;k++){
    const p=(t*2+k/3)%1,x=110+d*40*p,yy=92+y-(d?60:78)*4*p*(1-p)
    c.fillStyle=WA;c.beginPath();c.arc(x,yy,7-p*3,0,T);c.fill();c.stroke()
  }
  const h=(1+sin(2*T*t))/2
  c.fillStyle=WA;c.beginPath();c.moveTo(102,100+y);c.quadraticCurveTo(100,70+y,110,52+y-14*h);c.quadraticCurveTo(122,70+y,118,100+y);c.fill();c.stroke()
  c.lineWidth=7
  c.save();c.translate(196,150+y);c.rotate(-.55+.2*sin(2*T*t))
  c.fillStyle=B;c.beginPath();c.moveTo(-8,8);c.quadraticCurveTo(10,-20,22,-48);c.quadraticCurveTo(30,-26,52,-30);c.quadraticCurveTo(34,-6,-8,8);c.fill();c.stroke();c.restore()
  c.translate(0,y)
  body(c);c.fillStyle=B;c.fill()
  c.save();body(c);c.clip();c.fillStyle=BE;c.beginPath();c.ellipse(112,214,96,40,-.05,0,T);c.fill();c.stroke()
  c.lineWidth=3;for(const yy of[192,202])c.beginPath(),c.moveTo(56,yy),c.quadraticCurveTo(110,yy+10,170,yy-8),c.stroke();c.restore()
  body(c);c.stroke()
  c.fillStyle=B;c.beginPath();c.ellipse(112,180,22,11,.5,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(72,138,6,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(70,136,2.2,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(42,160);c.quadraticCurveTo(66,170,92,160);c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(90,148,9,5,0,0,T);c.fill()
}
