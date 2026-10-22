// mouse pointer glides onto a like button and clicks it: the button presses in, a ring ripples out and the heart fills
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
export default(c,t)=>{
  const go=ease(t/.3)-ease((t-.62)/.3),px=174-24*go,py=132-28*go,click=t>=.34&&t<.42,on=t>=.36&&t<.9,rp=(t-.36)/.3
  const by=click?5:0
  c.lineWidth=10
  c.beginPath();c.roundRect(22,40+by,212,96,48);c.fill();c.stroke()
  c.save();c.translate(124,90+by);c.scale(2.4,2.4)
  c.beginPath();c.moveTo(0,10);c.bezierCurveTo(-18,-2,-12,-18,0,-8);c.bezierCurveTo(12,-18,18,-2,0,10);c.closePath()
  c.restore();if(on)c.fillStyle='#111',c.fill(),c.fillStyle='#fff';c.lineWidth=8;c.stroke()
  if(rp>0&&rp<1){const r=14+40*rp;for(const[w,s]of[[15,'#111'],[6,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(150,104,r,0,T),c.stroke()
    for(const a of[-1.9,-1.1,-.3])for(const[w,s]of[[15,'#111'],[6,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(150+cos(a)*(r+12),104+sin(a)*(r+12)),c.lineTo(150+cos(a)*(r+26),104+sin(a)*(r+26)),c.stroke()}
  c.lineWidth=10;c.strokeStyle='#111'
  c.save();c.translate(px,py);c.scale(click?.9:1,click?.9:1)
  c.beginPath();for(const[x,y]of[[0,0],[0,96],[24,74],[42,112],[61,102],[43,66],[74,64]])c.lineTo(x,y);c.closePath();c.fill();c.stroke()
  c.restore()
}
