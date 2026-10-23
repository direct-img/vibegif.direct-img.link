// kiwi waddling in place: round body rocking side to side, a long curved beak, little legs stepping, a blink
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const s=sin(T*t),b=abs(s),bl=t>.4&&t<.47
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=7
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const k of[0,1]){
    const p=T*t+k*PI,hx=100+k*36,fx=hx+12*sin(p),fy=210-9*max(0,cos(p))
    c.beginPath();c.moveTo(hx,162);c.lineTo(fx,fy);c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(fx-8,fy);c.lineTo(fx+12,fy);c.moveTo(fx,fy);c.lineTo(fx+10,fy-6);c.stroke();c.lineWidth=7
  }
  c.translate(122,206);c.rotate(.05*s);c.translate(-122,-206-4*b)
  c.lineWidth=6
  shape(()=>c.ellipse(112,124,66,50,-.08,0,T))
  shape(()=>c.arc(172,110,24,0,T))
  c.beginPath();c.moveTo(188,112);c.quadraticCurveTo(222,122,234,168);c.stroke()
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(178,102,3.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(178,104,3.5,0,T),c.fill()
}
