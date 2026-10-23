// beluga bobbing: pale grey-blue whale with a bulging melon head that squishes, smiling, tail and flipper paddling
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85
const B='#9fb8d6',L='#d3dfed',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),m=4*sin(T*t*2),bl=t>.8&&t<.87,fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,130+6*s);c.rotate(.05*cos(T*t));c.translate(-132,-128)
  c.save();c.translate(58,130);c.rotate(.3*sin(T*t-1.3))
  fill(B,()=>{c.moveTo(6,-8);c.quadraticCurveTo(-12,-12,-30,-32);c.quadraticCurveTo(-22,-10,-24,0);c.quadraticCurveTo(-22,10,-30,32);c.quadraticCurveTo(-12,12,6,8)})
  c.restore()
  c.save();c.translate(150,150);c.rotate(-.4-.35*sin(T*t*2));fill(B,()=>c.ellipse(-14,10,20,9,.4,0,T));c.restore()
  fill(B,()=>{c.moveTo(56,124);c.bezierCurveTo(88,90,136,78,166,82);c.bezierCurveTo(196+m,82,214+m,104,208,124)
    c.quadraticCurveTo(220,128,218,134);c.quadraticCurveTo(206,146,196,144);c.bezierCurveTo(180,166,126,172,96,156);c.quadraticCurveTo(72,144,56,136)})
  fill(L,()=>c.ellipse(140,152,40,9,-.05,0,T))
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(180,112,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(180,114,5,0,T),c.fill()
  c.lineWidth=3;c.lineCap='round';c.beginPath();c.moveTo(214,137);c.quadraticCurveTo(204,145,192,138);c.stroke()
}
