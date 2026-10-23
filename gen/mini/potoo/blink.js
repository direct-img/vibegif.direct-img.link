// potoo on a stump: eyes shut it's just another bit of branch, then the huge eyes pop open, glance left and right, and squeeze shut again
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const o=t<.3?0:t<.38?(t-.3)/.08:t<.8?1:t<.88?1-(t-.8)/.08:0,lk=t>.42&&t<.78?6*sin(T*(t-.42)/.36):0
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  shape(()=>{c.moveTo(90,240);c.lineTo(96,196);c.lineTo(160,196);c.lineTo(166,240);c.closePath()})
  c.strokeStyle='#111';c.lineWidth=3
  c.beginPath();c.ellipse(128,196,32,7,0,0,T);c.stroke()
  for(const[x,y]of[[106,214],[150,222]])c.beginPath(),c.moveTo(x,y),c.lineTo(x,y+16),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6
  c.translate(128,200);c.rotate(.03*sin(T*t));c.scale(1+.04*o,1-.04*o);c.translate(-128,-200)
  shape(()=>{c.moveTo(118,196);c.lineTo(128,228);c.lineTo(138,196)})
  shape(()=>c.ellipse(128,130,46,74,0,0,T))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*42,150),c.quadraticCurveTo(128+d*38,184,128+d*18,198),c.stroke()
  for(const d of[-1,1]){
    const x=128+d*20,y=100
    if(o<.15){c.lineWidth=3.5;c.beginPath();c.moveTo(x-13,y);c.quadraticCurveTo(x,y+4,x+13,y);c.stroke();continue}
    c.save();c.translate(x,y);c.scale(1,o)
    c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(0,0,15,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(lk,1,10,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(lk+3,-3,3,0,T);c.fill()
    c.restore()
  }
  c.beginPath();c.moveTo(123,114);c.lineTo(133,114);c.lineTo(128,121);c.closePath();c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(104,122);c.quadraticCurveTo(128,130,152,122);c.stroke()
}
