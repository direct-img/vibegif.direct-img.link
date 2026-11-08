// a thick green progress ring in a light grey track with a dark outline fills clockwise from the top to full with an eased pace, holds a beat, then its tail chases round until it is empty again
export const frames=48,delay=40
const{cos,PI}=Math,T=2*PI
// smooth ease-in-out, half cubic half sine so the ends don't drag
const E=x=>(x=x<0?0:x>1?1:x,(x<.5?4*x*x*x:1-(2-2*x)**3/2)*.5+(.5-cos(PI*x)/2)*.5)
export default(c,t)=>{
  const h=E(t/.45),s=E((t-.5)/.45),o=-PI/2
  c.lineCap='butt'
  c.beginPath(),c.arc(128,128,82,0,T)
  c.lineWidth=44,c.strokeStyle='#111',c.stroke()
  c.lineWidth=32,c.strokeStyle='#e3e8e3',c.stroke()
  if(h-s>.002)c.beginPath(),c.arc(128,128,82,o+T*s,o+T*h),c.strokeStyle='#2bb859',c.stroke()
}
