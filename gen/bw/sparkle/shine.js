// big sparkle pulsing in the middle while small sparkles pop in and out around it
const{sin,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const star=(c,x,y,r,a=0)=>{
  const k=r*.16;c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.moveTo(0,-r)
  for(const[px,py,qx,qy]of[[r,0,k,-k],[0,r,k,k],[-r,0,-k,k],[0,-r,-k,-k]])c.quadraticCurveTo(qx,qy,px,py)
  c.restore();c.fill();c.stroke()
}
export default(c,t)=>{
  c.lineWidth=5
  for(const[x,y,r,o]of[[52,60,26,0],[206,54,20,.17],[214,176,28,.33],[60,190,22,.5],[150,222,16,.66],[96,30,14,.83]]){
    const s=max(0,sin(PI*((t*2+o)%1)))
    if(s>.08)star(c,x,y,r*s,.3*s)
  }
  c.lineWidth=7;star(c,128,128,62+10*sin(t*T),.12*sin(t*T))
}
