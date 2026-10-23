// puffin with a fish in its beak: the head bobs, the fish dangles and flaps its tail, striped beak, white face mask and belly, a blink
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const a=.07*sin(T*t*2),sw=.15*sin(T*t*2-1.2),fl=.4*sin(T*t*4),bl=t>.6&&t<.67
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const d of[-1,1])shape(()=>{c.moveTo(104+d*16,200);c.lineTo(92+d*16,216);c.lineTo(120+d*16,216);c.closePath()})
  shape(()=>c.ellipse(106,150,46,60,-.08,0,T))
  c.save();c.translate(116,112);c.rotate(a);c.translate(-116,-112)
  shape(()=>c.arc(120,84,32,0,T))
  c.save();c.translate(184,100);c.rotate(-.2+sw)
  shape(()=>c.ellipse(0,24,11,24,0,0,T))
  c.translate(0,46);c.rotate(fl);shape(()=>{c.moveTo(0,-2);c.lineTo(-12,16);c.lineTo(0,10);c.lineTo(12,16);c.closePath()})
  c.restore()
  shape(()=>{c.moveTo(146,58);c.quadraticCurveTo(186,66,200,98);c.quadraticCurveTo(178,110,148,110);c.closePath()})
  c.fillStyle=c.strokeStyle='#fff'
  c.save();c.translate(184,100);c.rotate(-.2+sw);c.beginPath();c.arc(-3,16,3,0,T);c.fill();c.restore()
  c.lineWidth=4;for(const[x,y0,y1]of[[162,66,106],[176,72,106]])c.beginPath(),c.moveTo(x,y0),c.quadraticCurveTo(x+6,88,x,y1),c.stroke()
  c.beginPath();c.moveTo(144,70);c.quadraticCurveTo(146,96,130,100);c.quadraticCurveTo(108,100,96,90);c.quadraticCurveTo(116,70,144,70);c.fill()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(132,80,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(132,82,4.5,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.moveTo(126,84);c.lineTo(112,88);c.stroke()
  c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(120,164,24,36,-.08,0,T);c.fill()
}
