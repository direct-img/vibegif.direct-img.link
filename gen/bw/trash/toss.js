// paper ball tossed in an arc into a happy trash bin, the lid flips open to catch it and the bin bounces
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const lid=.65*(ease((t-.18)/.14)-ease((t-.56)/.12)),land=t>.56&&t<.8?(t-.56)/.24:0,sq=land?.08*sin(land*PI*2)*(1-land):0
  const bp=(t-.06)/.48
  c.save();c.translate(158,232);c.scale(1+sq,1-sq);c.translate(-158,-232)
  c.save();c.translate(228,110);c.rotate(lid)
  c.beginPath();c.roundRect(-144,-12,148,18,8);c.fill();c.stroke()
  c.beginPath();c.roundRect(-88,-26,32,16,7);c.fill();c.stroke()
  c.restore()
  c.restore()
  if(bp<1){
    const s=min(1,t/.06),q=min(1,max(0,bp)),x=(1-q)**2*50+2*(1-q)*q*88+q*q*158,y=(1-q)**2*184+2*(1-q)*q*-30+q*q*130
    c.save();c.translate(x,y);c.rotate(q*5);c.scale(s,s)
    c.beginPath();c.arc(0,0,24,0,T);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(-15,-7);c.lineTo(-3,-2);c.lineTo(5,-15);c.moveTo(-10,12);c.lineTo(3,5);c.lineTo(15,10);c.moveTo(12,-10);c.lineTo(7,3);c.stroke()
    c.restore();c.lineWidth=7
  }
  c.save();c.translate(158,232);c.scale(1+sq,1-sq);c.translate(-158,-232)
  c.beginPath();c.moveTo(90,118);c.lineTo(226,118);c.lineTo(212,232);c.lineTo(104,232);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const x of[124,158,192])c.beginPath(),c.moveTo(x,136),c.lineTo(x+(x-158)*.08,168),c.stroke()
  const hap=t>.56&&t<.92
  c.fillStyle='#111';c.lineWidth=6
  for(const d of[-1,1]){c.beginPath();if(hap)c.arc(158+d*26,198,9,1.15*PI,1.85*PI),c.stroke();else c.arc(158+d*26,196,7,0,T),c.fill()}
  c.beginPath();c.arc(158,206,10,.15*PI,.85*PI);c.stroke()
  c.restore();c.fillStyle='#fff'
}
