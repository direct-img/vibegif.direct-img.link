// a ring of eight thick rainbow arc segments with dark outlines, each pops in one by one clockwise with a bouncy overshoot, then they pop out in the same order with a little anticipation swell
export const frames=48,delay=40
const{sin,cos,PI,max,min}=Math,T=2*PI,r1=58,r2=102,g=7
const cl=x=>max(0,min(1,x)),
  ob=x=>1+2.7*(x-1)**3+1.7*(x-1)**2, // ease-out-back
  ib=x=>2.7*x**3-1.7*x**2 // ease-in-back
const H=['#ff4d5e','#ff8a2a','#ffc928','#5cd65c','#22c4c4','#3b8cff','#8a5cff','#e84fd0']
export default(c,t)=>{
  for(let k=0;k<8;k++){
    // each segment's own phase, wrapped, so the last one is still leaving as the first returns
    const u=((t-k*.06)%1+1)%1,s=u<.5?ob(cl(u/.16)):1-ib(cl((u-.5)/.16))
    if(s<=.02)continue
    const a0=-PI/2+k*T/8,a1=a0+T/8,am=(a0+a1)/2,rm=(r1+r2)/2,
      x=128+rm*cos(am),y=128+rm*sin(am)
    c.save(),c.translate(x,y),c.scale(s,s),c.translate(-x,-y)
    c.beginPath(),c.arc(128,128,r2,a0+g/r2,a1-g/r2),c.arc(128,128,r1,a1-g/r1,a0+g/r1,1),c.closePath()
    c.fillStyle=H[k],c.fill(),c.lineWidth=6,c.stroke()
    c.restore()
  }
}
