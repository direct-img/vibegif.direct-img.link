// signal icon of a dot and three outlined arcs, pale grey when off: the dot pops on pink, then the arcs light up outward in orange, yellow and teal with a springy swell, all hold lit for a beat, then switch off together
const{sin,PI,min}=Math,T=2*PI
export const frames=36,delay=50
const C=['#ff5f7e','#ff9a3c','#ffd23f','#22cfa0'],ON=[.04,.17,.3,.43],OFF=.82,Y=184
export default(c,t)=>{
 C.map((col,k)=>{
  const x=t-ON[k],lit=x>=0&&t<OFF,y=t-OFF,
   s=lit?1+.32*sin(PI*min(x/.14,1)):y>=0?1-.2*sin(PI*min(y/.12,1)):1
  c.strokeStyle='#111',c.fillStyle=lit?col:'#cdd3da'
  if(!k)return c.lineWidth=6,c.beginPath(),c.arc(128,Y,15*s,0,T),c.fill(),c.stroke()
  const r=k*36+8,w=20*s
  c.beginPath(),c.arc(128,Y,r,-PI/2-.82,-PI/2+.82)
  c.lineWidth=w+11,c.stroke(),c.lineWidth=w,c.strokeStyle=c.fillStyle,c.stroke()
 })
}
