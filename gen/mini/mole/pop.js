// mole popping out of a dirt mound with a puff of dirt: it sniffs with its nose and whiskers, then ducks back down
const{sin,PI,max,min}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const up=x=>sin(x*PI*.6)/sin(PI*.6),u=t<.2?up(t/.2):t<.66?1:t<.8?1-sin(PI/2*(t-.66)/.14):0
  const cy=240-90*u,sn=t>.24&&t<.62?sin(T*(t-.24)/.38):0,nx=1.5*sin(T*t*6)*(t>.24&&t<.62),tl=.07*sn,pw=min(1,max(0,(u-.5)/.5))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.save();c.beginPath();c.rect(0,0,256,196);c.clip()
  c.translate(128,196);c.rotate(tl);c.translate(-128,-196)
  shape(128,cy,0,()=>c.ellipse(0,0,37,45,0,0,T))
  if(cy<176){
    c.lineWidth=2.5
    for(const d of[-1,1])for(const e of[-5,6])c.beginPath(),c.moveTo(128+d*20,cy+6),c.lineTo(128+d*46,cy+6+e+2*sn*d),c.stroke()
    c.lineWidth=6
  }
  c.restore()
  if(pw>0)for(const d of[-1,1])shape(128+d*37,190-8*pw,d*.25,()=>c.ellipse(0,0,15,8,0,0,T))
  shape(128,216,0,()=>{c.ellipse(0,0,92,30,0,PI,T);c.closePath()})
  if(t>.02&&t<.27){
    const p=(t-.02)/.25
    for(const[d,s]of[[-1,1],[1,1],[-1,.6],[1,.6]])c.beginPath(),c.arc(128+d*(26+34*p*s),180-34*p*s+44*p*p,4.5*(1-.5*p),0,T),c.fill()
  }
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=3
  c.beginPath();c.ellipse(128,190,30,7,0,.1*PI,.9*PI);c.stroke()
  if(pw>0)for(const d of[-1,1])for(const k of[-1,0,1])c.beginPath(),c.moveTo(128+d*(41+k*5),186-8*pw),c.lineTo(128+d*(45+k*6),182-8*pw),c.stroke()
  if(cy<176){
    c.save();c.translate(128,196);c.rotate(tl);c.translate(-128,-196)
    for(const d of[-1,1])c.beginPath(),c.arc(128+d*12,cy-12,2.8,0,T),c.fill()
    c.beginPath();c.ellipse(128+nx,cy+3-Math.abs(nx),6.5,4.8,0,0,T);c.fill()
    c.restore()
  }
}
