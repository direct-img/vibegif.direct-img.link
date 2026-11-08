// ten thick orange dashes around a ring inch forward like caterpillars, each stretches its front end then pulls its back end along so the dashes breathe long and short, while the whole ring slowly turns clockwise
export const frames=40,delay=40
const{PI,floor}=Math,T=2*PI,N=10,P=T/N,S=.36*P
const E=x=>(x=x<0?0:x>1?1:x,x<.5?4*x*x*x:1-(2-2*x)**3/2)
export default(c,t)=>{
  // two inchworm steps per loop, each moves S; plus a base turn so the total is two dash spacings
  const n=floor(2*t),u=2*t-n,r=1.28*P*t-PI/2,
    h=r+.12+S*(n+E(u/.6)),s=r+S*(n+E((u-.4)/.6))
  c.lineWidth=18,c.strokeStyle='#f97d12'
  for(let k=0;k<N;k++)c.beginPath(),c.arc(128,128,86,s+k*P,h+k*P),c.stroke()
}
