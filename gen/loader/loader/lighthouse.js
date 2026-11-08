// red and white striped lighthouse on a grey rock, its yellow lamp beam sweeping round in 3D (stretching out to one side, flaring into a disc as it faces you, passing behind the tower), blue waves bobbing at the base
const{sin,cos,abs,PI}=Math,T=2*PI
export const frames=36,delay=50
const ink='#111',LY=-57
const P=(c,f,fill,lw=6)=>{c.beginPath(),f(),fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=ink,c.stroke())}
// convex hull of the lamp point and the beam's end ellipse (a cone seen from the side)
const hull=pts=>{
  pts.sort((a,b)=>a[0]-b[0]||a[1]-b[1])
  const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]),h=[]
  for(const k of[0,1]){
    const s=[]
    for(const p of k?pts.slice().reverse():pts){while(s.length>1&&cr(s[s.length-2],s[s.length-1],p)<=0)s.pop();s.push(p)}
    s.pop(),h.push(...s)
  }
  return h
}
const beam=(c,f,L,r,fill,lw)=>{
  const ex=L*sin(f),rx=r*abs(cos(f))+.5,pts=[[0,LY]]
  for(let j=0;j<36;j++){const a=j*T/36;pts.push([ex+rx*cos(a),LY+r*sin(a)])}
  P(c,()=>hull(pts).forEach(p=>c.lineTo(...p)),fill,lw)
}
const waves=(c,y,ph,col)=>{
  // a row of round crests, neighbours bobbing in opposite phase; stroke all then fill all so they merge
  const xs=[-80,-56,-32,-8,16,40,64,88].map(x=>x-4),yy=j=>y+3.5*sin(ph+j*PI)
  c.lineWidth=11,c.strokeStyle=ink
  xs.forEach((x,j)=>{c.beginPath(),c.arc(x,yy(j),13,0,T),c.stroke()})
  c.fillStyle=col
  xs.forEach((x,j)=>{c.beginPath(),c.arc(x,yy(j),13,0,T),c.fill()})
}
export default(c,t)=>{
  c.translate(128,124)
  const f=T*t,front=cos(f)>0,B=()=>{beam(c,f,104,32,'#ffd23f',5),beam(c,f,104,14,'#fff3b0',0)}
  if(!front)B()
  waves(c,74,T*2*t,'#2f6fd6')
  // rock
  P(c,()=>{c.moveTo(-66,96),c.bezierCurveTo(-70,66,-48,50,-20,52),c.bezierCurveTo(10,40,52,52,64,74),c.bezierCurveTo(72,86,70,96,60,96),c.closePath()},'#8d8f9e')
  // tower body with stripes
  const body=()=>{c.moveTo(-30,62),c.lineTo(-20,-36),c.lineTo(20,-36),c.lineTo(30,62),c.closePath()}
  P(c,body,'#fff',0)
  c.save(),P(c,body,0,0),c.clip()
  c.fillStyle='#e5383b'
  for(const y of[-36,12])c.fillRect(-40,y,80,24)
  c.restore(),P(c,body,0)
  P(c,()=>{c.moveTo(-8,62),c.lineTo(-8,46),c.arc(0,46,8,PI,0),c.lineTo(8,62)},'#3b3a52',5)
  P(c,()=>c.roundRect(-5,-6,10,12,3),'#3b3a52',4)
  // lamp room, gallery and roof
  P(c,()=>c.roundRect(-16,-72,32,30,3),'#ffe066',5)
  P(c,()=>{c.moveTo(0,-72),c.lineTo(0,-42)},0,4)
  P(c,()=>c.roundRect(-30,-44,60,9,3),'#3b3a52',5)
  P(c,()=>{c.moveTo(-22,-70),c.quadraticCurveTo(-18,-90,0,-92),c.quadraticCurveTo(18,-90,22,-70),c.closePath()},'#e5383b',5)
  P(c,()=>c.arc(0,-96,5,0,T),'#3b3a52',4)
  waves(c,86,T*2*t+PI/2,'#4cc9f0')
  if(front)B()
}
