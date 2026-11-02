// round portal into an endless rainbow tunnel: nested wavy seven-lobed rings rush outward toward the viewer, twisting and swaying, colors cycling
export const frames=20,delay=70
const T=Math.PI*2,{sin,cos,max}=Math
export default(c,t)=>{
  c.save()
  c.beginPath()
  c.arc(128,128,118,0,T)
  c.clip()
  for(let k=17;k>=3;k--){
    const u=k+t,R=1.38**u,d=max(0,1-R/150)**2,ox=128+16*d*cos(T*t+u*.25),oy=128+16*d*sin(T*t+u*.25),r0=u*.2
    c.fillStyle=`hsl(${u*40+t*360},100%,${68-R/9}%)`
    c.lineWidth=max(.8,R/22)
    c.beginPath()
    for(let a=0;a<T;a+=T/140){
      const r=R*(1+.1*cos(7*(a+r0)))
      c.lineTo(ox+r*cos(a),oy+r*sin(a))
    }
    c.closePath()
    c.fill()
    c.stroke()
  }
  c.restore()
  c.lineWidth=7
  c.beginPath()
  c.arc(128,128,118,0,T)
  c.stroke()
}
