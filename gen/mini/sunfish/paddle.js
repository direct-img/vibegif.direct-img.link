// ocean sunfish: a big round flat-backed mola sculling in place, its tall top and bottom fins sweep back and forth together, bubbles rise from its little o mouth
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t*2),bl=t>.6&&t<.67
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const[i,x]of[0,14].entries()){const q=(t+i/2)%1;c.beginPath();c.arc(212+x*q+4*sin(T*q),118-80*q,6*sin(PI*q),0,T);c.fill()}
  c.translate(128,128+6*sin(T*t));c.rotate(.04*sin(T*t));c.translate(-128,-128)
  const fin=(y,d)=>{c.save();c.translate(112,y);c.rotate(d*(.32*s-.06));shape(()=>{c.moveTo(-22,8*d);c.quadraticCurveTo(-24,-36*d,-14,-56*d);c.quadraticCurveTo(-8,-64*d,-2,-56*d);c.quadraticCurveTo(10,-30*d,22,8*d)});c.restore()}
  fin(82,1);fin(174,-1)
  shape(()=>{c.moveTo(66,82);c.bezierCurveTo(110,58,190,66,200,122);c.bezierCurveTo(206,170,150,196,106,190)
    c.bezierCurveTo(90,188,74,182,66,176);for(let i=0;i<4;i++){const y=176-i*23.5;c.quadraticCurveTo(52,y-12,66,y-23.5)}})
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(174,110,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(174,112,6,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(200,134,4.5,0,T);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(160,122);c.quadraticCurveTo(166,134,160,146);c.stroke()
}
