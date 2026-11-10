// round violet avatar blip error and failure: a glossy violet ball whose two white square pixel eyes snap into two white crosses while it shakes its head and flashes coral red twice, sags for a moment, then shakes it off and blinks back to normal
export const frames=64,delay=40
const{sin,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t),
b=(t,a,d)=>sin(P*k((t-a)/d))**2,
C=(a,b,f)=>`rgb(${a.map((v,i)=>v+(b[i]-v)*f|0)})`
export default(c,t)=>{
  let m=o(t,.05,.15)-s(t,.58,.7),f=max(.9*b(t,.04,.14),.6*b(t,.19,.14)),
  x=11*sin(2*P*(t-.06)/.0625)*(1-k((t-.06)/.27))**2*(t>.06)+3.5*sin(2*P*(t-.64)/.047)*b(t,.64,.16),
  g=s(t,.22,.36)-o(t,.56,.68),u=b(t,0,.1),
  z=max(k(2.5-abs(t*64-51)),k(2.5-abs(t*64-57)))
  c.translate(128+x,222+4*g-3*sin(4*P*t));c.scale(1+.035*g-.02*u,1-.035*g+.02*u);c.translate(0,-90)
  c.fillStyle=C([122,92,255],[255,93,74],f);c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle=C([91,63,224],[214,52,40],f);c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(-x/3,-6+5*g);c.rotate(.07*sin(2*P*(t-.3)/.26)*g)
  c.beginPath()
  for(let i=m?4:2;i--;){
    c.save();c.translate((i%2*2-1)*(28+3*m),0);c.rotate((i<2||-1)*m*P/4)
    let w=22+2*u-11*m+6*z,h=26+6*u+17*m-20*z
    c.roundRect(-w/2,-h/2,w,h,min(6,w/2,h/2));c.restore();m||(c.fill(),c.beginPath())
  }
  c.fill()
}
