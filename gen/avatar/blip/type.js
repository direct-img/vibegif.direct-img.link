// round violet avatar blip typing: a glossy violet ball whose two white square pixel eyes round off and bud a third dot, then the three dots hop one after another like a typing indicator before merging back into two eyes
export const frames=72,delay=40
const{sin,cos,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
J=u=>u<0?[0,-.12*sin(P*k(u/.25+1))]
  :u<1?[-22*sin(P*u),.5*sin(P*u)*abs(cos(P*u))]
  :[0,-.4*sin(P*(u=k((u-1)/.35)))*(1-u)]
export default(c,t)=>{
  let m=s(t,.01,.12)-s(t,.86,.97),
  D=j=>[.15,.38,.61].reduce((q,a)=>(a=J((t-a-j*.045)/.14),[q[0]+a[0],q[1]+a[1]]),[0,0]),
  e=[0,1,2].reduce((q,j)=>q+max(0,-D(j)[1]),0)
  c.translate(128,222+4*e-3*sin(4*P*t));c.scale(1+.02*e,1-.02*e);c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(0,-6+4*m);c.beginPath()
  for(let j of[-1,1,-2,2]){
    let[y,q]=D(j%2?1:j/2+1),g=j%2?min(1,m*1.6):1,w=(22+2*m)*g*(1-q*.6),h=(26-2*m)*g*(1+q),
    x=j%2?j*28*(1-m):j*(14+4*m)
    c.roundRect(x-w/2,m*(y+12-h/2)-h/2,w,h,min(6+6*m,w/2,h/2));m||(c.fill(),c.beginPath())
  }
  c.fill()
}
