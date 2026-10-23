// possum hanging by its tail from a branch: it swings slowly, its little arms dangle a beat behind, its ear twitches and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const a=.13*sin(T*t),b=.3*sin(T*t-1.2),bl=t>.62&&t<.68,tw=t>.3&&t<.38?.35:0
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=14;c.beginPath();c.moveTo(20,32);c.quadraticCurveTo(128,24,236,36);c.stroke()
  c.lineWidth=6;shape(()=>c.ellipse(208,24,7,14,.9,0,T));shape(()=>c.ellipse(46,25,7,13,-.8,0,T))
  c.translate(128,30);c.rotate(a);c.translate(-128,-30)
  c.lineWidth=8;c.beginPath();c.arc(128,30,13,0,T);c.stroke()
  c.beginPath();c.moveTo(128,43);c.quadraticCurveTo(118,58,128,76);c.stroke()
  c.lineWidth=6
  shape(()=>{c.moveTo(128,72);c.bezierCurveTo(104,72,92,100,94,124);c.bezierCurveTo(96,150,112,158,128,158);c.bezierCurveTo(144,158,160,150,162,124);c.bezierCurveTo(164,100,152,72,128,72)})
  for(const d of[-1,1]){c.save();c.translate(128+d*26,140);c.rotate(-d*.7+b);c.lineWidth=10;c.beginPath();c.moveTo(0,0);c.lineTo(0,30);c.stroke()
    c.lineWidth=6;shape(()=>c.ellipse(0,32,7,8,0,0,T));c.restore()}
  c.save();c.translate(98,178);c.rotate(tw);shape(()=>c.arc(0,0,15,0,T))
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.arc(2,2,8,.6*PI,1.9*PI);c.stroke();c.restore()
  shape(()=>c.arc(124,176,32,0,T))
  shape(()=>c.ellipse(150,204,30,15,.95,0,T))
  c.fillStyle=c.strokeStyle='#111'
  c.beginPath();c.arc(166,228,6,0,T);c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(138,176,6,1.15*PI,1.85*PI),c.stroke()
  else c.beginPath(),c.arc(138,178,6,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(132,206);c.quadraticCurveTo(140,216,150,216);c.stroke()
}
