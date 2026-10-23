// loch ness monster gliding through the water: head on a long neck and two humps bob above a wavy water line
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const wy=x=>180+3.5*sin(x*.075+T*t),bl=t>.6&&t<.66,hb=4*sin(T*t-.5)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.save();c.beginPath();c.moveTo(0,0);c.lineTo(256,0);for(let x=256;x>=0;x-=4)c.lineTo(x,wy(x)+1);c.closePath();c.clip()
  c.lineWidth=22;c.beginPath();c.moveTo(176,196);c.bezierCurveTo(168,140,184,104,198,88+hb);c.stroke()
  c.lineWidth=6
  c.save();c.translate(204,84+hb);c.rotate(.12+.05*sin(T*t-1.5));c.beginPath();c.ellipse(6,0,24,14,0,0,T);c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(10,-5,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(10,-4,4.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(27,4);c.quadraticCurveTo(22,8,16,7);c.stroke()
  c.restore()
  for(const[x,rx,ry,p]of[[122,32,28,1],[68,24,20,2.2]])c.beginPath(),c.ellipse(x,184,rx,ry+4*sin(T*t-p),0,0,T),c.fill(),c.stroke()
  c.beginPath();c.moveTo(42,186);c.quadraticCurveTo(28,176,22,158+3*sin(T*t-3));c.quadraticCurveTo(34,166,52,186);c.fill();c.stroke()
  c.restore()
  c.lineWidth=4;c.beginPath();for(let x=16;x<=240;x+=4)c.lineTo(x,wy(x));c.stroke()
}
