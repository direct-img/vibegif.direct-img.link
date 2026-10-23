// arctic fox curled up asleep in its tail: it breathes slowly, twitches an ear, peeks with one eye and little z's float up
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const b=sin(T*t),tw=t>.3&&t<.36?.35:0,pk=t>.6&&t<.7
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=3.5
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const i of[0,1]){const q=(t+i/2)%1,s=sin(PI*q);c.save();c.translate(108+30*q,88-56*q);c.scale(s,s)
    c.beginPath();c.moveTo(-7,-7);c.lineTo(7,-7);c.lineTo(-7,7);c.lineTo(7,7);c.stroke();c.restore()}
  c.lineWidth=6
  c.translate(136,210);c.scale(1+.015*b,1+.03*b);c.translate(-136,-210)
  shape(()=>c.ellipse(140,158,80,52,0,0,T))
  for(const[x,y,r]of[[64,110,-.4],[94,104,.15+tw]]){c.save();c.translate(x,y);c.rotate(r)
    shape(()=>{c.moveTo(-13,8);c.quadraticCurveTo(-5,-26,0,-28);c.quadraticCurveTo(5,-26,13,8)});c.restore()}
  shape(()=>c.ellipse(82,134,34,28,.25,0,T))
  shape(()=>c.ellipse(54,150,18,12,.4,0,T))
  shape(()=>{c.moveTo(206,166);c.bezierCurveTo(216,214,120,228,62,202);c.bezierCurveTo(36,192,32,166,48,160);c.bezierCurveTo(70,172,130,190,192,158)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  c.beginPath();c.moveTo(48,156);c.bezierCurveTo(70,168,130,186,192,154);c.stroke()
  c.beginPath();c.ellipse(82,134,37,31,.25,-.7,1.2);c.stroke()
  if(pk)c.beginPath(),c.arc(70,132,5,0,T),c.fill()
  else c.beginPath(),c.arc(70,130,6,.15*PI,.85*PI),c.stroke()
  c.beginPath();c.arc(41,147,4.5,0,T);c.fill()
  c.beginPath();c.arc(172,156,30,-.8*PI,-.15*PI);c.stroke()
}
