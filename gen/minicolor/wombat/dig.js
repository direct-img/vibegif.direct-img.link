// chunky wombat digging nose-down into a dirt mound, paws scooping, clods flying back over its back
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
const B='#8a94a6',L='#c5cad3',A='#b5835a',D='#2b2633'
export default(c,t)=>{
  const rk=.035*sin(T*t*2)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(0,-14)
  for(let k=0;k<3;k++){
    const u=(t*2+k/3)%1,x=190-160*u,y=196-4*124*u*(1-u)+20*u,r=7-2*u
    fill(A,()=>c.arc(x,y,r,0,T))
  }
  fill(A,()=>c.ellipse(46,212,28,10,0,0,T))
  fill(A,()=>{c.moveTo(186,216);c.quadraticCurveTo(212,184,238,216);c.closePath()})
  c.save();c.translate(160,210);c.rotate(rk);c.translate(-160,-210)
  for(const[x,y]of[[70,206],[96,210]])fill(B,()=>c.ellipse(x,y,15,9,0,0,T))
  for(const[k,o]of[[0,0],[1,PI]]){
    const a=.7*sin(T*t*2+o)
    c.save();c.translate(170+k*8,194);c.rotate(a);fill(B,()=>c.ellipse(10,12,9,15,-.4,0,T));c.restore()
  }
  fill(B,()=>c.ellipse(112,166,62,44,-.1,0,T))
  fill(B,()=>c.arc(56,150,8,0,T))
  for(const[x,r]of[[162,-.3],[176,.2]])fill(B,()=>c.ellipse(x,140,7,10,r,0,T))
  fill(B,()=>c.ellipse(178,172,32,27,.25,0,T))
  fill(L,()=>c.ellipse(198,182,14,12,.25,0,T))
  c.fillStyle=D;c.beginPath();c.ellipse(205,180,9,7,.25,0,T);c.fill()
  c.beginPath();c.arc(182,160,4.5,0,T);c.fill()
  c.restore()
}
