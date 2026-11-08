// one thick black arc with a white sticker rim spinning clockwise, its head surges ahead until the arc covers most of the ring then its tail catches up so it shrinks back to a short stub
export const frames=60,delay=30,rim=6
const{PI}=Math,T=2*PI
// ease-in-out cubic, clamped
const E=x=>(x=x<0?0:x>1?1:x,x<.5?4*x*x*x:1-(2-2*x)**3/2)
export default(c,t)=>{
  const b=T*(1.25*t-.25),
    h=b+.06*T+.75*T*E(t/.6),
    s=b+.75*T*E((t-.4)/.6)
  c.lineWidth=26
  c.beginPath(),c.arc(128,128,84,s,h),c.stroke()
}
