// three amber four-point sparkles, big, medium and small, twinkle one after another: each pops up with a little overshoot, its gold heart flashes pale cream, then it twists and shrinks away
const{sin,cos,exp,min,max,round,PI}=Math,T=2*PI
export const frames=36,delay=50
const cl=x=>min(1,max(0,x)),
  oBack=x=>(x=cl(x)-1,1+2.7*x*x*x+1.7*x*x),
  mix=(a,b,f)=>`rgb(${a.map((v,k)=>round(v+(b[k]-v)*f))})`,
  // four-point sparkle: tips at R, concave sides pulled to the centre through radius q*R
  star=(c,R,q)=>{c.beginPath(),c.moveTo(R,0)
    for(let j=1;j<=4;j++){const a=j*PI/2,m=a-PI/4
      c.quadraticCurveTo(q*R*cos(m),q*R*sin(m),R*cos(a),R*sin(a))}
    c.fill()},
  // [x, y, size, start time]
  S=[[-20,14,80,-.22],[54,-50,50,.11],[58,62,32,.45]]
export default(c,t)=>{
  c.translate(128,128)
  for(const[x,y,R,o]of S){
    const u=((t-o)%1+1)%1/.74
    if(u>=1)continue
    const f=exp(-(((u-.3)/.08)**2)),s=(u<.32?oBack(u/.32):1-cl((u-.32)/.68)**2.4)*(1+.1*f)
    if(s<.02)continue
    c.save(),c.translate(x,y),c.rotate(.9*(u-.32))
    c.fillStyle=mix([232,150,31],[240,166,44],f),star(c,R*s,.2)
    c.fillStyle=mix([255,205,92],[255,242,196],f),star(c,R*s*(.5+.14*f),.24)
    c.restore()
  }
}
