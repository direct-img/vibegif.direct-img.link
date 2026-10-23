// fox-moth hovering: fox face with a white cheek mask, big moth wings with eyespots beating slowly, feathery antennae
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const f=.5+.5*cos(T*t),bl=t>.7&&t<.78
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(0,7*sin(T*t)+4)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1]){
    c.save();c.translate(128+d*8,136);c.scale(d*(.45+.55*f),1)
    shape(()=>{c.moveTo(0,-8);c.bezierCurveTo(28,-76,98,-86,94,-32);c.bezierCurveTo(92,0,52,14,0,8)})
    shape(()=>{c.moveTo(0,6);c.bezierCurveTo(42,8,76,42,60,72);c.bezierCurveTo(46,94,10,64,0,22)})
    c.fillStyle=c.strokeStyle='#fff';c.lineWidth=4
    c.beginPath();c.arc(60,-36,11,0,T);c.stroke()
    c.beginPath();c.arc(40,48,5,0,T);c.fill()
    c.restore()
  }
  c.save();c.translate(128,160);c.rotate(.14*sin(T*t-1))
  shape(()=>{c.moveTo(-9,0);c.bezierCurveTo(-30,26,-18,64,4,68);c.bezierCurveTo(24,66,22,30,9,0);c.closePath()});c.restore()
  shape(()=>c.ellipse(128,148,17,28,0,0,T))
  shape(()=>{c.moveTo(88,102);c.lineTo(94,58);c.lineTo(116,84);c.lineTo(140,84);c.lineTo(162,58);c.lineTo(168,102);c.quadraticCurveTo(160,122,128,142);c.quadraticCurveTo(96,122,88,102);c.closePath()})
  c.lineWidth=3
  for(const d of[-1,1]){
    c.save();c.translate(128+d*6,88);c.rotate(d*.06*sin(2*T*t))
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-d*2,-34,d*12,-58);c.stroke()
    c.beginPath();c.ellipse(d*13,-56,4.5,12,d*.3,0,T);c.fill();c.restore()
  }
  c.fillStyle=c.strokeStyle='#fff'
  c.beginPath();c.moveTo(96,110);c.quadraticCurveTo(114,108,128,120);c.quadraticCurveTo(142,108,160,110);c.quadraticCurveTo(152,126,128,136);c.quadraticCurveTo(104,126,96,110);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,130,6,4.5,0,0,T);c.fill();c.fillStyle='#fff'
  for(const d of[-1,1])if(bl)c.beginPath(),c.moveTo(128+d*9,100),c.lineTo(128+d*23,95),c.stroke()
  else c.beginPath(),c.ellipse(128+d*16,98,7.5,4.5,-d*.35,0,T),c.fill()
}
