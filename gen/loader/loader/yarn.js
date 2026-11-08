// pink ball of yarn rolling in place to the right with its wound strands turning clockwise, a gentle bob, and a loose pink thread trailing off to the left along the floor, wiggling with a curl at its end
const{sin,PI}=Math,T=2*PI
export const frames=20,delay=70
const R=62,X=152,Y=122,lam=Math.PI*2*R/3/2 // ball turns 1/3 per loop; two thread waves per roll
// yarn strand: dark edges with a light core
const tube=(c,f,w=11)=>{c.lineWidth=w,c.strokeStyle='#a82a5c',f(),c.stroke(),c.lineWidth=w-6,c.strokeStyle='#ff9cc2',c.stroke()}
export default(c,t)=>{
 const ph=T/3*t,y=Y-4*sin(PI*t)**2,g=y+R // ground under the ball
 // loose thread: leaves the ball at the floor and trails left
 tube(c,()=>{
  c.beginPath(),c.moveTo(X-10,g-2)
  for(let x=X-12;x>=34;x-=3){
   const d=X-12-x,a=(1.5+d*.08)*sin(T*(x+lam*2*t)/lam)
   c.lineTo(x,g+2+a)
  }
  // curl at the end
  const ex=34,ey=g+2+(1.5+(X-46)*.08)*sin(T*(34+lam*2*t)/lam)
  c.bezierCurveTo(ex-12,ey,ex-14,ey-14,ex-4,ey-14),c.quadraticCurveTo(ex+4,ey-13,ex+2,ey-6)
 },9)
 c.save(),c.translate(X,y)
 c.beginPath(),c.arc(0,0,R,0,T),c.fillStyle='#f0679b',c.fill()
 c.save(),c.clip(),c.rotate(ph)
 // three bands of wraps, 120 degrees apart, each band over the last
 for(let b=0;b<3;b++){
  c.save(),c.rotate(b*T/3+.35)
  for(const k of[.2,.5,.8]){
   c.beginPath(),c.ellipse(0,0,R+4,R*k,0,0,PI)
   c.lineWidth=15,c.strokeStyle='#f0679b',c.stroke() // gap so the band sits on top
   c.lineWidth=6,c.strokeStyle='#b02f63',c.stroke()
  }
  c.restore()
 }
 c.restore()
 // fixed shading: darker rim lower right, highlight upper left
 c.save(),c.clip()
 c.globalAlpha=.28,c.fillStyle='#7a1340',c.beginPath(),c.arc(0,0,R+2,0,T),c.arc(-12,-12,R,0,T,true),c.fill()
 c.globalAlpha=.55,c.fillStyle='#fff',c.beginPath(),c.ellipse(-26,-30,13,7,-.7,0,T),c.fill()
 c.restore()
 c.lineWidth=6,c.strokeStyle='#111',c.beginPath(),c.arc(0,0,R,0,T),c.stroke()
 c.restore()
}
