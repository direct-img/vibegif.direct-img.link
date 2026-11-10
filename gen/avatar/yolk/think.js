// round yellow avatar ball thinking hard: it leans over and rolls its black eyes up to the left then across to the right, one eye squinting above a wiggly hmm mouth, while three violet thought dots pop up beside its head
export const frames=72,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,E=Math.exp,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  n=r(.06,.14,o)-r(.86,.93,o),
  p=r(.4,.52),
  d=t-.9,
  w=d>0?E(-d*40)*S(d*T*11):0,
  a=(.56*p-.28+.03*S(t*T*3))*n,
  b=(-.2-.07*S(p*T/2))*n,
  sy=1-.06*r(.02,.06)*(1-r(.06,.11))+.03*n+.012*n*S(t*T*4)-.05*w,
  q=Math.max(0,Math.min(1,2-Math.abs(i-32.5)/.9)),
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.fillStyle='#7a5cff'
  ;[[201,58,7],[215,41,10],[231,24,14]].map(([x,y,z],j)=>{
    c.beginPath()
    c.arc(x,y+1.5*S(t*T*4-j),z*r(.55+j*.07,.6+j*.07,o)*(1-r(.83+j*.015,.87+j*.015)),0,T)
    c.fill()
  })
  c.translate(128,222)
  c.rotate((.11-.25*r(.41,.54,o))*n+.05*w)
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
    let z=n*(s<0?p:1-p),h=Math.max(3.5,(15+2*n-5*z)*(1-q))
    c.beginPath();c.rect(-20,-h,40,h*(2-.7*z));c.clip()
    c.beginPath();c.ellipse(0,0,9+2*q,h,0,0,T);c.fill()
  })
  f(9-18*p,22,_=>{
    let w=4*S(t*T*5),m=Math.max(0,n)
    c.scale(m,m)
    c.strokeStyle='#1b1b24'
    c.beginPath();c.moveTo(-9,0);c.bezierCurveTo(-3,-w,3,w,9,0);c.stroke()
  })
}
