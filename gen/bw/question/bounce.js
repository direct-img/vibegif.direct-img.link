// big question mark bouncing and tilting curiously while its dot hops along on its own beat
const{sin,PI,abs}=Math,T=2*PI
export const frames=20,delay=70
export default(c,t)=>{
  const j=30*abs(sin(PI*t)),sq=j<5,dj=24*abs(sin(2*PI*t))
  c.save();c.translate(128,184-j);c.rotate(.16*sin(t*T));if(sq)c.scale(1.1,.9);c.translate(-128,-184)
  for(const[w,s]of[[48,'#111'],[34,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.arc(128,82,40,PI,PI*2.3);c.quadraticCurveTo(128,126,128,148);c.lineTo(128,158);c.stroke()}
  c.restore()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,212-dj,dj<4?22:19,dj<4?16:19,0,0,T);c.fill();c.stroke()
}
