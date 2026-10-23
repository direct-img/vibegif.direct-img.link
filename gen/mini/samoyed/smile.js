// samoyed grinning: a fluffy white dog with its famous smile pants, tilts its head, perks its ears, wags its plume tail and blinks
const{sin,PI,abs,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),w=sin(T*t*3),pa=sin(T*t*4),bl=t>.44&&t<.5,pk=6*max(0,sin(T*t*2))
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6;c.translate(-22,0)
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.save();c.translate(166,186);c.rotate(.3*w);shape(()=>{c.moveTo(-14,6);c.bezierCurveTo(4,-46,60,-62,68,-24);c.bezierCurveTo(72,-4,44,-2,34,-14);c.bezierCurveTo(28,0,18,14,6,22)});c.restore()
  shape(()=>c.ellipse(128,184,48,44,0,0,T))
  for(const x of[106,150])shape(()=>c.ellipse(x,222,16,10,0,0,T))
  c.translate(128,120);c.rotate(.12*s);c.translate(-128,-120)
  for(const d of[-1,1])shape(()=>{c.moveTo(128+d*18,72);c.quadraticCurveTo(128+d*38,22-pk,128+d*48,30-pk);c.quadraticCurveTo(128+d*58,50,128+d*54,82)})
  for(const i of[-2,-1,0,1,2])shape(()=>c.arc(128+i*24,132-abs(i)*8,18,0,T))
  shape(()=>c.ellipse(128,100,54,46,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*22,90,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*22,92,6,0,T),c.fill()
  c.beginPath();c.ellipse(128,106,9,6,0,0,T);c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(106,116);c.quadraticCurveTo(128,124,150,116);c.quadraticCurveTo(146,140,128,140);c.quadraticCurveTo(110,140,106,116);c.fill()
  c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.ellipse(128,140+3*pa,9,9,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(128,134+3*pa);c.lineTo(128,144+3*pa);c.stroke()
}
