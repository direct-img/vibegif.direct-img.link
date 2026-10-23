// stork flying with a bundle in its beak: its wings flap, it bobs, the bundle swings and the baby inside blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const f=sin(T*t*2),a=.5+.85*f,sw=.18*sin(T*t*2-1.8),bl=t>.55&&t<.62
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(5,12)
  c.translate(0,46-6*sin(T*t*2+1.2))
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  const wing=(x,y,r,k,ln)=>{
    c.save();c.translate(x,y);c.rotate(r);c.scale(k,k)
    c.beginPath();c.moveTo(14,6);c.bezierCurveTo(-10,-30,-74,-38,-108,-18)
    c.quadraticCurveTo(-94,-8,-100,0);c.quadraticCurveTo(-86,0,-88,9);c.quadraticCurveTo(-74,8,-74,17);c.quadraticCurveTo(-60,14,-58,22);c.quadraticCurveTo(-24,24,14,6)
    c.fill();c.stroke()
    if(ln){c.strokeStyle='#111';c.lineWidth=3;for(const[x0,y0,x1,y1]of[[-100,0,-80,-17],[-88,9,-66,-10],[-74,17,-52,-2],[-58,22,-38,8]])c.beginPath(),c.moveTo(x0+3,y0-3),c.lineTo(x1,y1),c.stroke()}
    c.restore()}
  c.lineWidth=5;for(const[y,d]of[[118,0],[123,8]])c.beginPath(),c.moveTo(64,y),c.lineTo(30,y+8+d),c.stroke()
  c.lineWidth=6
  wing(130,94,a+.3,.82,0)
  shape(()=>{c.moveTo(64,102);c.lineTo(34,92);c.lineTo(40,114);c.closePath()})
  shape(()=>c.ellipse(104,108,56,30,-.1,0,T))
  c.lineWidth=20;c.beginPath();c.moveTo(140,100);c.quadraticCurveTo(166,98,172,74);c.stroke();c.lineWidth=6
  shape(()=>c.arc(176,70,18,0,T))
  c.save();c.translate(204,83);c.rotate(sw)
  shape(()=>{c.moveTo(-6,2);c.lineTo(-14,-12);c.lineTo(0,-4);c.lineTo(12,-14);c.lineTo(6,2)
    c.bezierCurveTo(30,20,36,62,0,66);c.bezierCurveTo(-36,62,-30,20,-6,2)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.arc(0,42,14,0,T);c.stroke()
  for(const d of[-1,1])if(bl)c.beginPath(),c.arc(d*5.5,40,3.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(d*5.5,41,3,0,T),c.fill()
  c.beginPath();c.arc(0,46,4,.2*PI,.8*PI);c.stroke()
  c.restore()
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  shape(()=>{c.moveTo(186,62);c.lineTo(229,86);c.lineTo(188,80);c.closePath()})
  wing(118,98,a,1,1)
  c.fillStyle='#111';c.beginPath();c.arc(180,66,5,0,T);c.fill()
}
