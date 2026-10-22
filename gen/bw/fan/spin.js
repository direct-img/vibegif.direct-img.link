// desk fan with its blades whirring and its head turning slowly side to side
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
export default(c,t)=>{
  const y=.55*sin(t*T),k=cos(y),sx=22*sin(y)
  for(const[w,s]of[[30,'#111'],[16,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+sx*.4,170),c.lineTo(128,214),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,220,62,16,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(160,220,8,4,0,0,T);c.fill();c.fillStyle='#fff'
  c.save();c.translate(128+sx,98);c.scale(k,1)
  c.beginPath();c.arc(0,0,82,0,T);c.fill();c.stroke()
  const r=t*T*7/3
  for(let b=0;b<3;b++){
    const a=r+b*T/3
    c.beginPath();c.moveTo(cos(a)*14,sin(a)*14)
    c.bezierCurveTo(cos(a-.5)*48,sin(a-.5)*48,cos(a-.32)*72,sin(a-.32)*72,cos(a+.05)*70,sin(a+.05)*70)
    c.bezierCurveTo(cos(a+.5)*64,sin(a+.5)*64,cos(a+.55)*36,sin(a+.55)*36,cos(a+.6)*14,sin(a+.6)*14)
    c.closePath();c.lineWidth=6;c.fill();c.stroke()
  }
  c.lineWidth=3;for(let s=0;s<12;s++){const a=s*T/12;c.beginPath();c.moveTo(cos(a)*24,sin(a)*24);c.lineTo(cos(a)*78,sin(a)*78);c.stroke()}
  c.beginPath();c.arc(0,0,52,0,T);c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(0,0,82,0,T);c.stroke()
  c.beginPath();c.arc(0,0,20,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,0,6,0,T);c.fill()
  c.restore()
}
