// a big blue water droplet pops into view, drops fast and stretches as it plunges into a wide light blue oval pool, thick deep blue ripples ring out across the pool and thin away near its edge, and a small droplet bounces back up and makes its own ripple
export const frames=48,delay=40
const{sin,PI,max,min}=Math,T=2*PI,cy=172,PX=98,PY=46,k=PY/PX
const ob=x=>1+2.7*(x-1)**3+1.7*(x-1)**2 // ease-out-back
// teardrop: round bottom at (x,y), half height r, half width w, tip k*r above
const drop=(c,x,y,r,k,w)=>{
  c.beginPath(),c.moveTo(x,y-k*r)
  c.quadraticCurveTo(x+w*1.02,y-r*.95,x+w,y)
  c.ellipse(x,y,w,r,0,0,PI)
  c.quadraticCurveTo(x-w*1.02,y-r*.95,x,y-k*r),c.fill()
}
export default(c,t)=>{
  // pool
  c.lineWidth=5,c.strokeStyle='#3f9ae8',c.fillStyle='#aedcfc'
  c.beginPath(),c.ellipse(128,cy,PX,PY,0,0,T),c.fill(),c.stroke()
  // ripples: [birth, width, colour]; drawn as squashed circles so the strokes foreshorten like the pool,
  // they stay thick most of the way and thin out near the pool's edge
  ;[[.15,15,'#0f5bbf'],[.29,13,'#1769cc'],[.42,11,'#2179d8']].forEach(([b,w,s])=>{
    const a=((t-b)%1+1)%1/.62
    if(a>=1)return
    const r=10+(PX-22)*(1-(1-a)**1.25),lw=w*(1-a**3)
    if(lw<1.5)return
    c.save(),c.translate(128,cy),c.scale(1,k)
    c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.arc(0,0,r,0,T),c.stroke()
    c.restore()
  })
  c.fillStyle='#1e7fe0'
  if(t>.004&&t<.15){
    // pops in, then a fast fall that stretches it long and thin
    const r=22*ob(min(1,t/.04)),f=max(0,(t-.03)/.12),p=.3*f+.7*f*f,y=78+(cy-22-78)*p,n=1-.22*p
    drop(c,128,y,r,1.9+1.3*p,r*n)
    c.fillStyle='#fff',c.beginPath(),c.ellipse(119+4*(1-n),y-4,4.5*n*r/22,7.5*r/22,.3,0,T),c.fill()
  }else if(t>.18&&t<.42){
    // rebound droplet
    const u=(t-.18)/.24,y=cy-10-56*sin(PI*u)
    c.beginPath(),c.arc(128,y,10*min(1,u*5),0,T),c.fill()
  }
}
