// crab side-stepping back and forth with its claws up, snapping to the beat
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
const R='#ff6b6b',SP='#ffa8a8',BL='#e03131'
export default(c,t)=>{
  const x=128+22*sin(t*T),sn=(1+cos(4*T*t))/2,b=2*sin(4*T*t)
  const D=(w,col,f)=>{for(const[l,s]of[[w,'#111'],[w-8,col]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  for(const d of[-1,1])for(let k=0;k<3;k++){
    const lift=4*sin(4*T*t+k*2+(d>0?PI:0))
    D(14,R,()=>{c.moveTo(x+d*(34+k*10),176);c.lineTo(x+d*(62+k*11),160+lift);c.lineTo(x+d*(72+k*12),206+(k==1?2:0))})
  }
  for(const d of[-1,1]){
    const cx=x+d*72,cy=92+b
    D(18,R,()=>{c.moveTo(x+d*40,156);c.quadraticCurveTo(x+d*72,150,cx,cy+18)})
    const m=.12+.4*sn,a=-PI/2-d*.35
    c.fillStyle=R;c.beginPath();c.moveTo(cx,cy);c.arc(cx,cy,26,a+m,a-m+T);c.closePath();c.fill();c.stroke()
  }
  for(const d of[-1,1])D(12,R,()=>{c.moveTo(x+d*16,150);c.lineTo(x+d*20,110+b)})
  c.fillStyle=R;c.beginPath();c.ellipse(x,166,62,40,0,0,T);c.fill();c.stroke()
  c.fillStyle=SP;for(const[dx,dy,r]of[[-30,-18,6],[24,-22,5],[36,-6,4],[-40,-2,4]])c.beginPath(),c.arc(x+dx,166+dy,r,0,T),c.fill()
  for(const d of[-1,1]){
    c.fillStyle='#fff';c.beginPath();c.arc(x+d*20,104+b,12,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+d*20+d*2,105+b,5.5,0,T);c.fill()
  }
  c.lineWidth=5;c.beginPath();c.arc(x,170,12,.2*PI,.8*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(x+d*30,176,7,4,0,0,T),c.fill()
}
