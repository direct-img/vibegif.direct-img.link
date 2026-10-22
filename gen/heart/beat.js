// heart thumping with a double beat, pop lines burst out on the big one
const{exp,cos,sin,PI}=Math
const p=(t,m)=>exp(-((((t-m+1.5)%1-.5)/.06)**2))
export const delay=60
export default(c,t)=>{
  const s=1+.14*p(t,.1)+.07*p(t,.32),k=p(t,.1)
  c.translate(128,140);c.scale(s,s);c.lineWidth/=s
  c.beginPath();c.moveTo(0,70)
  c.bezierCurveTo(-30,45,-92,10,-92,-30);c.bezierCurveTo(-92,-62,-66,-82,-44,-82);c.bezierCurveTo(-22,-82,-6,-68,0,-50)
  c.bezierCurveTo(6,-68,22,-82,44,-82);c.bezierCurveTo(66,-82,92,-62,92,-30);c.bezierCurveTo(92,10,30,45,0,70)
  c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(-46,-34,24,PI*1.1,PI*1.45);c.stroke()
  if(k<.15)return
  for(const[x,a]of[[-46,-140],[-46,-110],[-46,-80],[46,-40],[46,-70],[46,-100]])
    for(const[w,s2]of[[12,'#111'],[5,'#fff']]){
      const r=a*PI/180;c.lineWidth=w/s;c.strokeStyle=s2;c.beginPath()
      c.moveTo(x+cos(r)*56,-38+sin(r)*56);c.lineTo(x+cos(r)*(56+16*k),-38+sin(r)*(56+16*k));c.stroke()
    }
}
