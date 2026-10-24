// three chunky dots hop up one after another in a wave, stretching as they fly and squashing as they land
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=20,delay=60
export default(c,t)=>{
  for(let k=0;k<3;k++){
    const x=54+k*74,u=((t-k*.13)%1+1)%1,h=u<.5?sin(T*u):0,v=u<.5?abs(sin(2*T*u)):0,q=u>.5&&u<.62?sin(PI*(u-.5)/.12):0
    const sx=1-.05*v+.16*q,sy=1+.07*v-.18*q,r=31,y=196-80*h
    c.fillStyle='#bbb';c.beginPath();c.ellipse(x,200,24*(1-.45*h)*sx,5*(1-.4*h),0,0,T);c.fill()
    c.fillStyle='#fff';c.save();c.translate(x,y);c.scale(sx,sy)
    c.lineWidth=7/((sx+sy)/2);c.beginPath();c.arc(0,-r,r,0,T);c.fill();c.stroke();c.restore()
  }
}
