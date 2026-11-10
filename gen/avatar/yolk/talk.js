// round yellow avatar ball talking nonstop: a black mouth with a coral tongue flaps through fast syllables while the ball bounces along, turns from one side to the other, blinks, and squints happily on the last word
export const frames=60,delay=40
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2,
L=[[2,5,19,20],[7,4,12,11],[11,6,23,26],[17,4,15,10],[21,6,11,19],[35,5,20,22],[40,4,13,11],[44,5,17,17],[49,6,24,28]]
export default(c,t,i)=>{
  let W=9,H=0,R=0
  L.map(([f,l,w,h],j)=>{
    let x=(i-f)/l,g=x>0&x<1?S(x*T/2)**.8:0
    W+=(w-9)*g;H+=h*g;R+=(j%2-.5)*g
  })
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  m=r(.02,.08,o)*(1-r(.92,.98)),
  z=r(.8,.85)*(1-r(.91,.96)),
  q=Math.max(0,Math.min(1,2-Math.abs(i-31.5)/.9)),
  sy=1+.05*H/28-.015*m,
  a=-.17*r(.02,.1,o)+.36*r(.47,.58)-.19*r(.91,.98,o),
  b=-.05*H/28+.04*m,
  f=(x,y,g)=>{
    let u=A(x/90),v=A(y/90)
    c.save()
    c.translate(128+90*S(u+a),132+90*S(v+b))
    c.scale(C(u+a)/C(u),C(v+b)/C(v))
    g()
    c.restore()
  }
  c.translate(128,222-H/4)
  c.rotate(a/3+.09*R)
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
    let h=22*z-11
    c.beginPath()
    z<.5?c.ellipse(0,0,9+2*q+6*z,Math.max(3.5,(15+2.5*H/28)*(1-q)-22*z),0,0,T):(c.moveTo(-10,h/2),c.quadraticCurveTo(0,-h*1.5,10,h/2))
    c.lineWidth=8
    z<.5?c.fill():c.stroke()
  })
  f(0,16,_=>{
    c.scale(m,m)
    c.lineWidth=6
    c.beginPath();c.moveTo(-W,0);c.lineTo(W,0);c.bezierCurveTo(W,H*1.3,-W,H*1.3,-W,0);c.closePath()
    c.fill();c.stroke();c.clip()
    c.fillStyle='#ff5d4a'
    c.beginPath();c.ellipse(0,H+5,W*.75,12,0,0,T);c.fill()
  })
}
