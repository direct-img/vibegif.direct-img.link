// polar bear sniffing the air: it lifts its long snout, nose twitching, little sniff puffs pop out, then lowers its head and blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const h=.5-.5*cos(T*t),sn=h>.6?sin(T*t*8):0,bl=t>.9&&t<.96
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const x of[106,130,180,204])shape(()=>c.roundRect(x-12,160,24,54,11))
  shape(()=>c.ellipse(162,148,66,46,0,0,T))
  shape(()=>c.arc(228,138,8,0,T))
  c.save();c.translate(114,126);c.rotate(.45*h)
  shape(()=>c.ellipse(-12,0,30,26,0,0,T))
  shape(()=>c.arc(-30,-28,8.5,0,T))
  shape(()=>c.ellipse(-44,-7,30,21,.08,0,T))
  shape(()=>c.ellipse(-70,1,20,13,.12,0,T))
  c.fillStyle=c.strokeStyle='#111'
  c.beginPath();c.ellipse(-85,-1+1.5*sn,6,5,0,0,T);c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(-54,-14,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(-54,-12,4.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(-84,9);c.quadraticCurveTo(-78,13,-70,10);c.stroke()
  if(sn>0){c.strokeStyle='#fff';c.lineWidth=3.5
    for(const r of[16,26])c.beginPath(),c.arc(-88,-1,r,PI-.45*sn,PI+.45*sn),c.stroke()}
  c.restore()
}
