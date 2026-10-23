// seagull standing tall: it throws its head back and squawks with its beak wide open, sound lines pop out, then it blinks
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=t>.2&&t<.8?sin(PI*(t-.2)/.6):0,o=min(1,q*1.8),bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,128);c.scale(.9,.9);c.translate(-140,-122)
  for(const x of[112,136])c.beginPath(),c.moveTo(x,186),c.lineTo(x-2,226),c.stroke(),shape(()=>{c.moveTo(x-17,231);c.lineTo(x+10,231);c.lineTo(x-2,223);c.closePath()})
  c.translate(0,-4*q)
  shape(()=>{c.moveTo(150,96);c.bezierCurveTo(186,104,194,162,166,184);c.bezierCurveTo(146,200,102,200,82,186)
    c.lineTo(40,160);c.lineTo(42,148);c.bezierCurveTo(74,138,110,104,150,96)})
  shape(()=>{c.moveTo(90,168);c.lineTo(18,152);c.lineTo(80,146);c.closePath()})
  c.save();c.translate(160,100);c.rotate(-.42*q)
  shape(()=>c.arc(12,-30,27,0,T))
  c.save();c.translate(34,-30);c.rotate(-.1*o)
  shape(()=>{c.moveTo(-2,-6);c.quadraticCurveTo(24,-6,40,0);c.quadraticCurveTo(47,3,42,10);c.quadraticCurveTo(38,5,30,6);c.lineTo(0,6)})
  c.restore()
  c.save();c.translate(34,-24);c.rotate(.6*o)
  shape(()=>{c.moveTo(0,0);c.lineTo(36,1);c.quadraticCurveTo(32,6,24,7);c.lineTo(0,6)})
  c.fillStyle='#111';c.beginPath();c.arc(26,3,3,0,T);c.fill()
  c.restore()
  c.lineWidth=4;if(o>.3)for(const a of[-.8,-.3,.2])c.beginPath(),c.moveTo(90+10*cos(a),-26+10*sin(a)),c.lineTo(90+(10+13*o)*cos(a),-26+(10+13*o)*sin(a)),c.stroke()
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  if(o>.3)c.beginPath(),c.moveTo(10,-42),c.lineTo(21,-36),c.lineTo(10,-31),c.stroke()
  else if(bl)c.beginPath(),c.arc(16,-36,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(16,-35,5,0,T),c.fill()
  c.beginPath();c.moveTo(4,-48);c.lineTo(26,-41);c.stroke()
  c.restore()
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  c.beginPath();c.moveTo(158,118);c.quadraticCurveTo(142,174,90,168);c.stroke()
  c.beginPath();c.moveTo(66,149);c.lineTo(18,152);c.lineTo(72,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const x of[34,50])c.beginPath(),c.arc(x,153+(x-34)*.12,2.8,0,T),c.fill()
}
