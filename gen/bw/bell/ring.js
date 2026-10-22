// bell swinging back and forth, clapper lagging behind, ring lines on each swing
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=60
export default(c,t)=>{
  const a=.38*sin(2*T*t),ca=-.5*sin(2*T*t-.9)
  if(abs(a)>.3){
    const d=a>0?-1:1
    for(const r of[96,118])for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,120,r,d>0?-.35:PI-.35,d>0?.35:PI+.35),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.translate(128,48);c.rotate(a)
  c.save();c.rotate(ca);c.beginPath();c.moveTo(0,40);c.lineTo(0,140);c.lineWidth=6;c.stroke();c.lineWidth=7;c.beginPath();c.arc(0,150,13,0,T);c.fill();c.stroke();c.restore()
  c.beginPath();c.arc(0,4,10,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(-46,128);c.bezierCurveTo(-46,86,-42,16,0,14);c.bezierCurveTo(42,16,46,86,46,128);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(-60,122,120,20,10);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-28,40);c.quadraticCurveTo(-34,70,-34,100);c.stroke()
}
