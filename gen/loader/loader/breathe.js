// three nested rings, orange outside, coral middle and cream inside with a terracotta edge, around an amber dot, slowly breathe out from circles into rounded squares, hold, and sink back in to circles, each ring a beat behind the one inside it
const{PI}=Math
export const frames=40,delay=60
const ss=x=>x*x*x*(x*(6*x-15)+10),
  // inhale, hold, exhale, hold
  br=t=>(t=(t%1+1)%1,t<.38?ss(t/.38):t<.5?1:t<.88?1-ss((t-.5)/.38):0)
export default(c,t)=>{
  c.translate(128,128)
  const R=[[92,'#d97757'],[62,'#f08c6e'],[33,'#fbe3c0']]
  for(let k=0;k<3;k++){
    const[h,col]=R[k],b=br(t-(2-k)*.05),s=h*(.76+.24*b)
    const ring=()=>{c.beginPath(),c.roundRect(-s,-s,2*s,2*s,s*(1-.62*b)),c.stroke()}
    if(k==2)c.lineWidth=20,c.strokeStyle='#c15f3c',ring()
    c.lineWidth=14,c.strokeStyle=col,ring()
  }
  const b=br(t+.05)
  c.fillStyle='#f2a541',c.beginPath(),c.arc(0,0,6+5*b,0,2*PI),c.fill()
}
