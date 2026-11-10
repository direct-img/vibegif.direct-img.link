// round yellow avatar ball cracking up laughing: its black eyes squeeze shut into chevrons, a big mouth with a coral tongue flaps open, and the whole ball bounces, throws its head back and doubles over
export const frames=72,delay=40
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  n=r(.16,.22)*(1-r(.76,.9)),
  z=r(.07,.12)*(1-r(.89,.95)),
  m=r(.13,.19,o)*(1-r(.82,.92)),
  P=(t-.2)*T*12,
  R=(t-.2)*T*3,
  sy=1-.1*r(.05,.11)*(1-r(.12,.16))+.08*r(.13,.16)*(1-r(.17,.23))-.045*n*C(P)-.03*r(.44,.54)*(1-r(.8,.9)),
  a=.13*n*S(R),
  b=-.16*r(.13,.19,o)*(1-r(.44,.54))+.13*r(.44,.54)*(1-r(.8,.9))+.03*n*S(P-1),
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.translate(128,222-3.5*n*(1-C(P))-12*r(.13,.17)*(1-r(.17,.22)))
  c.rotate(.08*n*S(R-.7))
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
  for(let s of[-1,1])f(s*24,-8,_=>{
    let h=24*z-12
    c.beginPath()
    z<.5?c.ellipse(0,0,9+6*z,15-22*z,0,0,T):(c.moveTo(s*10,-h),c.lineTo(-s*7,0),c.lineTo(s*10,h))
    c.lineWidth=8
    z<.5?c.fill():c.stroke()
  })
  f(0,17,_=>{
    let h=22+7*S(P+.6)
    c.scale(m,m)
    c.lineWidth=6
    c.beginPath();c.moveTo(-25,0);c.lineTo(25,0);c.bezierCurveTo(25,h*1.3,-25,h*1.3,-25,0);c.closePath()
    c.fill();c.stroke();c.clip()
    c.fillStyle='#ff5d4a'
    c.beginPath();c.ellipse(0,h+5,18,13,0,0,T);c.fill()
  })
}
