// clownfish wiggle-swimming: orange body with white bands kept inside an orange edge, tail and fins fluttering
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=70
const B='#ff9f43',L='#ffcfa1',W='#fff',D='#2b2633'
export default(c,t)=>{
  const w=sin(T*t*2),fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(140,128+5*sin(T*t));c.rotate(.05*sin(T*t*2+1));c.scale(1.08,1.08);c.translate(-128,-128)
  fill(B,()=>{c.moveTo(92,104);c.quadraticCurveTo(102,70+4*w,130,72);c.quadraticCurveTo(158,74,166,100)})
  fill(B,()=>c.ellipse(116,164,22,12,-.3+.1*w,0,T))
  c.save();c.translate(70,128);c.rotate(.3*w)
  fill(B,()=>{c.moveTo(8,0);c.quadraticCurveTo(-12,-16,-40,-34);c.quadraticCurveTo(-28,0,-40,34);c.quadraticCurveTo(-12,16,8,0)})
  c.restore()
  fill(B,()=>c.ellipse(130,128,66,44,0,0,T))
  c.save();c.beginPath();c.ellipse(130,128,57,35,0,0,T);c.clip()
  c.fillStyle=W;for(const[x,r]of[[170,9],[124,12],[80,8]])c.beginPath(),c.ellipse(x,128,r,50,0,0,T),c.fill()
  c.restore()
  c.save();c.translate(144,142);c.rotate(.5+.4*sin(T*t*2+2));fill(L,()=>c.ellipse(12,0,14,8,0,0,T));c.restore()
  c.fillStyle=D;c.beginPath();c.arc(184,118,6,0,T);c.fill()
  c.strokeStyle=D;c.lineWidth=3;c.lineCap='round';c.beginPath();c.arc(190,134,6,.35*PI,.8*PI);c.stroke()
}
