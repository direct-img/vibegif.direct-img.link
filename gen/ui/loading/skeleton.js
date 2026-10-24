// skeleton placeholder card: gray avatar, text lines and image box with a soft shimmer band sweeping across them
const T=2*Math.PI
export const frames=20,delay=70
export default(c,t)=>{
  c.beginPath();c.roundRect(22,22,212,212,22);c.fill();c.stroke()
  const x=-70+t*400,g=c.createLinearGradient(x-56,150,x+56,106)
  for(const[o,s]of[[0,'#d6d6d6'],[.5,'#f4f4f4'],[1,'#d6d6d6']])g.addColorStop(o,s)
  c.fillStyle=g;c.beginPath();c.arc(68,68,24,0,T)
  for(const[x,y,w]of[[104,52,104],[104,74,70],[42,188,172],[42,208,116]])c.roundRect(x,y,w,13,6.5)
  c.roundRect(42,106,172,70,12);c.fill()
  c.fillStyle='#c4c4c4';c.beginPath();c.moveTo(96,166);c.lineTo(122,132);c.lineTo(140,152);c.lineTo(152,140);c.lineTo(172,166);c.fill()
  c.beginPath();c.arc(170,128,9,0,T);c.fill()
}
