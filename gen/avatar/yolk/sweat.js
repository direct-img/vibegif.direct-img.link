// round yellow avatar ball sweating nervously: it stiffens up tall and trembling, its black eyes shrink to dots that dart left and right over a clenched toothy grimace, big blue sweat drops slide down the sides of its head, and it gulps
export const frames=60,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  st=x=>o((t-x)/.04),
  n=r(.05,.1,o)-r(.87,.94,o),
  G=r(.66,.69)*(1-r(.69,.72))-.6*r(.71,.74)*(1-r(.74,.79)),
  q=Math.max(0,Math.min(1,2-Math.abs(i-41.5)/1.4)),
  sy=1+.05*n-.07*G,
  a=.27*(2*st(.26)-st(.12)-2*st(.4)+2*st(.52)-st(.63)-st(.78)+st(.86)),
  b=.03*n+.06*G,
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  },
  D=(w,z,R)=>{
    c.save()
    c.translate(128+(58+R)*C(w),132+(58+R)*S(w))
    c.scale(z,z)
    c.fillStyle='#2f9bff'
    c.beginPath();c.moveTo(0,-1.9*R);c.arc(0,0,R,-.55,T/2+.55);c.closePath();c.fill()
    c.fillStyle='#fff'
    c.beginPath();c.ellipse(-R*.35,R*.15,R*.22,R*.36,.4,0,T);c.fill()
    c.restore()
  }
  c.translate(128+1.3*n*S(i*2.6),222)
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
  c.globalAlpha=1
  D(-.95+.85*r(.2,.62)**2,o((t-.13)/.06)*(1-r(.6,.66)),14)
  D(-2.85-.55*r(.5,.82)**2,o((t-.45)/.06)*(1-r(.8,.86)),9)
  c.fillStyle=c.strokeStyle='#1b1b24'
  for(let s of[-1,1])f(s*24,-8,_=>{
    c.beginPath();c.ellipse(0,0,9-2*n+3*q,Math.max(3.5,(15-7*n)*(1-q)),0,0,T);c.fill()
  })
  f(0,22,_=>{
    let m=Math.max(0,n),w=24+S(i*2.6)
    c.scale(m,m)
    c.beginPath();c.roundRect(-w,-10,2*w,20,10);c.fill()
    c.fillStyle='#fff'
    c.beginPath();c.roundRect(5-w,-5,2*w-10,10,5);c.fill()
    c.lineWidth=3
    c.beginPath()
    for(let x of[-10,0,10])c.moveTo(x,-5),c.lineTo(x,5)
    c.stroke()
  })
}
