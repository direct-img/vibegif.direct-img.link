// round violet avatar blip thinking and processing: a glossy violet ball looks up while its two white square pixel eyes swap places and then orbit each other with fading trails like a tiny spinner, before settling back with a blink
export const frames=72,delay=40
const{sin,cos,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
q=(t,a,b,g=.07)=>(t=k((t-a)/(b-a)))*t*(3-2*t)-g*sin(2*P*t),
A=t=>P*(q(t,.08,.24)+q(t,.26,.42)+3*q(t,.44,.84,.03))
export default(c,t)=>{
  let a=A(t),v=k(abs(A(t+.007)-A(t-.007))*4),
  u=s(t,.02,.11)-s(t,.86,.96),d=sin(P*k(t/.06)),
  x=7*u+7*u*s(t,.44,.8),y=-13*u+4*d,
  b=k(2.5-abs(t*72-66)),w=22+6*b,h=26-20*b-4*v
  c.translate(128+2.5*sin(a-.6)*v+x/8,132-3*sin(4*P*t)-2.5*cos(a-.6)*v+y/8)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.translate(x,y-6);c.scale(1-abs(x)/150,1-abs(y)/150)
  for(let j=4;j--;)for(let d of[-28,28]){
    let g=A(t-j*.012),z=1-j*.13
    c.globalAlpha=[1,.45,.28,.15][j]
    c.beginPath()
    c.roundRect(d*(1+v/6)*cos(g)-w*z/2,d*(1+v/6)*sin(g)-h*z/2,w*z,h*z,min(6+3*v,h*z/2))
    c.fill()
  }
}
