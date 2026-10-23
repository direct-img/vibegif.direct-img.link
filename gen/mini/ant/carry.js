// ant carrying a leaf twice its size: six legs walk in a tripod gait, the leaf sways overhead, antennae bob
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const p=T*t*2,b=2*abs(sin(p)),sw=.05*sin(p-1)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=5
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const[k,hx,fo]of[[0,142,26],[1,130,2],[0,118,-24]]){
    const q=p+k*PI,fx=hx+fo+9*sin(q),fy=212-6*max(0,cos(q))
    c.beginPath();c.moveTo(hx,174);c.lineTo((hx+fx)/2+fo*.35,188-b);c.lineTo(fx,fy);c.stroke()
  }
  c.translate(0,-b);c.lineWidth=6
  c.save();c.translate(74,170);c.rotate(-.2);shape(()=>c.ellipse(0,0,32,23,0,0,T));c.restore()
  shape(()=>c.arc(106,172,7,0,T))
  c.save();c.translate(130,168);c.rotate(-.15);shape(()=>c.ellipse(0,0,21,11,0,0,T));c.restore()
  shape(()=>c.arc(162,156,16,0,T))
  c.lineWidth=4;for(const o of[0,6]){c.beginPath();c.moveTo(168+o,146);c.lineTo(184+o,130+2*sin(p+o));c.lineTo(202+o,136+3*sin(p+o));c.stroke()}
  c.lineWidth=5;c.beginPath();c.moveTo(174,166);c.quadraticCurveTo(184,170,178,178);c.stroke()
  c.save();c.translate(174,164);c.rotate(sw)
  c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.lineTo(-24,-52);c.stroke()
  c.translate(-24,-52);c.rotate(-2.6)
  shape(()=>{c.moveTo(0,0);c.quadraticCurveTo(64,-30,130,0);c.quadraticCurveTo(64,30,0,0)})
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(8,0);c.lineTo(118,0)
  for(const x of[34,62,90])c.moveTo(x,0),c.lineTo(x+14,-11),c.moveTo(x,0),c.lineTo(x+14,11)
  c.stroke();c.restore()
  c.fillStyle='#fff';c.beginPath();c.arc(168,152,3.5,0,T);c.fill()
}
