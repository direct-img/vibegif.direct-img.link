// cat with bat wings hovering in place: two slow flaps per loop, the body bobs with each beat, tail swishes, slit eyes blink, one tiny fang
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const a=.5*sin(2*T*t),bl=t>.76&&t<.84,s=sin(T*t)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(0,6*sin(2*T*t)-4)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1]){
    c.save();c.translate(128+d*16,134);c.scale(d*.92,.92);c.rotate(-a)
    shape(()=>{c.moveTo(0,-10);c.quadraticCurveTo(40,-48,88,-40);c.quadraticCurveTo(72,-16,78,6);c.quadraticCurveTo(60,-4,52,18);c.quadraticCurveTo(36,4,26,22);c.quadraticCurveTo(14,8,0,14);c.closePath()})
    c.restore()
  }
  c.lineWidth=7;c.beginPath();c.moveTo(142,162);c.bezierCurveTo(160,198,184+10*s,204,186+12*s,186);c.stroke();c.lineWidth=6
  shape(()=>c.ellipse(128,150,22,26,0,0,T))
  for(const d of[-1,1])shape(()=>c.arc(128+d*10,176,6,0,T))
  shape(()=>c.arc(128,104,36,0,T))
  for(const d of[-1,1])shape(()=>{c.moveTo(128+d*32,92);c.lineTo(128+d*32,56);c.lineTo(128+d*6,72);c.closePath()})
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*14,100,7,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.ellipse(128+d*14,102,8,9,0,0,T),c.fill(),c.fillStyle='#111',c.beginPath(),c.ellipse(128+d*14,102,2.2,6.5,0,0,T),c.fill(),c.fillStyle='#fff'
  c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*4,114,4,0,PI),c.stroke()
  c.beginPath();c.moveTo(131,117);c.lineTo(137,117);c.lineTo(134,124);c.fill()
}
