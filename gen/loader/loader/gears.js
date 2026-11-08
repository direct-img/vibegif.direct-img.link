// three meshing gears ticking round in a smooth clockwork pulse: a big slate-grey gear with a recessed centre drives a light silver gear above right and a small orange gear below right, bold dark outlines, pale hubs with dark axles
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=14,delay=60
const m=8.4,G=[ // n teeth, fill, dark tone, light tone, angle from the big gear
 {n:15,f:'#8a95a2',d:'#606a77',l:'#c7ced6'},
 {n:10,f:'#d3d9e0',d:'#9aa4af',l:'#f4f6f8',a:-.7},
 {n:8,f:'#ff8a3d',d:'#c9581a',l:'#ffd3ad',a:.44}]
G.map(g=>{
 const b=G[0];g.r=m*g.n/2,g.x=g.y=0
 if(g.a){const d=b.r+g.r+1.5;g.x=d*cos(g.a),g.y=d*sin(g.a)}
})
// centre the bounding box of the outer radii
const bb=(k,s)=>s(...G.map(g=>g[k]+(s==min?-1:1)*(g.r+m)))
const ox=128-(bb('x',min)+bb('x',max))/2,oy=128-(bb('y',min)+bb('y',max))/2
const circ=(c,r,f)=>{c.beginPath(),c.arc(0,0,r,0,T),c.fillStyle=f,c.fill(),c.stroke()}
export default(c,t)=>{
 // the big gear advances one tooth per loop (every pose is symmetric), easing into a tick
 const b=G[0];b.ph=(t-.15*sin(T*t))*T/b.n
 G.map((g,k)=>{if(k)g.ph=g.a+PI-(b.ph-g.a)*b.n/g.n+PI/g.n}) // gap faces the big gear's tooth
 G.map((g,k)=>{
  const p=T/g.n,rr=g.r-m,ro=g.r+.85*m,s=k?.7:1
  c.save(),c.translate(g.x+ox,g.y+oy),c.rotate(g.ph)
  c.beginPath()
  for(let j=0;j<g.n;j++){
   const a=j*p
   c.arc(0,0,rr,a-.69*p,a-.31*p)
   c.lineTo(ro*cos(a-.17*p),ro*sin(a-.17*p))
   c.arc(0,0,ro,a-.17*p,a+.17*p)
  }
  c.closePath(),c.fillStyle=g.f,c.lineWidth=6,c.fill(),c.stroke()
  c.lineWidth=4.5
  k||circ(c,rr-9,g.d) // recessed web on the big gear
  circ(c,22*s,g.l) // hub
  circ(c,7*s,'#3a4049') // axle
  c.restore()
 })
}
