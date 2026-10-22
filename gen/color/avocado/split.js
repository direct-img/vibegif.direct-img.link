// avocado halves rocking apart and back together while the pit hops out of its half and lands again
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const SK='#2f9e44',FL='#c0eb75',IN='#e9fac8',PIT='#a9744f',BL='#ffa8a8'
const half=(c,x,a)=>{
  c.save();c.translate(x,140);c.rotate(a)
  const shape=(s)=>{c.beginPath();c.moveTo(0,-86*s);c.bezierCurveTo(30*s,-86*s,34*s,-34*s,46*s,0);c.bezierCurveTo(62*s,40*s,48*s,84*s,0,84*s);c.bezierCurveTo(-48*s,84*s,-62*s,40*s,-46*s,0);c.bezierCurveTo(-34*s,-34*s,-30*s,-86*s,0,-86*s);c.closePath()}
  shape(1);c.fillStyle=SK;c.fill();c.stroke()
  shape(.84);c.fillStyle=FL;c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle=IN;c.beginPath();c.ellipse(0,20,30,32,0,0,T);c.fill();c.lineWidth=7;c.restore()
}
export default(c,t)=>{
  const o=(1-cos(t*T))/2,hop=max(0,sin(2*T*t)),py=-38*hop
  half(c,72-14*o,-.12-.1*o)
  c.save();c.translate(72-14*o,140);c.rotate(-.12-.1*o);c.fillStyle='#d8f5a2';c.beginPath();c.arc(0,22,24,0,T);c.fill();c.lineWidth=5;c.stroke();c.restore()
  half(c,184+14*o,.12+.1*o)
  c.save();c.translate(184+14*o,140);c.rotate(.12+.1*o)
  const sq=hop<.1?.9:1
  c.translate(0,22+py);c.scale(2-sq,sq)
  c.fillStyle=PIT;c.beginPath();c.arc(0,0,26,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*9,-3,4,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,4,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,6,5,3,0,0,T),c.fill()
  c.restore()
}
