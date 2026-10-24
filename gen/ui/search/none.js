// binoculars with big worried eyes in the lenses sweep left and right looking for something, find nothing, and break a sweat
const{sin,PI,min,max}=Math,T=2*PI
export const frames=20,delay=90
const cl=u=>min(1,max(0,u))
export default(c,t)=>{
  const s=sin(T*t),x=128+27*s,y=130,lk=sin(T*t+.5),S=1.04
  c.save();c.translate(x,y);c.rotate(.1*s);c.scale(S,S);c.lineWidth=7/S
  c.beginPath();c.roundRect(-24,-30,48,40,9);c.fill();c.stroke()
  c.beginPath();c.arc(0,-40,11,0,T);c.fill();c.stroke()
  for(const d of[-1,1]){
    const cx=d*44
    c.beginPath();c.roundRect(cx-17,-66,34,24,7);c.fill();c.stroke()
    c.beginPath();c.roundRect(cx-34,-48,68,100,30);c.fill();c.stroke()
    c.beginPath();c.arc(cx,18,28,0,T);c.fill();c.stroke()
    const px=cx+9*lk,py=20
    c.fillStyle='#111';c.beginPath();c.arc(px,py,13,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(px-4,py-5,4.5,0,T);c.fill()
    c.lineWidth=5/S;c.beginPath();c.moveTo(cx-18,-16-d*3);c.lineTo(cx+18,-16+d*3);c.stroke();c.lineWidth=7/S
  }
  c.restore()
  const g=cl((t-.12)/.1)*(1-cl((t-.74)/.1)),dy=50*cl((t-.22)/.52)**1.4
  if(g>0){
    c.save();c.translate(x+64+4*s,y-62+dy*.8);c.scale(g,g);c.lineWidth=6
    c.beginPath();c.moveTo(0,-20);c.bezierCurveTo(4,-8,14,0,14,9);c.arc(0,9,14,0,PI);c.bezierCurveTo(-14,0,-4,-8,0,-20);c.fill();c.stroke()
    c.restore()
  }
}
