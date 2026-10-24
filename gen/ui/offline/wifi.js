// wifi arcs flicker out one by one from the outside in, a big X pops up and shakes, then the arcs flicker back on
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=28,delay=70
const back=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
export default(c,t,i)=>{
  const R=[50,94,138],O=[9,6,3],N=[20,22,24]
  for(let k=2;k>=0;k--){
    const o=O[k],n=N[k],on=i<o||i==o+1||i==n||i>=n+2
    if(on)for(const[w,s]of[[32,'#111'],[18,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,206,R[k],-PI*.75,-PI*.25),c.stroke()
    else{c.setLineDash([1,15]);for(const[w,s]of[[11,'#111'],[4,'#bbb']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,206,R[k],-PI*.75,-PI*.25),c.stroke();c.setLineDash([])}
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.arc(128,206,20,0,T);c.fill();c.stroke()
  if(i>=12&&i<20){
    const s=i<19?back((i-11)/3):.45,r=i>13&&i<19?(i%2?.14:-.14):0
    c.save();c.translate(128,112);c.rotate(r);c.scale(s,s)
    for(const[w,k]of[[40,'#111'],[24,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(-36,-36),c.lineTo(36,36),c.moveTo(36,-36),c.lineTo(-36,36),c.stroke()
    c.restore()
  }
}
