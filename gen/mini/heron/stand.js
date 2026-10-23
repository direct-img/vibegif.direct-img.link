// heron standing on one leg: S-curved neck and long beak, it tilts its head, the plume feathers sway, it blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,invert=true
export default(c,t)=>{
  const hd=t>.25&&t<.65?.18*sin(PI*(t-.25)/.4):0,br=sin(T*t),pl=.08*sin(T*t-1),bl=t>.8&&t<.86
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  const path=(w,f)=>{c.lineWidth=w;c.beginPath();f();c.stroke();c.lineWidth=6}
  c.translate(-10,0)
  path(5,()=>{c.moveTo(118,136);c.lineTo(120,214)})
  path(4,()=>{c.moveTo(120,214);c.lineTo(140,215);c.moveTo(120,214);c.lineTo(102,215);c.moveTo(120,214);c.lineTo(128,210)})
  path(5,()=>{c.moveTo(110,136);c.lineTo(102,154);c.lineTo(112,164)})
  shape(0,br*.6,0,()=>{c.moveTo(78,122);c.lineTo(54,146);c.lineTo(84,134)})
  shape(112,116+br*.6,-.3,()=>c.ellipse(0,0,46,22,0,0,T))
  path(12,()=>{c.moveTo(142,102+br*.6);c.bezierCurveTo(170,92,136,68,160,52)})
  c.save();c.translate(160,52);c.rotate(-hd);c.translate(-160,-52)
  c.lineWidth=3;c.save();c.translate(158,44);c.rotate(pl)
  c.beginPath();c.moveTo(0,-2);c.quadraticCurveTo(-14,-10,-30,-8);c.moveTo(0,2);c.quadraticCurveTo(-12,0,-26,4);c.stroke();c.restore()
  c.lineWidth=4;c.beginPath();c.moveTo(174,40);c.lineTo(226,50);c.lineTo(174,52);c.closePath();c.fill();c.stroke();c.lineWidth=6
  shape(166,46,0,()=>c.ellipse(0,0,13,10,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(169,42,3,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(169,44,2.8,0,T),c.fill()
  c.restore()
}
