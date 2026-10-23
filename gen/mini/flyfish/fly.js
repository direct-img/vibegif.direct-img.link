// fish with bird wings flying in a gentle arc: beats its wings twice per loop, tilts into the climb and dive, tail swishes
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const w=cos(2*T*t),bl=t>.6&&t<.66
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128,136+14*sin(T*t));c.rotate(.2*cos(T*t));c.scale(1.1,1.1);c.translate(-122,-130)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  const wing=(x,y,k,s)=>{c.save();c.translate(x,y);c.scale(k,s*k)
    shape(()=>{c.moveTo(10,0);c.quadraticCurveTo(22,-50,-36,-80);c.quadraticCurveTo(-46,-60,-40,-52);c.quadraticCurveTo(-50,-40,-40,-32);c.quadraticCurveTo(-46,-20,-34,-14);c.quadraticCurveTo(-34,-4,-16,2);c.closePath()})
    c.restore()}
  wing(140,104,.75,cos(2*T*t-.5))
  c.save();c.translate(76,130);c.rotate(.25*sin(2*T*t))
  shape(()=>{c.moveTo(4,0);c.lineTo(-34,-26);c.quadraticCurveTo(-24,0,-34,26);c.closePath()});c.restore()
  shape(()=>{c.moveTo(200,128);c.bezierCurveTo(186,98,110,98,72,126);c.lineTo(72,134);c.bezierCurveTo(110,160,186,158,200,128)})
  shape(()=>{c.moveTo(146,148);c.lineTo(132,166);c.lineTo(158,150);c.closePath()})
  wing(126,106,1,w)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=3
  c.beginPath();c.arc(150,128,20,-.9,.9);c.stroke()
  c.beginPath();c.moveTo(198,132);c.lineTo(188,134);c.stroke()
  if(bl)c.beginPath(),c.arc(178,118,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(178,120,5.5,0,T),c.fill()
}
