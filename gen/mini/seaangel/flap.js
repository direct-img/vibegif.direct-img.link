// sea angel swimming: a little clione flaps its wing-feet and bobs on every beat, a tiny heart glowing in its belly
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const w=sin(T*t*2),bl=t>.7&&t<.76
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const[i,x]of[-64,60].entries()){const q=(t+i/2)%1;c.beginPath();c.arc(128+x+4*sin(T*q),214-150*q,5*sin(PI*q),0,T);c.fill()}
  c.translate(0,-7*sin(T*t*2+.9))
  for(const d of[-1,1]){c.save();c.translate(128+d*16,108);c.scale(d,1);c.rotate(.5*w)
    shape(()=>{c.moveTo(0,-6);c.bezierCurveTo(24,-38,62,-42,68,-22);c.bezierCurveTo(72,-4,40,12,0,10)});c.restore()}
  shape(()=>{c.moveTo(104,92);c.bezierCurveTo(96,140,112,192,128,222);c.bezierCurveTo(144,192,160,140,152,92)})
  for(const d of[-1,1])shape(()=>c.arc(128+d*15,58,8,0,T))
  shape(()=>c.arc(128,82,28,0,T))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  c.beginPath();c.moveTo(128,166);c.bezierCurveTo(106,150,114,132,128,143);c.bezierCurveTo(142,132,150,150,128,166);c.stroke()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*11,80,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*11,82,5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(128,92,5,.2*PI,.8*PI);c.stroke()
}
