// rounded progress bar: the striped fill eases out to full while its stripes slide, then slips off the end and wraps round to start again
const{min,max}=Math
export const frames=24,delay=70
const io=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const X=32,W=192,b=X+W*io(t/.7),a=X+W*io((t-.72)/.26)
  c.beginPath();c.roundRect(18,92,220,72,36);c.fill();c.stroke()
  if(b-a<1)return
  c.save();c.beginPath();c.roundRect(32,106,192,44,22);c.clip()
  c.beginPath();c.roundRect(a,106,b-a,44,22);c.clip()
  c.fillStyle='#111';c.fillRect(0,0,256,256)
  c.fillStyle='#888';const o=t*72%24
  for(let x=-48+o;x<256;x+=24)c.beginPath(),c.moveTo(x,150),c.lineTo(x+12,150),c.lineTo(x+34,106),c.lineTo(x+22,106),c.fill()
  c.restore()
}
