// pendulum wave seen from above and to one side, six rainbow balls on dark strings hang from a slate bar and swing toward and away from you at slightly different rates, drifting out of phase into waves and zigzags and all lining up again at the loop point
const{sin,cos,PI,round}=Math,T=2*PI
export const frames=56,delay=50
const N=6,Y=58,A=.5,
 C=['#ff4d5e','#ff933a','#ffd02e','#3fcf72','#33a6ff','#a35cf5']
export default(c,t)=>{
 const P=[]
 for(let k=0;k<N;k++){
  // pendulum k swings k+1 times per loop, so all realign at t=0
  const q=A*cos(T*(k+1)*t),L=128-k*3,z=L*sin(q),px=128+(k-2.5)*32
  P.push([z,k,px,px-z*.22,Y+L*cos(q)*.74+z*.58])
 }
 c.fillStyle='#596277',c.lineWidth=5,c.beginPath(),c.roundRect(26,Y-12,204,16,8),c.fill(),c.stroke()
 // far balls first
 for(const[z,k,px,x,y]of P.sort((a,b)=>a[0]-b[0])){
  const r=17*(1+z/160)
  // string drawn as crisp pixel rows: no antialias shimmer, packs small
  c.fillStyle='#454d61'
  for(let v=Y;v<y;v++)c.fillRect(round(px+(x-px)*(v-Y)/(y-Y))-2,v,4,1)
  c.fillStyle='#2d3342',c.beginPath(),c.arc(px,Y-4,5,0,T),c.fill()
  c.lineWidth=4,c.fillStyle=C[k],c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
 }
}
