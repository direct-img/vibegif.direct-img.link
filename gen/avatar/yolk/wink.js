// round yellow avatar ball giving a cheeky wink: it crouches, hops up, snaps one black eye shut into a chevron with a lopsided grin while a violet sparkle pops beside its head, then lands with a squish and settles
export const frames=44,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,E=Math.exp,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  u=(t-.2)/.14,
  h=u>0&u<1?-64*u*(1-u):0,
  d=t-.34,
  w=d>0?E(-d*30)*S(d*T*9):0,
  z=r(.23,.28)-r(.66,.72),
  m=r(.24,.31,o)-r(.74,.84),
  n=r(.2,.3)-r(.64,.76),
  sy=1-.085*r(.07,.18)*(1-r(.19,.23))+.08*r(.2,.24)*(1-r(.28,.34))-.11*w,
  a=.1*n,
  b=.06*r(.07,.18)*(1-r(.19,.24))-.05*n-.04*w,
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  },
  sp=(x,y,R,q,k)=>{
    c.save()
    c.translate(x,y)
    c.rotate(k)
    c.scale(q,q)
    c.beginPath();c.moveTo(R,0)
    for(let j=1;j<5;j++)c.quadraticCurveTo(R/5*C(j*T/4-T/8),R/5*S(j*T/4-T/8),R*C(j*T/4),R*S(j*T/4))
    c.fill();c.stroke()
    c.restore()
  }
  c.save()
  c.translate(128,222+h)
  c.rotate(.1*n+.04*w)
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
  c.lineWidth=8
  f(-24,-8,_=>{
    c.beginPath();c.ellipse(0,0,9+n,15+2*n,0,0,T);c.fill()
  })
  f(24,-8,_=>{
    let h=24*z-12
    c.beginPath()
    z<.5?c.ellipse(0,0,9+6*z,15-22*z,0,0,T):(c.moveTo(10,-h),c.lineTo(-7,0),c.lineTo(10,h))
    z<.5?c.fill():c.stroke()
  })
  f(5,20,_=>{
    let q=Math.max(0,m)
    c.scale(q,q)
    c.lineWidth=7
    c.beginPath();c.moveTo(-15,-1);c.quadraticCurveTo(2,13,17,-7);c.stroke()
  })
  c.restore()
  c.fillStyle=c.strokeStyle='#7a5cff'
  c.lineWidth=3
  sp(217,46,20,o((t-.26)/.09)*(1-r(.58,.66))*(1+.12*S(t*T*8)),2*r(.26,.42)-1.2+r(.54,.66))
  sp(235,80,9,o((t-.32)/.09)*(1-r(.52,.6)),1-2*r(.32,.6))
}
