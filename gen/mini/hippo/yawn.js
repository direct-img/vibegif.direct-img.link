// hippo with a huge slow yawn: the head tips back and the jaws open wide to show white tusks, eyes squeeze shut, then the ears wiggle
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const y=t>.1&&t<.7?sin(PI*(t-.1)/.6):0,th=Math.min(1,y*3),a=.6*y,w=t>.74&&t<.96?.35*sin(T*3*(t-.74)/.22):0,H=[172,142]
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  const at=(r,f)=>{c.save();c.translate(...H);c.rotate(r);c.translate(-H[0],-H[1]);f();c.restore()}
  const rot=(r,x,y)=>[H[0]+(x-H[0])*cos(r)-(y-H[1])*sin(r),H[1]+(x-H[0])*sin(r)+(y-H[1])*cos(r)]
  c.translate(-10,0)
  for(const x of[70,92,136,158])shape(x,190,0,()=>c.roundRect(-11,-20,22,42,9))
  shape(110,150,0,()=>c.ellipse(0,0,68,46*(1+.02*y),0,0,T))
  at(.25*a,()=>shape(204,152,0,()=>c.ellipse(0,0,32,15,0,0,T)))
  shape(0,0,0,()=>{c.moveTo(...rot(-a,180,141));c.lineTo(...rot(-a,232,140));c.lineTo(...rot(.25*a,232,141));c.closePath()})
  at(-a,()=>{
    shape(154,96,-.4+w,()=>c.ellipse(0,-4,6,9,0,0,T))
    shape(170,92,.2-w,()=>c.ellipse(0,-4,6,9,0,0,T))
    shape(170,118,0,()=>c.ellipse(0,0,30,26,0,0,T))
    shape(206,128,0,()=>c.ellipse(0,0,32,18,0,0,T))
    shape(182,100,0,()=>c.arc(0,0,9,0,T))
    shape(226,116,0,()=>c.arc(0,0,7,0,T))
  })
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=3
  at(.25*a,()=>{
    c.beginPath();c.moveTo(184,141);c.lineTo(230,141);c.stroke()
    if(th>0)for(const x of[210,222])c.beginPath(),c.moveTo(x-3,141),c.lineTo(x+3,141),c.lineTo(x,141-11*th),c.closePath(),c.fill()
  })
  at(-a,()=>{
    c.beginPath();c.moveTo(184,141);c.lineTo(230,140);c.stroke()
    if(th>0)c.beginPath(),c.moveTo(214,140),c.lineTo(219,140),c.lineTo(216.5,140+7*th),c.closePath(),c.fill()
    c.beginPath();c.ellipse(228,113,2.5,1.8,0,0,T);c.fill()
    if(y>.35)c.beginPath(),c.arc(183,97,4,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(183,99,3.6,0,T),c.fill()
  })
}
