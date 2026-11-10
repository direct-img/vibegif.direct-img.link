// round violet avatar blip loading: a glossy violet ball whose two white square pixel eyes merge into one wide progress bar that empties, fills up from left to right in steps, pops when complete and splits back into two eyes
export const frames=72,delay=40
const{sin,PI:P,min,max}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t)
export default(c,t)=>{
  let m=o(t,.01,.13)-o(t,.83,.95),
  p=1-s(t,.12,.18)+.3*o(t,.19,.26)+.15*o(t,.31,.36)+.37*s(t,.41,.53)+.08*o(t,.57,.61)+.1*o(t,.66,.71),
  e=sin(P*k((t-.7)/.12))**2,g=sin(P*k((t-.7)/.08)),
  h=26-8*m+4*g,w=22+39*m+2*g,q=t>.12&&t<.7
  c.translate(128+(4*p-2)*(s(t,.12,.2)-s(t,.72,.83)),222+2*m-10*e-3*sin(4*P*t))
  c.scale(1-.04*e+.01*m,1+.05*e-.01*m);c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.translate(0,-6-3*e)
  c.globalAlpha=1;c.beginPath()
  if(q)for(let a of[.35,1]){c.globalAlpha=a;c.beginPath();c.roundRect(-52,-9,a<1?104:18+86*p,18,9);c.fill()}
  else{
    for(let d of[-1,1]){c.roundRect(d*(28-6.5*m)-w/2,-h/2,w,h,6+3*m);m||(c.fill(),c.beginPath())}
    c.fill()
  }
}
