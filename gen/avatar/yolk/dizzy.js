// round yellow avatar ball feeling dizzy: its black eyes turn into spinning spirals over a wavy mouth, the ball sways around in a woozy circle while three little coloured stars orbit its head, then it shakes its head clear
export const frames=72,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2,
l=x=>x<0?0:x>1?1:x
export default(c,t)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  n=r(.1,.22)*(1-r(.8,.9)),
  z=r(.07,.15,l)-r(.82,.9,l),
  P=(t-.1)*T*3,
  k=r(.83,.86)*(1-r(.9,.99)),
  sy=1-.03*n+.025*n*S(2*P)-.05*r(.03,.07)*(1-r(.07,.12)),
  a=.2*n*S(P-.9)+.25*k*S((t-.84)*T*12),
  b=n*(.1*C(P-.9)-.03),
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  },
  st=d=>['#7a5cff','#ff5d4a','#2f9bff'].map((h,j)=>{
    let w=t*T*2+j*T/3,q=S(w),m=o((t-.14-j*.03)/.08)*(1-r(.78+j*.02,.84+j*.02))*(1+.15*q)
    if(q*d<0)return
    c.save()
    c.translate(128+5*n*C(P)+66*C(w),42+14*q)
    c.rotate(w)
    c.scale(m,m)
    c.fillStyle=c.strokeStyle=h
    c.lineWidth=4
    c.beginPath()
    for(let i=0;i<10;i++)c.lineTo((i%2?6:13)*S(i*T/10),-(i%2?6:13)*C(i*T/10))
    c.closePath();c.fill();c.stroke()
    c.restore()
  })
  st(-1)
  c.save()
  c.translate(128+6*n*C(P),222)
  c.rotate(.1*n*S(P)+.05*k*S((t-.84)*T*12-1))
  c.scale(1/sy,sy)
  c.translate(-128,-222)
  c.fillStyle='#ffc62e'
  c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip()
  c.fillStyle='#f09a10'
  c.beginPath();c.rect(38,42,180,180);c.arc(114,116,94,0,T);c.fill('evenodd')
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill()
  c.globalAlpha=1;c.fillStyle=c.strokeStyle='#1b1b24'
  for(let s of[-1,1])f(s*(24+3*Math.min(1,z*2)),-8,_=>{
    let q=Math.max(0,1-2*z),m=o(z/.8)
    c.beginPath();c.ellipse(0,0,9*q,15*q,0,0,T);c.fill()
    c.scale(m,m)
    c.lineWidth=5.5
    c.beginPath()
    for(let j=0;j<=40;j++)c.lineTo(19*j/40*C(j/4-s*t*T*5),19*j/40*S(j/4-s*t*T*5)*s)
    c.stroke()
  })
  f(0,26,_=>{
    let w=5*S(P*2),m=n
    c.scale(m,m)
    c.lineWidth=6
    c.beginPath();c.moveTo(-14,0);c.bezierCurveTo(-7,-w-2,-7,w-2,0,0);c.bezierCurveTo(7,-w+2,7,w+2,14,0);c.stroke()
  })
  c.restore()
  st(1)
}
