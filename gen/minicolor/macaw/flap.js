// macaw standing tall: long red tail, spreads blue-and-yellow wings and flaps twice, head bobbing
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80
const B='#ee5a5a',L='#f6adad',S='#4ea8de',Y='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const u=(t-.18)/.6,on=u>0&&u<1,env=on?sin(PI*u)**.6:0,a=.14+env*(1.35+.45*sin(4*T*u)),hb=.08*sin(T*t*2),bl=t>.86&&t<.92
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  fill(B,()=>{c.moveTo(118,170);c.lineTo(138,170);c.lineTo(134,240);c.lineTo(122,240);c.closePath()})
  fill(S,()=>{c.moveTo(124,214);c.lineTo(132,214);c.lineTo(134,240);c.lineTo(122,240);c.closePath()})
  for(const d of[-1,1])fill(L,()=>c.ellipse(128+d*13,186,10,6,0,0,T))
  fill(B,()=>c.ellipse(128,134,34,52,0,0,T))
  for(const d of[-1,1]){
    c.save();c.translate(128+d*26,104);c.rotate(-d*a)
    fill(S,()=>c.ellipse(0,40,19,42,0,0,T))
    fill(Y,()=>c.ellipse(0,18,17,10,0,0,T))
    fill(B,()=>c.ellipse(0,4,15,10,0,0,T))
    c.restore()
  }
  c.save();c.translate(128,96);c.rotate(hb)
  fill(B,()=>c.arc(0,-24,30,0,T))
  for(const d of[-1,1])fill(L,()=>c.ellipse(d*14,-24,11,13,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(d*14,-27,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(d*14,-25,4.5,0,T),c.fill()
  fill(L,()=>{c.moveTo(-9,-14);c.quadraticCurveTo(0,-22,9,-14);c.quadraticCurveTo(8,0,0,6);c.quadraticCurveTo(-8,0,-9,-14)})
  c.restore()
}
