// round violet avatar blip rebooting: a glossy violet ball powers down as its two white square pixel eyes droop, collapse into a flat line, shrink to a dot and switch off while the ball dims and sags, then the dot comes back, stretches into a line and opens into two eyes that glance left and right as it boots up bright again
export const frames=72,delay=50
const{sin,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t),
C=(a,b,f)=>`rgb(${a.map((v,i)=>v+(b[i]-v)*f|0)})`
export default(c,t)=>{
  let f=s(t,.1,.3)-s(t,.5,.62),g=s(t,.03,.3)-o(t,.56,.68),
  n=s(t,.16,.24)-o(t,.5,.57),q=max(0,1+.25*sin(P*k((t-.22)/.05))-s(t,.27,.3)+o(t,.46,.5)),
  x=-18*o(t,.71,.75)+36*o(t,.77,.81)-18*o(t,.84,.88),
  z=k(2-abs(t*72-66.5))
  c.translate(128+x/9,222+6*g-7*sin(P*k((t-.58)/.14))**2-3*sin(4*P*t)*(1-f))
  c.scale(1+.04*g,1-.04*g);c.translate(0,-90)
  c.fillStyle=C([122,92,255],[72,60,146],f);c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle=C([91,63,224],[54,44,118],f);c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(x,-6+5*g);c.scale(1-abs(x)/150,1)
  c.beginPath()
  for(let d of[-1,1]){
    let m=s(t,.07,.16)-o(t,.555+d*.02,.635+d*.02),
    w=(22+30*m-38*n+6*z)*q,h=(26-10*s(t,0,.07)*(t<.4)-20*z)*(1-m)+10*m+4*n
    q>.3&&c.roundRect(d*(28-6*m)*(1-n)-w/2,-h*q/2,w,h*q,min(6+n,h*q/2))
    m||n||(c.fill(),c.beginPath())
  }
  c.fill()
}
