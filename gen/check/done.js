// badge pops in, a check mark draws itself, a burst of lines goes off, then it shrinks away
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=60
const back=u=>{const s=2;return 1+(s+1)*(u-1)**3+s*(u-1)**2}
const P=[[90,132],[118,160],[168,102]],L=hypot(28,28)+hypot(50,58)
export default(c,t)=>{
  const s=t<.15?back(t/.15):t>.85?1-((t-.85)/.15)**2:1,p=min(1,max(0,(t-.15)/.28)),b=(t-.45)/.25
  if(b>0&&b<1)for(let k=0;k<8;k++){
    const a=k*T/8+PI/8,r1=82+30*b,r2=r1+20*(1-b)
    for(const[w,st]of[[12,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(128+cos(a)*r1,128+sin(a)*r1),c.lineTo(128+cos(a)*r2,128+sin(a)*r2),c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=7
  if(s<=.01)return
  c.translate(128,128);c.scale(s,s);c.translate(-128,-128);c.lineWidth=7/s
  c.beginPath();c.arc(128,128,74,0,T);c.fill();c.stroke()
  if(p>0){c.lineWidth=20;c.setLineDash([L*p,999]);c.beginPath();for(const[x,y]of P)c.lineTo(x,y);c.stroke();c.setLineDash([])}
}
