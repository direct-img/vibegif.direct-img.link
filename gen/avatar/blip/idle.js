// round violet avatar blip idle and standing by: a glossy violet ball with two white square pixel eyes hovers gently, blinks, snaps a glance to the left and scans across to the right in tidy steps
export const frames=72,delay=50
const{sin,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t),
X=t=>-26*o(t,.3,.36)+52/3*(o(t,.44,.48)+o(t,.52,.56)+o(t,.6,.64))-26*o(t,.74,.8),
Y=t=>-6*(s(t,.3,.36)-s(t,.74,.8))
export default(c,t)=>{
  let f=t*72,x=X(t),y=Y(t),
  b=max(...[9.5,54.5,60.5].map(a=>k(2-abs(f-a)))),
  u=max(...[9.5,60.5].map(a=>k(1-abs(f-a-3.5)/2))),
  w=22+6*b-u,h=26-20*b+3*u
  c.translate(128+X(t-.03)/9,132-3*sin(4*P*t)+Y(t-.03)/9)
  c.translate(0,90);c.scale(1-.012*sin(4*P*t),1+.012*sin(4*P*t));c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(x,y-6);c.scale(1-abs(x)/150,1-abs(y)/150)
  for(let d of[-28,28]){c.beginPath();c.roundRect(d-w/2,-h/2,w,h,min(6,h/2));c.fill()}
}
