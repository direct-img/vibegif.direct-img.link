// cricket: lifts its wings and buzzes them together to chirp, little music notes float off, antennae sway and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
const note=(c,x,y,z)=>{c.save();c.translate(x,y);c.scale(z,z);c.beginPath();c.ellipse(0,0,8,6,-.4,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(7,-2);c.lineTo(7,-28);c.quadraticCurveTo(14,-20,20,-18);c.stroke();c.restore()}
export default(c,t)=>{
  const w=.42+.1*sin(T*t*8),bl=t>.7&&t<.77,a=.06*sin(T*t)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=4
  for(const[i,x]of[0,1,2].entries()){const q=(t+i/3)%1;note(c,96-30*q+6*sin(T*q),104-74*q,sin(PI*q))}
  c.lineWidth=3
  for(const[k,[x,y]]of[[224,42],[236,68]].entries())c.beginPath(),c.moveTo(184,112),c.bezierCurveTo(184,70,x-34,y-24+4*sin(T*t+k),x+4*sin(T*t+k),y+4*cos(T*t+k)),c.stroke()
  c.lineWidth=5
  for(const[x0,x1]of[[164,176],[140,138],[120,104]])c.beginPath(),c.moveTo(x0,160),c.lineTo(x1,186),c.lineTo(x1+(x1>130?8:-6),206),c.stroke()
  c.lineWidth=6
  c.save();c.translate(150,130);c.rotate(-w)
  shape(()=>{c.moveTo(0,0);c.quadraticCurveTo(-50,-14,-96,-4);c.quadraticCurveTo(-50,12,0,10)});c.restore()
  shape(()=>c.ellipse(110,150,52,22,.05,0,T))
  shape(()=>c.arc(180,134,26,0,T))
  c.save();c.translate(150,130);c.rotate(-w*.6)
  shape(()=>{c.moveTo(0,0);c.quadraticCurveTo(-50,-14,-96,-4);c.quadraticCurveTo(-50,12,0,10)})
  c.strokeStyle='#111';c.lineWidth=2.5;c.beginPath();c.moveTo(-8,4);c.quadraticCurveTo(-50,0,-86,-2);c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.moveTo(70,136);c.lineTo(58,204);c.lineTo(44,206);c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#fff'
  c.save();c.translate(96,154);c.rotate(-.55);c.beginPath();c.ellipse(0,0,36,13,0,0,T);c.fill();c.stroke();c.restore()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(186,126,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(186,128,6.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(196,142,6,.2*PI,.8*PI);c.stroke()
}
