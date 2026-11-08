// a 2x2 sliding tile puzzle in a grey frame: three dark-outlined tiles take turns gliding clockwise into the empty slot, each tile blending to the color of its new corner (coral, yellow, teal, violet) as it slides
export const frames=48,delay=40
const{sin,PI,max,min,floor}=Math,
cl=x=>max(0,min(1,x)),
// smoothstep plus a bump that overshoots ~4% and settles with zero speed
E=s=>s*s*(3-2*s)+7.3*s**3*(1-s)**2,
P=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>[128+x*44,128+y*44]),
C=[[255,104,104],[255,196,52],[38,192,176],[128,100,255]],
mix=(a,b,k)=>a.map((v,j)=>v+(b[j]-v)*k)
export default(c,t)=>{
 c.lineWidth=8,c.strokeStyle='#8a90a0',c.beginPath(),c.roundRect(32,32,192,192,26),c.stroke()
 const k=floor(4*t)%4,u=4*t%1,e=(7-k)%4,m=(e+3)%4,l=cl((u-.04)/.8),p=E(l)
 const tile=(j,x,y,col,s)=>{const h=38*s
  c.lineWidth=6,c.strokeStyle='#111',c.fillStyle=`rgb(${col.map(v=>v|0)})`
  c.beginPath(),c.roundRect(x-h,y-h,2*h,2*h,13*s),c.fill(),c.stroke()
  c.fillStyle=`rgb(${mix(col,[255,255,255],.5).map(v=>v|0)})`
  c.beginPath(),c.arc(x-h+15*s,y-h+15*s,5.5*s,0,2*PI),c.fill()}
 for(let j=0;j<4;j++)if(j!=e&&j!=m)tile(j,...P[j],C[j],1)
 tile(m,...mix(P[m],P[e],p),mix(C[m],C[e],cl(p)),1+.07*sin(PI*l))
}
