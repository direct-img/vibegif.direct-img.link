// round yellow avatar ball with two black oval eyes idling restlessly: it breathes, glances left then up to the right, blinks, and does a tiny fidgety hop
export const frames=72,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  k=f=>Math.max(0,Math.min(1,2-Math.abs(i-f-.5)/.9)),
  h=t=>{let u=(t-.66)/.08;return u>0&u<1?-48*u*(1-u):0},
  d=t-.74,
  w=d>0?Math.exp(-d*38)*S(d*T*12):0,
  sy=1+.018*S(t*T*2)+.025*r(.32,.4)*(1-r(.52,.6))-.09*r(.6,.655)*(1-r(.655,.68))+.055*r(.66,.69)*(1-r(.7,.74))-.1*w,
  a=-.3*r(.1,.16,o)+.62*r(.31,.37,o)-.32*r(.52,.59,o)+.05*w,
  b=.1*r(.2,.24,o)-.3*r(.31,.37,o)+.2*r(.52,.59,o)+.12*r(.6,.655)-.12*r(.66,.7)+(h(t-.02)-h(t))/160,
  q=Math.max(k(22),k(38),k(59),k(64)),
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.translate(128,222+h(t))
  c.rotate(-.035*r(.12,.2)+.07*r(.33,.42)-.035*r(.54,.62)+.06*w)
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
  c.globalAlpha=1;c.fillStyle='#1b1b24'
  for(let s of[-1,1])f(s*24,-8,_=>{
    c.beginPath();c.ellipse(0,0,9+2*q,Math.max(3.5,15-15*q),0,0,T);c.fill()
  })
}
