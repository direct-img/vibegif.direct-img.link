// basketball bouncing: squashes on the floor, stretches as it flies, seams turning as it spins
const{PI,abs}=Math,T=2*PI
export const frames=20,delay=60
export default(c,t)=>{
  const h=116*4*t*(1-t),v=abs(1-2*t),con=t<.03,r=48,k=1-h/170
  const sx=con?1.2:1-.08*v,sy=con?.8:1+.1*v
  for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128-46*k,238),c.lineTo(128+46*k,238),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.translate(128,232-h);c.scale(sx,sy);c.translate(0,-r)
  c.beginPath();c.arc(0,0,r,0,T);c.fill()
  c.save();c.clip();c.rotate(t*T);c.lineWidth=5;c.beginPath()
  c.moveTo(-r,0);c.lineTo(r,0);c.moveTo(0,-r);c.lineTo(0,r)
  for(const d of[-1,1])c.moveTo(d*r*.66,-r),c.quadraticCurveTo(d*r*.08,0,d*r*.66,r)
  c.stroke();c.restore()
  c.beginPath();c.arc(0,0,r,0,T);c.stroke()
}
