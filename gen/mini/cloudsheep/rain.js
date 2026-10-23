// sheep whose body is a little rain cloud: it floats and bobs, the puffs breathe, tiny legs dangle, raindrops fall from underneath
const{sin,PI,min}=Math,T=2*PI
export const frames=24,delay=80,rim=3
const P=[[78,112,28],[106,90,32],[142,88,32],[170,108,26],[96,130,28],[132,132,30],[160,128,24],[62,130,20]]
export default(c,t)=>{
  const y=5*sin(T*t),bl=t>.5&&t<.56
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  for(const[x,y0,o]of[[70,146,0],[70,146,.5],[128,158,.25],[128,158,.75],[184,128,.4],[184,128,.9]]){
    const u=(t+o)%1,z=min(1,(1-u)*4),yy=y0+(232-y0)*u
    c.save();c.translate(x,yy);c.scale(z,z);c.beginPath();c.moveTo(0,-9);c.bezierCurveTo(6,-2,6,6,0,6);c.bezierCurveTo(-6,6,-6,-2,0,-9);c.fill();c.restore()
  }
  c.translate(0,y)
  c.lineWidth=8;for(const[i,x]of[92,108,148,164].entries())c.beginPath(),c.moveTo(x,150),c.lineTo(x+3*sin(T*t+i*1.7),176),c.stroke()
  c.lineWidth=6
  P.forEach(([x,y,r],i)=>{c.beginPath();c.arc(x,y,r+1.5*sin(T*t+i*1.3),0,T);c.fill()})
  c.beginPath();c.ellipse(216,100,13,5.5,-.35,0,T);c.fill();c.stroke()
  c.save();c.translate(204,124);c.rotate(-.6+.06*sin(T*t))
  c.beginPath();c.ellipse(0,0,15,23,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(-2,-18,12,0,T);c.fill()
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(5,-3,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(5,-1,4,0,T),c.fill()
  c.restore()
}
