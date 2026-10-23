// tarsier clinging to a branch: it swivels its head from side to side with its huge eyes, its big ears follow, its tail sways and it blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const h=sin(T*t),bl=t>.22&&t<.28
  c.fillStyle=c.strokeStyle='#fff'
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=16;c.beginPath();c.moveTo(72,232);c.lineTo(84,24);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(118,196);c.bezierCurveTo(128,238,172,240,186+6*sin(T*t),212);c.stroke()
  c.lineWidth=6
  shape(()=>c.ellipse(186+6*sin(T*t),206,6,11,.3,0,T))
  shape(()=>c.ellipse(106,188,20,30,-.3,0,T))
  shape(()=>c.ellipse(120,152,32,42,.15,0,T))
  c.lineWidth=12;c.beginPath();c.moveTo(118,126);c.lineTo(88,118);c.moveTo(102,206);c.lineTo(82,212);c.stroke();c.lineWidth=6
  for(const[x,y]of[[80,110],[76,122],[82,130],[76,206],[78,218]])shape(()=>c.arc(x,y,5,0,T))
  c.save();c.translate(138,92);c.rotate(.12*h)
  for(const d of[-1,1])shape(()=>c.ellipse(d*38-6*h,-30,16,20,d*.5,0,T))
  shape(()=>c.ellipse(0,0,46,38,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1]){
    const x=d*19+10*h,r=15*(1+.12*d*h)
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(x,-4,r*.7,.15*PI,.85*PI),c.stroke()
    else{c.fillStyle='#111';c.beginPath();c.ellipse(x,-2,r,16,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+4,-8,4,0,T);c.fill()}
  }
  c.fillStyle='#111';c.beginPath();c.ellipse(12*h,18,3.5,2.5,0,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.arc(12*h,22,6,.25*PI,.75*PI);c.stroke()
  c.restore()
}
