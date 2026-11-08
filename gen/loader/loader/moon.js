// pale yellow cratered moon with a bold black outline and a soft yellow halo, tilted, cycling through its phases as a slate-blue shadow sweeps across it, crescent to full to crescent, pausing at full to glow brighter while two little gold stars twinkle
export const frames=48,delay=50
const{sin,cos,abs,max,PI}=Math,T=2*PI,R=78
// craters: x,y,r
const K=[[-30,-28,15],[22,-12,10],[-4,30,19],[36,34,7],[-46,14,7],[8,-52,7],[44,-34,5]]
const crat=(c,a,b)=>K.forEach(([x,y,r])=>{
  c.fillStyle=a,c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.fillStyle=b,c.beginPath(),c.arc(x+r*.18,y+r*.18,r*.72,0,T),c.fill()
})
const star=(c,x,y,s)=>{
  c.save(),c.translate(x,y),c.scale(s,s),c.beginPath()
  for(let k=0;k<4;k++){const a=k*PI/2;c.lineTo(cos(a)*16,sin(a)*16),c.quadraticCurveTo(0,0,cos(a+PI/4)*4,sin(a+PI/4)*4)}
  c.closePath(),c.lineWidth=5/s,c.fillStyle='#ffc93c',c.stroke(),c.fill(),c.restore()
}
const pop=x=>x<=0||x>=1?0:sin(PI*x)**2
export default(c,t)=>{
  // full moon holds for t in .31-.41, otherwise the phase runs a whole cycle, slow near full and quick through new
  const x=((t-.41+1)%1)/.9,p=x<1?(PI+T*(x-.04*sin(T*x)))%T:PI
  const k=cos(p),w=max(abs(k)*R,.01),g=Math.round(pop((t-.29)/.14)*2)
  c.translate(128,128)
  ;[['#fff6c4',R+12+6*g],['#ffe98a',R+6+3*g]].forEach(([s,r])=>{c.fillStyle=s,c.beginPath(),c.arc(0,0,r,0,T),c.fill()})
  c.rotate(-.42)
  c.fillStyle='#64729a',c.beginPath(),c.arc(0,0,R,0,T),c.fill()
  crat(c,'#4f5b80','#59668c')
  // lit part: limb half-disc plus or minus the terminator half-ellipse
  c.save(),c.beginPath()
  if(p<PI)c.arc(0,0,R,-PI/2,PI/2),c.ellipse(0,0,w,R,0,PI/2,-PI/2,k>0)
  else c.arc(0,0,R,PI/2,1.5*PI),c.ellipse(0,0,w,R,0,-PI/2,PI/2,k>0)
  c.clip(),c.fillStyle='#fff3a8',c.fillRect(-R,-R,2*R,2*R)
  crat(c,'#e9d36e','#f5e38a')
  c.restore()
  c.lineWidth=8,c.beginPath(),c.arc(0,0,R,0,T),c.stroke()
  c.setTransform(1,0,0,1,0,0)
  star(c,216,50,.6+.55*pop((t-.29)/.12)),star(c,188,28,.42+.4*pop((t-.33)/.11))
}
