// manatee drifting: a chubby sea cow bobbing and tilting, its round tail paddle flexes, a flipper paddles, bubbles rise and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),f=sin(T*t*2),bl=t>.54&&t<.6
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const i of[0,1,2]){const q=(t+i/3)%1;shape(()=>c.arc(226+6*sin(T*q*2),100-70*q,3+4*q,0,T))}
  c.translate(128,128+8*s);c.rotate(.05*cos(T*t));c.scale(.92,.92);c.translate(-128,-128)
  const ty=120-14*sin(T*t-1.4)
  c.lineWidth=30;c.beginPath();c.moveTo(96,134);c.quadraticCurveTo(66,132,46,ty);c.stroke()
  c.lineWidth=6;shape(()=>c.ellipse(34,ty-2,20,26,.2-.15*sin(T*t-1.4),0,T))
  shape(()=>c.ellipse(124,134,74,46,0,0,T))
  shape(()=>c.arc(186,120,36,0,T))
  shape(()=>c.ellipse(214,134,20,24,-.2,0,T))
  c.save();c.translate(168,166);c.rotate(.5+.4*f);shape(()=>c.ellipse(0,18,10,22,0,0,T));c.restore()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(190,108,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(190,110,5,0,T),c.fill()
  for(const[x,y]of[[214,118],[226,124]])c.beginPath(),c.ellipse(x,y,2.5,4,.4,0,T),c.fill()
  for(const[x,y]of[[206,136],[216,140],[224,134],[212,146],[222,148]])c.beginPath(),c.arc(x,y,2,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(204,154);c.quadraticCurveTo(212,160,222,156);c.stroke()
  c.beginPath();c.arc(186,122,46,.74*PI,1.1*PI);c.stroke()
}
