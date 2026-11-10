// round yellow avatar ball listening closely: it leans way over toward mint green sound waves coming in from the upper right, black eyes popped wide open, and nods along
export const frames=60,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  let N=0
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  n=r(.1,.2,o)-r(.85,.94,o),
  g=-r(.04,.09)*(1-r(.1,.15)),
  q=Math.max(0,Math.min(1,2-Math.abs(i-29.5)/.9)),
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.strokeStyle='#1fbf9c'
  for(let j=0;j<4;j++){
    let u=(t-.12-j*.12)/.3,x=(t-.41-j*.12)/.11,w=.55*Math.min(1,4-4*u)
    if(x>0&x<1)N+=S(T/2*x**.6)**2
    if(u>0&u<1){
      c.lineWidth=9*Math.min(1,.4+u*8,12-12*u)
      c.beginPath();c.arc(247,10,13+58*u,2.38-w,2.38+w);c.stroke()
    }
  }
  const a=.3*n+.08*g,
  b=-.13*n+.09*N,
  sy=1+.07*n-.04*g-.03*N
  c.translate(128-22*n+6*g,222)
  c.rotate(.2*n+.08*g+.03*N)
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
    c.beginPath();c.ellipse(0,0,9+2.5*n+2*q,Math.max(3.5,(15+4.5*n-2*N)*(1-q)),0,0,T);c.fill()
  })
}
