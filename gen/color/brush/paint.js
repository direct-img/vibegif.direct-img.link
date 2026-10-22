// paintbrush looping around a figure eight, leaving a rainbow stroke trailing behind its tip
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=24,delay=60
const pos=u=>[128+78*sin(u*T),128+46*sin(2*u*T)]
const hue=k=>`hsl(${(k*300)%360},85%,65%)`
export default(c,t)=>{
  const N=36,L=.5
  for(const[w,a]of[[30,0],[18,1]])for(let k=0;k<N;k++){
    const u0=t-L+k*L/N,u1=u0+L/N,[x0,y0]=pos(u0),[x1,y1]=pos(u1+.002)
    c.lineWidth=w*(.4+.6*k/N);c.strokeStyle=a?hue(u0+5):'#111';c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=7
  const[x,y]=pos(t),[px,py]=pos(t-.01),ang=atan2(y-py,x-px)
  c.save();c.translate(x,y);c.rotate(-PI/4+.25*sin(t*T))
  c.fillStyle=hue(t+5);c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-12,-14,-10,-30);c.lineTo(10,-30);c.quadraticCurveTo(12,-14,0,0);c.fill();c.stroke()
  c.fillStyle='#ced4da';c.beginPath();c.roundRect(-12,-48,24,20,3);c.fill();c.stroke()
  c.fillStyle='#e0a96d';c.beginPath();c.moveTo(-9,-48);c.lineTo(-6,-110);c.quadraticCurveTo(0,-118,6,-110);c.lineTo(9,-48);c.closePath();c.fill();c.stroke()
  c.restore()
}
