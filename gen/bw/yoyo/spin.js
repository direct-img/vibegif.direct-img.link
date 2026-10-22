// yo-yo drops down its string spinning, hangs there a beat, then climbs back up to the finger
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=70
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const y=114+82*(1-cos(t*T))/2,a=3*T*t
  D(c,()=>{c.moveTo(128,62);c.lineTo(128,y)},9,3)
  if(abs(sin(t*T))>.3)for(const s of[0,PI])D(c,()=>c.arc(128,y,58,a+s,a+s+.8))
  c.beginPath();c.arc(128,y,44,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(128,y,32,0,T);c.stroke()
  for(let k=0;k<3;k++){const b=a+k*T/3;c.beginPath();c.moveTo(128+cos(b)*9,y+sin(b)*9);c.quadraticCurveTo(128+cos(b+.8)*24,y+sin(b+.8)*24,128+cos(b+.4)*31,y+sin(b+.4)*31);c.stroke()}
  c.fillStyle='#111';c.beginPath();c.arc(128,y,8,0,T);c.fill()
  c.lineWidth=7;c.fillStyle='#fff'
  c.beginPath();c.roundRect(112,-30,32,98,16);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.roundRect(119,40,18,20,7);c.stroke()
  c.beginPath();for(const y of[12,19])c.moveTo(119,y),c.quadraticCurveTo(128,y+4,137,y);c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(128,58,19,6,0,0,T);c.stroke()
}
