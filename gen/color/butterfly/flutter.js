// butterfly fluttering in a little loop, purple and pink wings with yellow spots
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=60
const UP='#b197fc',LO='#faa2c1',SP='#ffd43b',BD='#7048e8'
export default(c,t)=>{
  const x=128+20*sin(t*T),y=128+12*sin(2*T*t),r=.12*cos(t*T),s=.22+.78*abs(cos(3*PI*t))
  const W=(d,f,col)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(d*s,1);c.beginPath();f();c.restore();c.fillStyle=col;c.fill();c.stroke()}
  for(const d of[-1,1]){
    c.lineWidth=7
    W(d,()=>{c.moveTo(0,4);c.bezierCurveTo(50,10,80,44,58,74);c.bezierCurveTo(40,92,6,62,0,12)},LO)
    W(d,()=>{c.moveTo(0,-6);c.bezierCurveTo(30,-72,100,-62,86,-14);c.bezierCurveTo(80,6,30,6,0,0)},UP)
    c.lineWidth=4
    W(d,()=>c.ellipse(58,-30,13,13,0,0,T),SP)
    W(d,()=>c.ellipse(34,-14,6,6,0,0,T),'#fff')
    W(d,()=>c.ellipse(40,46,9,9,0,0,T),SP)
  }
  c.save();c.translate(x,y);c.rotate(r)
  for(const d of[-1,1])for(const[w,st]of[[8,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(d*4,-36),c.quadraticCurveTo(d*10,-62,d*22,-66),c.stroke()
  c.lineWidth=4;c.strokeStyle='#111';c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*22,-66,4.5,0,T),c.fill(),c.stroke()
  c.lineWidth=6;c.fillStyle=BD;c.beginPath();c.ellipse(0,8,8,36,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,-34,11,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*4,-35,2.2,0,T),c.fill()
  c.restore()
}
