// a teal arc on an outer ring and a coral arc on an inner ring spin in opposite directions, each surging and easing off out of step so they whip past each other
export const frames=40,delay=40
const{sin,PI}=Math,T=2*PI
export default(c,t)=>{
  const a=T*(t-.12*sin(T*t)),b=-T*(t-.12*sin(T*t+PI))
  c.lineWidth=22
  c.strokeStyle='#13a594',c.beginPath(),c.arc(128,128,88,a-PI/2,a-PI/2+.62*T),c.stroke()
  c.strokeStyle='#ff6b57',c.beginPath(),c.arc(128,128,52,b+PI/2,b+PI/2+.55*T),c.stroke()
}
