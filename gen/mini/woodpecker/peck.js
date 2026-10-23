// woodpecker on a trunk: four quick pecks with wood chips flying off, then it leans back, looks around and blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const a=t<.5?-.13*sin(PI*8*t)**2:.04*sin(PI*(t-.5)/.5),bl=t>.76&&t<.84
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(38,0)
  shape(()=>c.roundRect(40,16,40,224,20))
  c.lineWidth=7;c.beginPath();c.moveTo(44,72);c.lineTo(22,54);c.stroke()
  c.lineWidth=6;shape(()=>{c.moveTo(22,54);c.quadraticCurveTo(10,30,22,18);c.quadraticCurveTo(34,40,22,54)})
  for(let k=0;k<4;k++)for(const j of[0,1]){
    const q=(t-(k+.5)/8)/.2
    if(q>0&&q<1){
      const x=84+(12+14*j)*q,y=84-(130-30*j)*q+70*q*q,r=6*(1-.6*q)
      c.save();c.translate(x,y);c.rotate(6*q+j);c.fillRect(-r,-r*.6,2*r,1.2*r);c.restore()
    }
  }
  c.save();c.translate(86,206);c.rotate(a);c.translate(-86,-206)
  shape(()=>{c.moveTo(88,188);c.lineTo(102,196);c.lineTo(84,234);c.closePath()})
  c.save();c.translate(106,146);c.rotate(.3);shape(()=>c.ellipse(0,0,26,54,0,0,T));c.restore()
  shape(()=>c.arc(132,84,20,0,T))
  shape(()=>{c.moveTo(134,64);c.lineTo(160,70);c.lineTo(148,88);c.closePath()})
  shape(()=>{c.moveTo(114,77);c.lineTo(114,91);c.lineTo(96,85);c.closePath()})
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(134,79,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(134,81,4.5,0,T),c.fill()
  for(const[x,y]of[[120,130],[124,148],[120,166]])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
  c.restore()
}
