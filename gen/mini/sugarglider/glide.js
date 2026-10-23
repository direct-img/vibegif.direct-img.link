// sugar glider sailing along: limbs spread wide, its skin flaps billow, it banks and bobs, its fluffy tail swishes and its big eyes blink
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=sin(T*t),b=6*sin(T*t*2),bl=t>.55&&t<.61
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,124+5*sin(T*t*2+.5));c.rotate(.1*s);c.scale(.94,.94);c.translate(-128,-124)
  c.save();c.translate(128,168);c.rotate(.25*sin(T*t-1));shape(()=>c.ellipse(0,38,14,38,0,0,T));c.restore()
  const P=[[52,88],[204,88],[68,186],[188,186]]
  c.lineWidth=11;for(const[x,y]of P)c.beginPath(),c.moveTo(128,132),c.lineTo(x,y),c.stroke();c.lineWidth=6
  shape(()=>{c.moveTo(52,88);c.quadraticCurveTo(86-b,136,68,186);c.quadraticCurveTo(128,166+b,188,186);c.quadraticCurveTo(170+b,136,204,88);c.quadraticCurveTo(128,96,52,88)})
  shape(()=>c.ellipse(128,132,34,46,0,0,T))
  for(const[x,y]of P)shape(()=>c.arc(x,y,8,0,T))
  for(const d of[-1,1])shape(()=>c.ellipse(128+d*30,44,13,18,d*.5,0,T))
  shape(()=>c.ellipse(128,74,34,30,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  c.beginPath();c.moveTo(122,46);c.lineTo(134,46);c.lineTo(129.5,66);c.lineTo(126.5,66);c.fill()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*15,72,8,.15*PI,.85*PI),c.stroke()
  else{c.fillStyle='#111';c.beginPath();c.arc(128+d*15,74,8.5,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(128+d*15+3,71,2.5,0,T);c.fill()}
  c.fillStyle='#111';c.beginPath();c.ellipse(128,88,5,3.5,0,0,T);c.fill()
}
