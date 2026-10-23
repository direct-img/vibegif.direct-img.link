// firefly drifting: wings flutter every frame, the bulb in its tail lights up white with pulsing rays, then goes dark again
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3
const W=[[-.45,-.95],[-.2,-1.25]]
export default(c,t,i)=>{
  const g=t<.6?sin(PI*t/.6):0
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(128+4*sin(T*t*2),128+8*sin(T*t));c.rotate(.05*cos(T*t));c.translate(-128,-128)
  for(const a of W[i%2])shape(148,112,a,()=>c.ellipse(0,-34,12,34,0,0,T))
  shape(106,142,.35,()=>c.ellipse(0,0,46,23,0,0,T))
  shape(148,124,0,()=>c.ellipse(0,0,18,15,0,0,T))
  shape(170,114,0,()=>c.arc(0,0,13,0,T))
  c.lineWidth=3;for(const[x,y]of[[200,84],[190,78]])c.beginPath(),c.moveTo(174,104),c.quadraticCurveTo(x-6,y+14,x,y),c.stroke()
  if(g>.15){
    c.lineWidth=5;for(const a of[.6,.8,1,1.2]){
      const r=36,R=r+6+14*g,x=cos(a*PI),y=sin(a*PI)
      c.beginPath();c.moveTo(86+x*r,150+y*r);c.lineTo(86+x*R,150+y*R);c.stroke()
    }
  }
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=2.5;c.save();c.translate(86,150);c.rotate(.35);c.beginPath()
  if(g>.15)c.ellipse(0,0,10+4*g,8+3*g,0,0,T),c.fill();else c.ellipse(0,0,10,8,0,0,T),c.stroke()
  c.restore()
  c.fillStyle='#fff';c.beginPath();c.arc(174,110,3.5,0,T);c.fill()
}
