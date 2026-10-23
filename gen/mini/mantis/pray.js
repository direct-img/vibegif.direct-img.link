// praying mantis: it sways, tilts its triangle head side to side, and gives its folded forearms a little pump
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,invert=true
export default(c,t)=>{
  const s=sin(T*t),pm=t>.3&&t<.6?sin(PI*(t-.3)/.3):0,ht=.3*sin(T*t+1)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=4
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  for(const[hx,kx,ky,fx]of[[130,152,186,166],[118,98,190,82],[112,62,184,46]])c.beginPath(),c.moveTo(hx,160),c.lineTo(kx,ky),c.lineTo(fx,212),c.stroke()
  c.translate(122,212);c.rotate(.03*s);c.translate(-122,-212)
  c.lineWidth=6
  c.save();c.translate(84,158);c.rotate(-.16);shape(()=>{c.moveTo(-50,4);c.quadraticCurveTo(-10,-22,46,-6);c.quadraticCurveTo(10,18,-50,4)});c.restore()
  c.lineWidth=12;c.beginPath();c.moveTo(124,158);c.quadraticCurveTo(140,124,150,86);c.stroke()
  c.save();c.translate(146,102);c.rotate(-.15*pm)
  c.lineWidth=10;c.beginPath();c.moveTo(0,0);c.lineTo(32,8);c.stroke()
  c.save();c.translate(32,8);c.rotate(2.5-.5*pm);c.lineWidth=8;c.beginPath();c.moveTo(0,0);c.lineTo(28,0);c.stroke();c.restore()
  c.restore()
  c.save();c.translate(152,80);c.rotate(ht)
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(d*6,-16),c.quadraticCurveTo(d*12,-48,d*30,-64),c.stroke()
  c.lineWidth=6;shape(()=>{c.moveTo(-20,-16);c.lineTo(20,-16);c.lineTo(0,10);c.closePath()})
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*15,-15,3.5,0,T),c.fill()
  c.restore()
}
