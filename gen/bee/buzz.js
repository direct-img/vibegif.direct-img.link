// bee buzzing around a figure eight, wings flapping every frame, dotted trail behind it
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=50
const Z=1.45,pos=t=>[128+52*sin(t*T),128+32*sin(2*t*T)]
export default(c,t,i)=>{
  c.lineWidth=3
  for(let k=1;k<=7;k++){const[x,y]=pos(t-k*.035);c.beginPath();c.arc(x,y,4,0,T);c.fill();c.stroke()}
  const[x,y]=pos(t),dx=cos(t*T),dy=2*cos(2*t*T)*32/52,w=n=>c.lineWidth=n/Z
  c.translate(x,y);c.scale(dx<0?-Z:Z,Z);c.rotate(.25*dy*(dx<0?-1:1))
  w(5);const f=i%2?1:.55
  for(const[wx,wy,r]of[[-6,-26,-.4],[10,-24,.35]])c.beginPath(),c.ellipse(wx,wy-(1-f)*6,13,22*f,r,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-30,-6);c.lineTo(-46,0);c.lineTo(-30,6);c.closePath();w(4);c.fill();c.stroke()
  c.fillStyle='#fff';w(7);c.beginPath();c.ellipse(0,0,33,25,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#111';c.fillRect(-22,-30,11,60);c.fillRect(-3,-30,11,60);c.restore();c.stroke()
  for(const[x0,y0,x1,y1]of[[22,-20,32,-40],[14,-22,16,-42]]){
    for(const[l,s]of[[9,'#111'],[3,'#fff']])w(l),c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
    w(4);c.strokeStyle='#111';c.fillStyle='#fff';c.beginPath();c.arc(x1,y1,4.5,0,T);c.fill();c.stroke()
  }
  c.fillStyle='#111';c.beginPath();c.arc(21,-5,4.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(20,-7,1.6,0,T);c.fill()
  w(4);c.beginPath();c.arc(22,4,6,.1*PI,.6*PI);c.stroke()
}
