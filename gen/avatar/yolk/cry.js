// round yellow avatar ball crying its eyes out: its black eyes well up with blue tears and its lip trembles, then it throws its head back bawling with a huge open mouth while fountains of blue teardrops fly out both sides, and finally sniffles back to calm
export const frames=72,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t)=>{
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  g=r(.05,.1)*(1-r(.9,.96)),
  n=r(.25,.29,o)*(1-r(.78,.84)),
  z=r(.24,.28)*(1-r(.83,.88)),
  k=r(.08,.22)*(1-r(.25,.27)),
  P=t*T*18,
  sy=1-.05*g*(1-n)+.07*r(.2,.25)*(1-r(.25,.3))+.03*n+.03*n*S(t*T*6)+.05*r(.86,.89)*(1-r(.89,.93)),
  a=1.2*g*(1-n)*S(P)/90,
  b=.07*g*(1-n)-.17*n,
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.translate(128,222+1.5*n*S(P))
  c.rotate(.06*n*S(t*T*6))
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
  for(let s of[-1,1])f(s*24,-8,_=>{
    let h=2*z-1
    c.beginPath()
    z<.5?c.ellipse(0,0,9+g+6*z,15+2*g-24*z,0,0,T):(c.moveTo(s*11,2*h),c.quadraticCurveTo(0,13*h,-s*10,-5*h))
    z<.5?c.fill():c.stroke()
    c.fillStyle='#2f9bff'
    c.beginPath();c.ellipse(0,13-3*k,8*k,7*k,0,0,T);c.fill()
  })
  f(0,24,_=>{
    let w=4*S(P),m=g*Math.max(0,1-3*n),W=23+2*S(P),H=30-3*S(P)
    c.save()
    c.scale(m,m)
    c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(-4,-w-3,4,w-3,10,0);c.stroke()
    c.restore()
    c.scale(n,n)
    c.lineWidth=6
    c.beginPath();c.moveTo(-W,H/2);c.lineTo(W,H/2);c.bezierCurveTo(W*.9,-H*.9,-W*.9,-H*.9,-W,H/2);c.closePath()
    c.fill();c.stroke();c.clip()
    c.fillStyle='#ff5d4a'
    c.beginPath();c.ellipse(0,H/2+4,W*.7,11,0,0,T);c.fill()
  })
  c.fillStyle=c.strokeStyle='#2f9bff'
  c.lineWidth=3
  for(let s of[-1,1])for(let j=0;j<10;j++){
    let u=(t-.28-j*.05-(s>0)*.025)/.2,
    v=1+.3*(j%2),
    q=Math.min(1,u*6,8-8*u)
    if(u>0&u<1){
      c.save()
      c.translate(128+s*(38+(66-5*(j%3))*u*(2-u)),108-80*v*u+190*u*u)
      c.rotate(Math.atan2(380*u-80*v,s*132*(1-u)))
      c.scale(q,q)
      c.beginPath();c.moveTo(-16,0);c.arc(0,0,8,-2.1,2.1);c.closePath()
      c.fill();c.stroke()
      c.restore()
    }
  }
}
