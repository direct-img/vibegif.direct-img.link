// giant anteater: the thin tongue flicks out of its long snout three times, the huge bushy tail sways, it blinks
const{sin,PI,max}=Math,T=2*PI
export const frames=24,delay=75,rim=3
export default(c,t)=>{
  const L=36*max(0,sin(3*T*t)),nod=.04*sin(3*T*t),sw=.08*sin(T*t),bl=t>.9&&t<.96
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(128,170);c.scale(.88,.88);c.translate(-122,-170)
  shape(78,122,sw,()=>{c.moveTo(6,-16);c.bezierCurveTo(-16,-42,-54,-48,-72,-26);c.quadraticCurveTo(-76,-6,-60,4);c.quadraticCurveTo(-54,16,-40,14);c.quadraticCurveTo(-30,24,-18,16);c.quadraticCurveTo(-6,20,6,14)})
  c.lineWidth=14
  for(const[x0,x1]of[[82,80],[98,100],[136,132],[152,156]])c.beginPath(),c.moveTo(x0,140),c.lineTo(x1,204),c.stroke()
  c.lineWidth=6
  for(const x of[80,100,132,156])shape(x+4,206,0,()=>c.ellipse(0,0,10,4,0,0,T))
  shape(112,128,0,()=>c.ellipse(0,0,52,30,0,0,T))
  shape(138,118,0,()=>c.ellipse(0,0,34,28,0,0,T))
  c.save();c.translate(160,114);c.rotate(nod);c.translate(-160,-114)
  if(L>1)c.lineWidth=2.5,c.beginPath(),c.moveTo(224,144),c.quadraticCurveTo(226+L*.4,148+L*.5+3*sin(T*t*9),226+L*.6,146+L*.9),c.stroke(),c.lineWidth=6
  shape(162,104,0,()=>c.ellipse(0,0,6,5,0,0,T))
  shape(170,118,0,()=>{c.ellipse(0,0,16,14,0,0,T);c.moveTo(4,-12);c.quadraticCurveTo(30,-4,58,22);c.quadraticCurveTo(52,28,44,24);c.quadraticCurveTo(26,16,0,12)})
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(176,112,3,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(176,114,2.8,0,T),c.fill()
  c.restore();c.strokeStyle='#fff';c.lineWidth=4
  c.beginPath();c.moveTo(152,104);c.quadraticCurveTo(140,124,118,138);c.stroke()
}
