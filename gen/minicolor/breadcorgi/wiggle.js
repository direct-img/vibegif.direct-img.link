// bread-loaf corgi standing and wiggling its butt: nub tail wagging, back feet stepping, scored crust on its back
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
const B='#c9a27e',L='#ead7c3',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const bl=t>.3&&t<.36
  c.translate(-12,4)
  for(const x of[158,180])fill(B,()=>c.roundRect(x,180,14,26,6))
  c.save();c.translate(186,196);c.rotate(.085*sin(T*t*2));c.translate(-186,-196)
  for(const[x,d]of[[66,0],[90,PI]])fill(B,()=>c.roundRect(x,180-5*max(0,sin(T*t*2+d)),14,26,6))
  c.save();c.translate(54,124);c.rotate(.6*sin(T*t*4));fill(B,()=>c.ellipse(-8,-4,13,9,-.5,0,T));c.restore()
  fill(B,()=>{c.moveTo(60,194);c.lineTo(58,148);c.quadraticCurveTo(46,146,48,130);c.bezierCurveTo(52,96,96,92,126,92)
    c.bezierCurveTo(156,92,198,96,202,130);c.quadraticCurveTo(204,146,192,148);c.lineTo(190,194);c.closePath()})
  c.strokeStyle=L;c.lineWidth=8;c.lineCap='round'
  for(const x of[82,114,146])c.beginPath(),c.moveTo(x,110),c.lineTo(x+16,124),c.stroke()
  c.restore()
  c.translate(210,150);c.rotate(.04*sin(T*t*2+1));c.translate(-210,-150)
  fill(L,()=>c.ellipse(194,164,14,22,.2,0,T))
  for(const[x,r]of[[194,-.28],[228,.32]]){
    c.save();c.translate(x,94);c.rotate(r);fill(B,()=>{c.moveTo(-15,8);c.lineTo(-3,-34);c.lineTo(15,6)})
    fill(L,()=>{c.moveTo(-5,4);c.lineTo(-1,-14);c.lineTo(5,3)});c.restore()
  }
  fill(B,()=>c.arc(211,122,34,0,T))
  fill(L,()=>c.ellipse(229,136,18,13,0,0,T))
  c.fillStyle=c.strokeStyle=D
  c.beginPath();c.arc(244,130,5.5,0,T);c.fill()
  if(bl)c.lineWidth=4,c.beginPath(),c.arc(214,114,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(214,116,5.5,0,T),c.fill()
}
