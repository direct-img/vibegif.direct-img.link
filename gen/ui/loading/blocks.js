// sliding puzzle loader: rounded blocks in a 2x2 tray take turns sliding into the one empty slot, so the gap walks round and round
const{min,max}=Math
export const frames=24,delay=70
const S=[[44,44],[132,44],[132,132],[44,132]],io=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const n=Math.floor(t*4),p=io((t*4%1)/.6),g=(7-n)%4
  c.beginPath();c.roundRect(28,28,200,200,28);c.fill();c.stroke()
  c.fillStyle='#ddd';for(const[x,y]of S)c.beginPath(),c.roundRect(x+6,y+6,68,68,14),c.fill()
  c.fillStyle='#fff'
  for(let k=0;k<4;k++){
    if(k==g)continue
    const m=k==(g+3)%4,[x0,y0]=S[k],[x1,y1]=S[g],x=m?x0+(x1-x0)*p:x0,y=m?y0+(y1-y0)*p:y0
    c.beginPath();c.roundRect(x,y,80,80,18);c.fill();c.stroke()
    const dx=m&&p<1?(x1-x0)/88*6:0,dy=m&&p<1?(y1-y0)/88*6:0
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(x+40+d*13+dx,y+38+dy,5,0,2*Math.PI),c.fill()
    c.fillStyle='#fff'
  }
}
