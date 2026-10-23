// hummingbird hovering: the wing flicks through four blur poses every frame, long beak, a gentle bob and tilt, a blink
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3
const W=[-.1,-.75,-1.4,-.75]
export default(c,t,i)=>{
  const s=sin(T*t),bl=t>.7&&t<.78
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(122,130+8*s);c.rotate(.06*cos(T*t));c.scale(1.25,1.25);c.translate(-128,-124)
  shape(94,154,.15*sin(T*t*2),()=>{c.moveTo(4,-8);c.lineTo(-26,14);c.lineTo(-14,16);c.lineTo(-20,30);c.lineTo(8,8)})
  shape(122,132,-.6,()=>c.ellipse(0,0,36,19,0,0,T))
  shape(150,104,0,()=>c.arc(0,0,18,0,T))
  c.lineWidth=4;c.beginPath();c.moveTo(164,101);c.lineTo(210,92);c.stroke()
  c.lineWidth=6;shape(124,116,W[i%4],()=>c.ellipse(0,-32,10,32,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(155,99,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(155,101,4.5,0,T),c.fill()
}
